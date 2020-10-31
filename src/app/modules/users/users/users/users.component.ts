import { Component, Input, OnInit } from '@angular/core';
import { UsersI } from '../../../home/models/search.interface';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  @Input() users: UsersI[];

  constructor() {
  }

  ngOnInit(): void {
  }
}

