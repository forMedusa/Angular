import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http: HttpClient) { }

  getAllDataUrl="https://gsapi.gulliyan.com/api/all-p/";

  getAllData():Observable<any>{
    return this.http.get(this.getAllDataUrl);
  }

}
