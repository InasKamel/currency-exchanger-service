import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { popularCurrencySymbolEnum } from '../shared/enums/popular-currency-sumbol.enum';
import { CurrencyConversionDTO } from '../shared/models/currency-conversion-dto';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangerService {

  baseURL: string;
  accessKey: string;
  constructor(private http: HttpClient) {
    this.baseURL = 'http://data.fixer.io/api/';
    this.accessKey = '?access_key=477f73b9db08241187d368ca73838cb8';
  }

  getHistoricalRates(data: CurrencyConversionDTO): Observable<any> {
    return this.http.get(`${this.baseURL}${data.todayDate}${this.accessKey}&base=${data.fromCurrency}&symbols=${data.toCurrency}`) as Observable<any>
  }

  getCurrenciesSymbols() {
    return this.http.get(`${this.baseURL}symbols${this.accessKey}`) as Observable<any>

  }

  getLatestRates(baseCurrency: string): Observable<any> {
    return this.http.get(`${this.baseURL}latest${this.accessKey}&base=${baseCurrency}&symbols=${(Object.keys(popularCurrencySymbolEnum).filter(k => k.length == 3)).join()}`) as Observable<any>

  }
}
