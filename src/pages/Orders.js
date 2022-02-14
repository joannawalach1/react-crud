import { useState, useEffect } from "react";
import axios from "axios";
import ShowOrder from "./../components/viewOrders";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Orders = () => {
  const baseURL = "http://localhost:3000/order";
  const [id] = useState("");
  const [product, setProduct] = useState("");

  async function addOrder(e) {
    await axios({
      url: baseURL,
      method: "POST",
      data: {
        id,
       order_details: product
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
    addOrder();
  }, []);

  return (
    <div>
      <h2> Add a new Order</h2>
      <Container style={{ width: 300 }}>
        <FormGroup>
          <InputLabel htmlFor="product">Zakupiony produkt</InputLabel>
          <Input id="product" onChange={(e) => setProduct(e.target.value)}></Input>
          <div>
            <Button type="submit" size="large" onClick={addOrder} style={{ width: 100 }}>Wyślij</Button>
            <Button type="submit" size="large" style={{ width: 100 }}>Cancel</Button>
          </div>
        </FormGroup>
        </Container>

      <div><ShowOrder /></div>
      
    </div>
  );
};

export default Orders;