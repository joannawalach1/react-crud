import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ShowOrder = () => {
    const baseURL = "http://localhost:3000/order";
    const [orders, setOrders] = useState(null);

    async function takeData() {
        await axios({
            url: baseURL,
            method: "GET",
        }).then((response) =>
            setOrders(response.data)
        );
    }

    useEffect(() => {
        takeData();
    }, [takeData]);

    const deleteData = async id => {
        await axios.delete(`http://localhost:3000/order/${id}`);
        var neworder = orders.filter((item) => {
            return item.id !== id;
        })
        setOrders(neworder);
    }

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Id zamówienia</TableCell>
                            <TableCell>Zakupiony produkt</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                        {orders &&
                            orders.map((order,index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell></TableCell>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell>{order.order_details}</TableCell>
                                        <TableCell>
                                            <IconButton id="view" variant="contained" color="warning"><VisibilityIcon color="primary" /></IconButton>
                                            <IconButton id="edit" variant="contained" color="info"><EditIcon /></IconButton>
                                            <IconButton id="remove" variant="contained" color="secondary" onClick={() => deleteData(order.id)}><DeleteIcon color="secondary" /></IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}


export default ShowOrder;