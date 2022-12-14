import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ExternalfacingService {

  baseURL: string = "https://jsonplaceholder.typicode.com/"
  baseURLtodos: string = "https://jsonplaceholder.typicode.com"
  gamesURL: string = "https://api.rawg.io/api/games"
  wordsURL: string = "https://wordsapiv1.p.rapidapi.com/words/"
  randomArr = []

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<any>{
  //   const params = new HttpParams()
  //   .set('sort',"description")
  //   .set('page',"2");

  //   return this.http.get(this.baseURL+'users',{responseType:'text'}) //normally without async await simple get call
  // }

    getUsers():Observable<any>
        {
          const headers = new HttpHeaders()//HIDE YOUR DAMN KEYYYYYYYYYYYYYYYYYYYYYYYYYY
                          .set('X-RapidAPI-Key','3f69eb5f8dmshf0a95026a2ca966p1862c3jsn5071a9a9bf4d')
                          .set('X-RapidAPI-Host','wordsapiv1.p.rapidapi.com');
          const params = new HttpParams().set('random','true');
          const options = {'headers':headers,'params':params}
          //return this.http.get<any>(this.wordsURL,{'headers':headers,'params':params}) //Explicitly giving the headers and parameters
          return this.http.get(this.wordsURL,options) //specifying the headers and parameters in an options value and passing that
        }
}