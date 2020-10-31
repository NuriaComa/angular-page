import { TestBed } from '@angular/core/testing';
import { SearchService} from './search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { UsersI } from '../models/search.interface';
import { HomeRoutingModule } from '../home-routing.module';
import { UsersModule } from '../../users/users.module';
import { SearchBarModule } from '../../search-bar/search-bar.module';

const mockResponse = {
  incomplete_results: true,
  items: [{
    avatar_url: 'https://avatars1.githubusercontent.com/u/748?v=4',
    events_url: 'https://api.github.com/users/tom/events{/privacy}',
    followers_url: 'https://api.github.com/users/tom/followers',
    following_url: 'https://api.github.com/users/tom/following{/other_user}',
    gists_url: 'https://api.github.com/users/tom/gists{/gist_id}',
    gravatar_id: '',
    html_url: 'https://github.com/tom',
    id: 748,
    login: 'tom',
    node_id: 'MDQ6VXNlcjc0OA==',
    organizations_url: 'https://api.github.com/users/tom/orgs',
    received_events_url: 'https://api.github.com/users/tom/received_events',
    repos_url: 'https://api.github.com/users/tom/repos',
    score: 1,
    site_admin: false,
    starred_url: 'https://api.github.com/users/tom/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/tom/subscriptions',
    type: 'User',
    url: 'https://api.github.com/users/tom',
  }],
  total_count: 2,
};

describe('UserService', () => {
  let searchService: SearchService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        HomeRoutingModule,
        UsersModule,
        SearchBarModule
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    searchService = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(searchService).toBeTruthy();
  });

  describe('Users', () => {
    let observable: Observable<UsersI>;

    it('Success server response', (done) => {
      spyOn(httpClient, 'get').and.returnValue(of(mockResponse));
      observable = searchService.usersInfoObs
        .pipe(
          debounce(() => timer(500))
        );
      observable
        .subscribe((response: UsersI) => {
          expect(response[0].login).toEqual('tom');
          done();
        });
      searchService.fetchUsersInfo('tom');
    });

    it('error server response', () => {
      const httpError = new HttpErrorResponse({});
      spyOn(httpClient, 'get').and.returnValue(throwError(httpError));
      spyOn(console, 'log');
      searchService.fetchUsersInfo('tom');

      expect(console.log).toHaveBeenCalled();
    });
  });
});
