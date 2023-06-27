export abstract class CustomError extends Error {
    abstract statusCode: number; //sub-class most implement this as the abstract word used

    constructor(message: string) {
        super();

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { message: string; field?: string }[];
}