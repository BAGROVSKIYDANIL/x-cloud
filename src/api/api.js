import axios from 'axios'
const FIRST_API_URL = 'https://pay.voicex.biz:7260/api/Countrys'
export const getCountrys = axios({url: `${FIRST_API_URL}`, method: 'GET'})
// export const getCountrys = async () =>
//     {
//         try 
//         {
//             const responce = await axios({
//                 url: FIRST_API_URL,
//                 method: 'GET',
//             }); 
//             const data = await responce.json()
//             return data;
//         } 
//         catch (error) 
//         {
//             if(axios.isAxiosError(error))
//             {
//                 console.log(error.request?.data.errText, 'error');
//             }
//             else if (error instanceof Error)
//                 {
//                     console.log(error.message)
//                 }
//         }
//     }