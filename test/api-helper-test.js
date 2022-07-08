import { expect } from "chai";
import "../src/lib/extensions.js"
import ApiHelper from "../src/helper/api-helper.js";

describe("Api Helper", async function () {
  const helper = new ApiHelper();
  it("Cash In", async function () {
    const response = await helper.cashIn();
    expect(response).to.not.equal(null);
    expect(response.keyify()).to.deep.equal(['percents', 'max', 'amount', 'currency']);
  });
  it("Cash Out - Natural", async function () {
    const response = await helper.cashOut("natural");
    expect(response).to.not.equal(null);
    expect(response.keyify()).to.deep.equal(['percents', 'week_limit', 'amount', 'currency']);
  });
});