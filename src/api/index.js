import axios from 'axios';
const url = "http://localhost:5000/api/items";
export const getItems = ()=>axios.get(`${url}/getimages`);
export const createItem = (item)=>axios.post(`${url}/uploadimages`,item);