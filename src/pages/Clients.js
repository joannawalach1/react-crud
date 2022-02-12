import { useState, useEffect } from "react";
import axios from "axios";
import ShowClient from "./../components/viewClients";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Clients = () => {
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

  function takingInputs(e) {
    setName(e.target.value)
    setSurname(e.target.value)
    setEmail(e.target.value)
}

  return (
    <div>
      <div>
          <h2> Add a new Client</h2>
          <Container style={{ width: 300 }}>
              <FormGroup>
                  <InputLabel htmlFor="name">Imię klienta</InputLabel>
                  <Input id="name" onChange={e => takingInputs(e)} />
                  <InputLabel htmlFor="surname">Nazwisko klienta</InputLabel>
                  <Input id="nazwisko" onChange={e => takingInputs(e)} />
                  <InputLabel htmlFor="email">Email klienta</InputLabel>
                  <Input id="email" onChange={e => takingInputs(e)} />
                  <div>
                      <Button type="submit" size="large" onClick={addData} style={{ width: 100 }}>Wyślij</Button>
                      <Button type="submit" size="large" style={{ width: 100 }}>Cancel</Button>
                  </div>
              </FormGroup></Container>
      </div>
      <ShowClient />
      <div>
      </div></div>
  );
};

export default Clients;
