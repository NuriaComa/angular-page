import { Component, Input, OnInit } from '@angular/core';
import { UserI } from '../../../../modules/user-profile/models/user.interface';

@Component({
  selector: 'users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {

  @Input() user: UserI;

  constructor() { }

  ngOnInit(): void {
  }

}
