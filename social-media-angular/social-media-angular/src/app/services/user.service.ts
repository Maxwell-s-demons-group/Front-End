
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchUrl: String = `${environment.baseUrl}`

  constructor(private http:HttpClient) { }
  public search(word:String): Observable<User[]>{
    return this.http.get<User[]>(`${this.searchUrl}/users/search?word=${word}`, {})
  }
}
