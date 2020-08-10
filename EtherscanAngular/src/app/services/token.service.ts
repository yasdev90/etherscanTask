import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { token } from '../models/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  baseApiUrl: string = 'https://localhost:44355/api/token'
   tokens : token[]

  constructor(private http : HttpClient) { }

  getTokens():Observable<token[]>{     
       return this.http.get<token[]>(this.baseApiUrl)      
  }

  addToken(token: token){
    return this.http.post(this.baseApiUrl, token)
  }

  updateToken (token : token){
    return this.http.put(this.baseApiUrl+'/'+token.id, token)
  }
}
