import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoutOut } from '../Models/shoutout';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoutoutService 
{
  private rootUrl = 'https://localhost:7014';
  // private rootUrl = 'https://RevatureShoutOut.azurewebsites.net';
  constructor(private http: HttpClient) { }
  
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  public getShoutOuts(): Observable<ShoutOut[]> 
  {
    return this.http.get<ShoutOut[]>(this.rootUrl + '/api/ShoutOut');
  }

  public getShoutOut(id: number): Observable<ShoutOut> 
  {
    return this.http.get<ShoutOut>(this.rootUrl + '/api/ShoutOut/' + id);
  }

  public createShoutOut(shoutout: ShoutOut): Observable<ShoutOut[]>
  {
    return this.http.post<ShoutOut[]>(this.rootUrl + '/api/ShoutOut', shoutout);
  }

  public updateShoutOut(shoutout: ShoutOut): Observable<ShoutOut[]>
  {
    return this.http.put<ShoutOut[]>(this.rootUrl + '/api/ShoutOut/' + shoutout.soId, shoutout);
  }

  public deleteShoutOut(id: number): Observable<ShoutOut[]>
  {
    return this.http.delete<ShoutOut[]>(this.rootUrl + '/api/ShoutOut/' + id);
  }
}
