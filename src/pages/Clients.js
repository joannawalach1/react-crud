import { useState, useEffect } from "react";
import NavBar from "./../basicComponents/navBar";
import axios from "axios";
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';



const baseURL = "http://localhost:3000/clients";

export default function Clients() {
    const [clients, setClients] = useState(null);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setClients(response.data);
            });
    }, []);

    if (!clients) return null;

    return (
        <Container>
            {clients.map((client) =>
                <div key={client.id}>
                    <InputLabel htmlFor="id">Id</InputLabel>
                    <InputBase name="id" value={client.id}></InputBase>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input name="name" value={client.name}></Input>
                    <InputLabel htmlFor="surname">Surname</InputLabel>
                    <Input name="surname" value={client.surname}></Input>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input name="email" value={client.email}></Input>
                    <NavBar />
                </div>
            )}
        </Container>
    )
}