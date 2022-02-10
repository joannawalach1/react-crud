import { useState, useEffect } from "react";
import axios from "axios";
const Clients = () => {
    const baseURL = "http://localhost:3000/clients";
    const [clients, setClients] = useState(null);

    async function takeData() {
        const response = await axios({
            url: baseURL,
            method: "GET"
        })
        setClients(response.data)
        const data = response.data
        console.log(data)
        return data.data.name
    }

    useEffect(() => {
        takeData()
    }, []);

    return (
        <div>
            {clients && clients.map((client) => {
                return (
                    <div key={client.id}>
                        <p>{client.name}</p>
                    </div>
                )
            })}
        </div>
    );
}


export default Clients;
