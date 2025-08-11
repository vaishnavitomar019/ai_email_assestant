import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
 private baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  generateEmail(prompt: string) {
    return this.http.post<{ email: string }>(`${this.baseUrl}/generate-email`, { prompt });
  }

  sendEmail(to: string, subject: string, body: string) {
    return this.http.post(`${this.baseUrl}/send-email`, { to, subject, body });
  }
  

}
