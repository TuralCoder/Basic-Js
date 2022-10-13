import axios from 'axios';

class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID KjrGzPl6zZEh_ObgPJx0AYb5iRLXMCW04VqVCnIzBqc';
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID
            },
            params: {
                query: 'animal',
                count : 1 
            }
        });
    }

    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
             return resimResponse.data[0].urls.regular;
        } catch (err) {
            console.log(err.response);
            return 'https://www.wpblog.com/wp-content/uploads/2018/02/4-580x318-1280x720.jpg';
        }
    }
}

export  function resimGetir() {
    const getirilenResim =  new UnsplashApi().randomResimGetir();
    return getirilenResim;
}

