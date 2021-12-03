import {AxiosInstance} from "axios";

export class Thing {
    private _endpoint: string;

    constructor(ep: string) {
        this._endpoint = ep;
    }

    private _constructURLParams(params: any): string {

    }

    get(params: any, requester: AxiosInstance): any[] {
        let urlParams = this._constructURLParams(params);
        let ep = this._endpoint + urlParams;
        
    }
}