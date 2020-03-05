import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FILTER_OPTIONS } from "../DataModel/Filter.model";
import { FiltersService } from "../services/filters.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() dataFiltered = new EventEmitter();
  filterOptions = [];
  selectedValue: string;
  filterName: string;
  labelToFilter: string;
  

  constructor(private apiService: FiltersService) { 

  }

  ngOnInit() {
    console.log("filters intialized");
    this.setFilterOptions();
  }

  setFilterOptions() {
    this.filterOptions = [
      { name: FILTER_OPTIONS.NAME_TEXT, value: FILTER_OPTIONS.NAME_ID },
      { name: FILTER_OPTIONS.STATUS_TEXT, value: FILTER_OPTIONS.STATUS_ID },
      { name: FILTER_OPTIONS.SPECIES_TEXT, value: FILTER_OPTIONS.SPECIES_ID },
      { name: FILTER_OPTIONS.TYPE_TEXT, value: FILTER_OPTIONS.TYPE_ID },
      { name: FILTER_OPTIONS.GENDER_TEXT, value: FILTER_OPTIONS.GENDER_ID },
    ];
  }

  

  isFilteredByStatus() {
    return this.selectedValue === FILTER_OPTIONS.STATUS_ID;
  }

  

}
