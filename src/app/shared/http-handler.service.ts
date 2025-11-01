import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3000/api'; // Ideally, use environment.ts

  constructor(private http: HttpClient) {}

  post<T>(endpoint: string, body: any, options?: object): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body, options);
  }

  get<T>(endpoint: string, options?: object): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, options);
  }

  // Add put, delete, etc. as needed
}