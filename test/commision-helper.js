import { expect } from "chai";
import "../src/lib/extensions.js"
import CommisionHelper from "../src/helper/commision-helper.js";

describe("Commision Helper", async function () {
    const dummyInput = [
        { "date": "2016-01-05", "user_id": 1, "user_type": "natural", "type": "cash_in", "operation": { "amount": 200.0, "currency": "EUR" } },
        { "date": "2016-01-06", "user_id": 2, "user_type": "juridical", "type": "cash_out", "operation": { "amount": 300.0, "currency": "EUR" } },
        { "date": "2016-01-06", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 30000, "currency": "EUR" } },
        { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.0, "currency": "EUR" } },
        { "date": "2016-01-07", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.0, "currency": "EUR" } },
        { "date": "2016-01-10", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 100.0, "currency": "EUR" } },
        { "date": "2016-01-10", "user_id": 2, "user_type": "juridical", "type": "cash_in", "operation": { "amount": 1000000.0, "currency": "EUR" } },
        { "date": "2016-01-10", "user_id": 3, "user_type": "natural", "type": "cash_out", "operation": { "amount": 1000.0, "currency": "EUR" } },
        { "date": "2016-02-15", "user_id": 1, "user_type": "natural", "type": "cash_out", "operation": { "amount": 300.0, "currency": "EUR" } }
    ];
    const dummyOutput = [
        '0.06',
        '0.90',
        '87.00',
        '3.00',
        '0.30',
        '0.30',
        '5.00',
        '0.00',
        '0.00'
    ];
    const helper = new CommisionHelper(dummyInput);
    it("Mock Calculation", async function () {
        const response = await await helper.calculate();
        expect(response).to.not.equal(null);
        expect(response).to.deep.equal(dummyOutput);
    });
});