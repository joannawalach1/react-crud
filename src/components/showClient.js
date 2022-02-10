import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import NavBar from "../basicComponents/navBar";
import Clients from "./../pages/Clients"

const ShowClient = () => {
  const baseURL = "http://localhost:3000/clients";
  const [clients, setClients] = useState(null);

  async function takeData() {
    const response = await axios({
      url: baseURL,
      method: "GET",
    }).then((response) => {
      setClients(response.data);
      const data = response;
      console.log(data);
      return data;
    });
  }

  useEffect(() => {
    takeData();
  }, [takeData]);

  return (
    <div>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Id klienta</TableCell>
              <TableCell>Imię klienta</TableCell>
              <TableCell>Nazwisko klienta</TableCell>
              <TableCell>Email klienta</TableCell>
              <TableCell></TableCell>
            </TableRow>
            {clients &&
              clients.map((client) => {
                return (
                  <TableRow key={client.id}>
                    <TableCell></TableCell>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>{client.name}</TableCell>
                    <TableCell>{client.surname}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell><NavBar /></TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShowClient;
