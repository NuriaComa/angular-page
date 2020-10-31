import { Component, OnInit} from '@angular/core';
import { UsersI } from '../../models/search.interface';
import { SearchService } from '../../service/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  usersData: UsersI;

  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
  }

  searchUsers(data: string): void {
    this.isLoading = true;
    this.searchService.fetchUsersInfo(data);
    this.searchService.usersInfoObs
      .subscribe(
        (usersInfo: UsersI) => {
          this.usersData = usersInfo;
          this.isLoading = false;
        }
      );
  }
}



