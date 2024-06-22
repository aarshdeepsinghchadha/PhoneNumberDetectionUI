import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  apiUrl = 'https://localhost:7177/api/PhoneNumberDetection/detect';

  constructor(private http: HttpClient) { }

  detectNumbers(inputText: string) {
    const requestBody = { text: inputText };

    return this.http.post<any>(this.apiUrl, requestBody);
  }
}