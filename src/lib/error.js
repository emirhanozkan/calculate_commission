class FileIsEmptyError extends Error{
    name;
    message;
    constructor(message, ...args){
        super(message, ...args)
        this.name = "File is empty";
        this.message = message;
    }
}

class FileNotExistsError extends Error{
    name;
    message;
    constructor(message, ...args){
        super(message, ...args)
        this.name = "File not exists";
        this.message = message;
    }
}

export {
    FileIsEmptyError,
    FileNotExistsError
}