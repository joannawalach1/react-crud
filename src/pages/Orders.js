import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import NavBar from "../basicComponents/navBar";

const Orders = () => {
  const baseURL = "http://localhost:3000/order";
  const [orders, setOrders] = useState(null);

  async function takeData() {
    const response = await axios({
      url: baseURL,
      method: "GET",
    })
    .then((response => {
    setOrders(response.data)
    const data = response.data
    console.log(data)
    return data
  }))}

  useEffect(() => {
    takeData();
  }, []);

  return (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Id zamówienia</TableCell>
              <TableCell>Szczegóły zamówienia</TableCell>
              <TableCell></TableCell>
            </TableRow>
            {orders &&
              orders.map((order) => {
                return (
                  <TableRow key={order.order_details}>
                    <TableCell></TableCell>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.order_details}</TableCell>
                    <TableCell><NavBar /></TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Orders;