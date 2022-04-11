import axios from "axios";

export const fetchData = async (url) => {
    const apiCall = axios.create({baseURL:'https://dummyapi.io/data/v1/', headers:{"app-id":"625165122c2a87cd5bbfd687"}})
    return await apiCall.get(url)/*.then(res => res.data.data).catch(err=>err);*/
}