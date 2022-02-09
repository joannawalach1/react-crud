import {useState, useEffect} from "react";
import axios from "axios";

const Data = () => {
   const [data, setData] = useState([]);
   useEffect(() => {
       const fetchData = async () => {
           try {
               const {data:response} = await axios.get("db.json");
               console.log(data);
               setData(response);
           } catch (error) {
               console.error(error.message)
           }
       }
       fetchData()
   })
}
export default Data;