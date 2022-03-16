import axios from 'axios';
const url = "https://directplacement.herokuapp.com/api/items";
export const getItems = ()=>axios.get(`${url}/getimages`);
export const createItem = (item)=>axios.post(`${url}/uploadimages`,item);