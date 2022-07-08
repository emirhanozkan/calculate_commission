import axios from "axios";
import CacheHelper from "./cache-helper.js";

export default class ApiHelper {
    cache;
    constructor() {
        this.cache = new CacheHelper();
    }
    /**
     * @param {string} type "cash_in" | "cash_out"
     * @param {string} user_type "natural" | "juridical"
     * @return {object}
     */
    get = async (type, user_type) => {
        const key = `${type}_${user_type}`;
        if (this.cache.exists(key)){
            return this.cache.get(key);
        }

        let response;
        switch (type) {
            case "cash_in":
                response = await this.cashIn();
                break;
            case "cash_out":
                response = await this.cashOut(user_type);
                break;
            default:
                return {};
        }
        return this.cache.getOrSet(key, response);
    }
    /**
    * @return {object}
    */
    cashIn = async () => {
        return (await axios({
            method: "GET",
            url: "https://developers.paysera.com/tasks/api/cash-in"
        })).data;
    }
    /**
     * @param {string} user_type "natural" | "juridical"
     * @return {object}
     */
    cashOut = async (user_type) => {
        return (await axios({
            method: "GET",
            url: `https://developers.paysera.com/tasks/api/cash-out-${user_type}`
        })).data;
    }
}