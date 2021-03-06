import file from "../lib/file.js";
import ApiHelper from "./api-helper.js";
import TransactionHelper from "./transaction-helper.js";
import "../lib/extensions.js"

export default class CommisionHelper {
    apiHelper;
    transactionHelper;
    transactions;
    constructor(transactions = file.readJson()){
        this.apiHelper = new ApiHelper();
        this.transactionHelper = new TransactionHelper();
        this.transactions = transactions;
    }
    calculate = async () => {
        const result = [];
        for (const t of this.transactions) {
            let rate = await this.apiHelper.get(t.type, t.user_type);

            // Keep in memory the each transactions to calculate weekly limit
            this.transactionHelper.add(t);

            let comission = 0;
            // Cash In
            if (rate["max"] !== undefined){
                comission = Math.min((t.operation.amount * rate.percents).fee(), rate.max.amount);
            }
            // Cash Out - Natural Persons
            else if (rate["min"] !== undefined){
                comission = (Math.max(t.operation.amount * rate.percents, rate.min.amount)).fee();
            }

            // Cash Out - Legal persons
            else if (rate["week_limit"] !== undefined){
                comission = this.transactionHelper.weeklyChargeAmount(t, rate.week_limit.amount).fee() * rate.percents;
            }
            result.push(comission.toFixed(2));
        }
        return result;
    }
}