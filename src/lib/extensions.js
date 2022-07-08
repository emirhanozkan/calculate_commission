Date.prototype.getWeek = function () {
    const firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
    return Math.ceil((this.getDate() + (firstDay - 1)) / 7);
};

String.prototype.inSameWeek = function (dateStr) {
    var date1 = new Date(this);
    var date2 = new Date(dateStr);
    if (date1.getFullYear() !== date2.getFullYear()) {
        return false;
    }
    else if (date1.getMonth() !== date2.getMonth()) {
        return false;
    }
    else if (date1.getWeek() !== date2.getWeek()) {
        return false;
    }
    else {
        return true;
    }
};

Number.prototype.fee = function () {
    return (Math.ceil(this) / 100);
};

Object.prototype.keyify = function (keys = []) {
    for (const key of Object.keys(this)) {
        keys.push(key);
        if (typeof this[key] === 'object' && this[key] !== null) {
            this[key].keyify(keys);
        }
    }
    return keys;
}
