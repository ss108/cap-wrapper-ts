import { constructRequester } from "./requests";


/**this should probably be a singleton.*/
export default class CAP {
    constructor(apiKey: string) {
        this._key = apiKey;
        this._requester = constructRequester(apiKey);
    }

    _key: string
    _requester: any 
}