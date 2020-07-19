import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = new Date();

  constructor(@Inject('Window') private window: Window, private httpClient: HttpClient) {  }

  getProducts() {

    const idToken = (this.window as any).id_token;
    // console.log(idToken);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + idToken
      })
    };
    this.httpClient.get('https://helloworldwebapi-f2jksykvna-ue.a.run.app/api/products', httpOptions)
    // .pipe(
    //   tap(i => console.log(i)),
    //   catchError(this.handleError<Hero[]>('getHeroes', []))

    // )
    .subscribe(next => {
      console.log(next);
    }
    // ,err => console.log(err)
    );

  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}

