import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UserProfileRoutingModule } from '../user-profile-routing.module';
import { ButtonModule } from '../../../shared/modules/button/button.module';
import { UsersCardModule } from '../../../shared/modules/users-card/users-card.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        UserProfileRoutingModule,
        ButtonModule,
        UsersCardModule
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
