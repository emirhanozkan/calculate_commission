import CommisionHelper from "./src/helper/commision-helper.js";

for (const comission of await new CommisionHelper().calculate()) {
    console.log(comission);
};