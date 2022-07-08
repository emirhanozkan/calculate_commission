import { FileIsEmptyError, FileNotExistsError } from './error.js';
import fs from "fs";

const readJson = () => {
    const path = process.argv.find(x => x.indexOf('.json') > -1);
    if (fs.existsSync(path)){
        const txt = fs.readFileSync(path);
        if (txt.length === 0){
            throw new FileIsEmptyError(path);
        }else{
            return JSON.parse(txt);
        }
    }else{
        throw new FileNotExistsError(path);
    }
}

export default {
    readJson
}