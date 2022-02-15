import axios from 'axios';


export const baseUrl='https://bayut.p.rapidapi.com'



 export const fetchApi = async (Url) => {

const {data} = await axios.get((Url), {


    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '81d4c1522fmsh61e8e810b0f8d9dp1a8b39jsn4f0929926644'
      }

})

return data;

 }

