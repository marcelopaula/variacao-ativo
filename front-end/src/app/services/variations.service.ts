import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../pages/variation-symbol/variation-symbol.model';

@Injectable({
  providedIn: 'root'
})
export class VariationsService {

  constructor(
    private http: HttpClient
  ) { }

  getVariation() {
    return this.http.get<IData>('http://localhost:8000')
  }
}
