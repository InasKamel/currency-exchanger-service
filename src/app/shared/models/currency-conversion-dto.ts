export class CurrencyConversionDTO {
    constructor() {
        this.todayDate = (new Date()).toISOString().substring(0, 10);
    }

    fromAmount: number;
    fromCurrency: string;
    toCurrency: string;
    todayDate: string;

    // only for frontend binding

    toAmount: number;

}