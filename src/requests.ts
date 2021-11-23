import axios from "axios";

const API_ROOT = "https://api.case.law/v1/";

export function constructRequester(apiKey: string) {
    return axios.create({
        baseURL: API_ROOT,
        headers: { 'Token': apiKey}
    });
}