import axios from "axios";

export interface FetchResponse <T>{
    count:number;
    results: T[];
    }

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"496a989097f5419aac30ccd0f367da38"
    }
})