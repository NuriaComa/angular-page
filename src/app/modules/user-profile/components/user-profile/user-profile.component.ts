import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UserI } from '../../models/user.interface';
import { FollowerI } from '../../models/followers.interface';
import { RepositoriesI } from '../../models/repositories.interface';
import { faUsers, faFileCode, faUndo } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  faUndo = faUndo;
  faUsers = faUsers;
  faFileCode = faFileCode;
  paramLogin: string;
  user: UserI;
  followers: FollowerI[];
  repositories: RepositoriesI[];
  isLoading = true;

  private userInfo: Subscription;
  private followerInfo: Subscription;
  private reposInfo: Subscription;

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activateRoute.params.subscribe(queryParams => {
      this.paramLogin = queryParams.login;
    });
  }

  ngOnInit(): void {
    this.initUserProfile();
  }

  ngOnDestroy(): void {
    if (this.userInfo) {
      this.userInfo.unsubscribe();
    }
    if (this.followerInfo) {
      this.followerInfo.unsubscribe();
    }
    if (this.reposInfo) {
      this.reposInfo.unsubscribe();
    }
  }

  private initUserProfile(): void {
    this.userService.getUserInfo(this.paramLogin);
    this.updateUserInfo();
  }

  updateUserInfo(): void {
    this.userInfo = this.userService.userInfoObs
      .subscribe(
        (userInfo: UserI) => {
          this.user = userInfo;
          this.updateFollowersInfo();
        }
      );
  }

  updateFollowersInfo(): void {
    this.followerInfo = this.userService.followerInfoObs
      .subscribe(
        (followerInfo: FollowerI[]) => {
          this.followers = followerInfo;
          this.updateReposInfo();
        }
      );
  }

  updateReposInfo(): void {
    this.reposInfo = this.userService.reposInfoObs
      .subscribe(
        (reposInfo: RepositoriesI[]) => {
          this.repositories = reposInfo;
          this.isLoading = false;
        }
      );
  }


}
