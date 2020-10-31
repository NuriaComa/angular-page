import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm: FormGroup;

  @Output() searchData: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchBar: this.fb.control(
        '',
        {
          validators: [
            Validators.required,
          ]
        }
      )
    });
  }

  onSubmit(): void {
    const searchResult = this.searchForm.get('searchBar').value;
    this.searchData.emit(searchResult);
  }
}
