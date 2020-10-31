import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseI, UsersI } from '../models/search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private usersInfo: BehaviorSubject<UsersI>;
  readonly usersInfoObs: Observable<UsersI>;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.usersInfo = new BehaviorSubject<UsersI>(null);
    this.usersInfoObs = this.usersInfo.asObservable();
  }


  // GET USERS

  fetchUsersInfo(val: string): void {
    this.httpClient.get(
      'https://api.github.com/search/users?q=' + val + '+in:login'
    ).subscribe(
      (responseData: ResponseI) => {
        this.usersInfo.next(responseData.items);
      },
      (error: HttpErrorResponse) => {
        console.log('Error fetchUsersInfo request', error);
      }
    );
  }
}
