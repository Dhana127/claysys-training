import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OrderDTO } from '../order-dto';
import { catchError, of, throwError } from 'rxjs';
import { error } from 'console';
import { text } from 'stream/consumers';


@Injectable({
  providedIn: 'root'
})
export class Apiservice {
  private http=inject(HttpClient);
  
  
  getAllData(){
    return this.http.get<any[]>(`http://localhost:5062/api/orderDataApi`).pipe(
  catchError(error => {
    console.error('API error:', error);
    return of([]);
  })
);
  }
  postOrderData(payload:OrderDTO){
    return this.http.post<OrderDTO>(`http://localhost:5062/api/orderDataApi/add`,payload,{responseType:'json'});
      
   
  }

  putStatusData(payload:OrderDTO){
    return this.http.put<OrderDTO>(`http://localhost:5062/api/orderDataApi/update`,payload);
  }
  deleteData(orderId:number){
    return this.http.delete(`http://localhost:5062/api/orderDataApi/delete/${orderId}`);
  }
}
