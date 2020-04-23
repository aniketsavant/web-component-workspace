import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RestaurantList, RequestPayloadForRestoList } from '../../interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token',
    'user-key' : '800cbe5a22309f08a096cebd7e2060d7'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestoListServiceService {
  
  constructor(public httpClient: HttpClient) { }

  getRestoList(reqPayload: RequestPayloadForRestoList): Observable<RestaurantList> {
    return this.httpClient.get<RestaurantList>(`${environment.BASE_URL}/search?count=${reqPayload.listCount}&lat=${reqPayload.latitude}&lon=${reqPayload.longitude}&collection_id=${reqPayload.collectionId}`, httpOptions)
    .pipe(
      retry(3), catchError(this.handleError<any>('getRestoList', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return of(result as T);
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}
