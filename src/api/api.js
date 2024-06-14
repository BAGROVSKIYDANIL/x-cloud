import axios from 'axios'
// const FIRST_API_URL = 'https://pay.voicex.biz:7260/api/Countrys';


// export const getCountrys = axios({url: `${FIRST_API_URL}`, method: 'GET'})

const instance = axios.create({
    baseURL: 'https://pay.voicex.biz:7260/api/'
})

export default class ApiService 
{
    _apiBaseUrl = 'https://pay.voicex.biz:7260';

    getCountry = async () =>
    {
        return await this.getResource(`/api/Countrys`);
    }
}
export const api = new ApiService();