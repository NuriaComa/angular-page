import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserI } from '../models/user.interface';
import { FollowerI } from '../models/followers.interface';
import { RepositoriesI } from '../models/repositories.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfo: BehaviorSubject<UserI>;
  readonly userInfoObs: Observable<UserI>;

  private followerInfo: BehaviorSubject<FollowerI[]>;
  readonly followerInfoObs: Observable<FollowerI[]>;

  private reposInfo: BehaviorSubject<RepositoriesI[]>;
  readonly reposInfoObs: Observable<RepositoriesI[]>;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.userInfo = new BehaviorSubject<UserI>(null);
    this.userInfoObs = this.userInfo.asObservable();
    this.followerInfo = new BehaviorSubject<FollowerI[]>(null);
    this.followerInfoObs = this.followerInfo.asObservable();
    this.reposInfo = new BehaviorSubject<RepositoriesI[]>(null);
    this.reposInfoObs = this.reposInfo.asObservable();
  }

  getUserInfo(val: string): void {
    this.httpClient.get(
      'https://api.github.com/users/' + val
    ).subscribe(
      (responseData: UserI) => {
        this.userInfo.next(responseData);
        this.getUserFollowers(responseData.followers_url);
        this.getUserRepositories(responseData.repos_url);
      },
      (error: HttpErrorResponse) => {
        console.log('Error getUserInfo request', error);
      }
    );
  }

  getUserFollowers(url: string): void {
    this.httpClient.get(
      url
    ).subscribe(
      (responseData: FollowerI[]) => {
        this.followerInfo.next(responseData);
      },
      (error: HttpErrorResponse) => {
        console.log('Error getUserFollowers request', error);
      }
    );
  }

  getUserRepositories(url: string): void {
    this.httpClient.get(
      url
    ).subscribe(
      (responseData: RepositoriesI[]) => {
        this.reposInfo.next(responseData);
      },
      (error: HttpErrorResponse) => {
        console.log('Error getUserRepositories request', error);
      }
    );
  }
}
