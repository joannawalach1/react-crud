import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const AddClient = () => {
    const baseURL = "http://localhost:3000/clients";
    const [id] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

    async function addData(e) {
        const post = await axios({
            url: baseURL,
            method: "POST",
            data: {
                id,
                name: name,
                surname: surname,
                email: email,
            },
        })
            .then((response) => {

                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        addData();
    }, []);
    return (
        <div>
            <h2> Add a new Client</h2>
            <Container style={{ width: 300 }}>
                <FormGroup>
                    <InputLabel htmlFor="name">Imię klienta</InputLabel>
                    <Input id="name" onChange={(e) => setName(e.target.value)} />
                    <InputLabel htmlFor="surname">Nazwisko klienta</InputLabel>
                    <Input id="nazwisko" onChange={(e) => setSurname(e.target.value)} />
                    <InputLabel htmlFor="email">Email klienta</InputLabel>
                    <Input id="email" onChange={(e) => setEmail(e.target.value)} />
                    <div>
                        <Button type="submit" size="large" onClick={addData} style={{ width: 100 }}>Wyślij</Button>
                        <Button type="submit" size="large" style={{ width: 100 }}>Cancel</Button>
                    </div>

                </FormGroup></Container>
        </div>
    );
};

export default AddClient;
