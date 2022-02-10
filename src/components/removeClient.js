import {useEffect} from 'react';
import axios from 'axios';

const RemoveClient = () => {
    const baseURL = "http://localhost:3000/clients";

    async function removeClient(id) {
        const post = await axios({
            url: baseURL,
            method: "DELETE",
            data: ""
        }).then((response) => {
            console.log(response.data);
        })
            .catch((error) => {
                console.log(error)
            })
  } 
    useEffect((id) => {
        RemoveClient(id);
    }, [])
}
 
export default RemoveClient;
