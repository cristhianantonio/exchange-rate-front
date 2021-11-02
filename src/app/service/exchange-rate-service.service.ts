import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateServiceService {

  constructor(private http: HttpClient) {
  }

  currencyExchange(data: any) {
    console.log(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(environment.apiUrl, data, {headers});
  }

  updateCurrency(data: any) {
    console.log(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(environment.apiUrl.concat('update'), data, {headers});
  }
}
