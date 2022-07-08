import has from 'has';

export default class CacheHelper{
    obj;
    constructor(){
        this.obj = {};
    }
    exists = (key) =>{
        return has(this.obj, key);
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