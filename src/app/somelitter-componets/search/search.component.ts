import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output()
  searchResult: EventEmitter<any> = new EventEmitter();
  private nameFilter: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit() {
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.searchResult.emit(value));
  }

}
