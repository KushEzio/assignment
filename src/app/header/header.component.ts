import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  nameSearch: string;
  sortOrder: string = "ascending";
  @Output() sort: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  valueChanged(sortOrder1: string) {
    // console.log(this.sortOrder);
    console.log(sortOrder1);
    this.sort.emit(sortOrder1);
  }
}
