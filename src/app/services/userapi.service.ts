import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  baseUrl:string = "https://randomuser.me/api";
  constructor(private  httpClient : HttpClient) { }

  public async getUsers(pageIndex: Number = 1, pageSize: Number = 10) {
   const res: any = await this.httpClient.get(`${this.baseUrl}/?page=${pageIndex}&results=${pageSize}&seed=foobar`).toPromise();
   const {results} = res;
   return results.map(({name, email, picture}) => ({
    name, email, picture,
   }));
  }

  public async getChannels(pageIndex: Number = 1, pageSize: Number = 10) {
    const res: any = await this.httpClient.get(`${this.baseUrl}/?page=${pageIndex}&results=${pageSize}&seed=abcd`).toPromise();
    const {results} = res;
    return results.map(({name, email, picture}) => ({
     name, email, picture,
    }));
   }
}
