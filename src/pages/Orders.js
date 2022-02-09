import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "http://localhost:3000/order";

export default function Orders() {
    const [orders, setOrders] = useState(null);

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setOrders(response.data);
            });
    }, []);

    if (!orders) return null;

    return (
        <div>
            {orders.map((order) =>
                <div key={order.order_details}>
                    <p>{order.id}</p>
                    <p>{order.order_details}</p>
                </div>
            )}
        </div>
    )
}