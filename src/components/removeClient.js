import {useState, useEffect} from 'react';
import axios from 'axios';

const RemoveClient = (e) => {
    const baseURL = "http://localhost:3000/clients";
     const [clients, setClients] = useState();

    async function RemoveClient(id) { 
        const post = await axios({
            url: baseURL+`/${id}`,
            method: "DELETE",
        }).then((response) => {
            alert(e.target.id)
            setClients(response.data)
            console.log(response.status)
            return id;
        })
          // .catch((error) => {
          // console.log(error)
          // })
  } 
useEffect((id) => {
  RemoveClient(id)
}, [])


return (
    <div></div>
)}
 
export default RemoveClient;