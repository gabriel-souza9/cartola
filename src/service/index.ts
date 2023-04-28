import axios from "axios";

const APIBASE = "https://api.cartola.globo.com";

const service = () => {

    const getMercado = async () => {
        const response = await axios.get(`${APIBASE}/atletas/mercado`);
        if(response.data){
            return response.data
        }
        return {};
    }

    return { getMercado }
}

export default service;