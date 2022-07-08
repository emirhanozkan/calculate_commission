import "../lib/extensions.js"

export default class TransactionHelper {
    transactions;
    constructor(){
        this.transactions = [];
    }

    add = (transaction) => {
        this.transactions.push(transaction);
    }

    /**
     * @param {object} t Transaction object of customer
     * @param {number} week_limit Customer weekly free of charge limit
     * @return {number} Amount to be calculate
     */
    weeklyChargeAmount = (t, week_limit) => {
        // Get user past transactions in same week
        const userTransactions = this.transactions.filter(x => x.user_id === t.user_id && t.operation.currency && x.date.inSameWeek(t.date));

        // Collect the past transaction amounts
        let weekAmount = 0;
        userTransactions.forEach(x => {
            weekAmount += x.operation.amount;
        });

        // Return the amount to be calculate
        if (weekAmount <= week_limit){
            return 0;
        }else{
            const amount = t.operation.amount > week_limit ? (t.operation.amount - week_limit) : t.operation.amount;
            return amount;
        }
    }
}