import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import InputBase from "@mui/material/InputBase";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const AddClient = () => {
  const baseURL = "http://localhost:3000/clients";
  const [id] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState(false);

  async function addData() {
    const post = await axios({
      url: baseURL,
      method: "POST",
      data: {
        id,
        name: name,
        surname:surname,
        email: email,
      },
    }).then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
        console.log(error)
    })
  }
  useEffect(() => {
      
    addData();
  }, [])
  return (
    <div>
      <FormGroup>
        <InputLabel htmlFor="name">Imię klienta</InputLabel>
        <InputBase id="name" onChange={(e) => setName(e.target.value)} />
        <InputLabel htmlFor="surname">Nazwisko klienta</InputLabel>
        <Input id="nazwisko" onChange={(e) => setSurname(e.target.value)} />
        <InputLabel htmlFor="email">Email klienta</InputLabel>
        <Input id="email" onChange={(e) => setEmail(e.target.value)} />
        <Button type="submit" size="large" onClick={addData}>Wyślij</Button>
      </FormGroup>
    </div>
  );
};

export default AddClient;
