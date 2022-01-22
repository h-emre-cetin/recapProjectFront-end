import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl='http://localhost:13957/api/rentals/getrentaldto';

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>{
   return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
