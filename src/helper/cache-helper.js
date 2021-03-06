export default class CacheHelper{
    obj;
    constructor(){
        this.obj = {};
    }
    exists = (key) =>{
        return this.obj[key] !== undefined
    }
    get = (key) => {
        return this.obj[key];
    }
    getOrSet = (key, value) => {
        if (this.exists(key)){
            return this.get(exists);
        }else{
            this.obj[key] = value;
            return value;
        }
    }
}