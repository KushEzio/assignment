import { Component, OnInit, ElementRef } from "@angular/core";
import { FiltersService } from "../services/filters.service";
import { Observable } from "rxjs";
import { CharactersModel } from '../DataModel/characters.models';


@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  products$: Observable<any>;
  // products: any[];
  products: CharactersModel[] = [];
  filteredCharacters: CharactersModel[];
  // filteredCharacters:any[];
  // private _nameSearch: string;
  nameSearch: string


  sortOrder: string;

  // get nameSearch(): string {
  //   return this._nameSearch;
  // }
  // set nameSearch(value: string) {
  //   this._nameSearch = value;
  //   debugger;
  //   this.filteredCharacters = this.myfilter(value);
  // }
  myfilter(searchstring: string) {


    console.log(this.filteredCharacters.filter(data => data.name.toLowerCase()))
    return this.products.filter(data => {
      return data.name.toLowerCase().indexOf(searchstring.toLowerCase()) !== -1;
    })
  }
  yearDiff: number;
  year = new Date();
  
  // productsData = {};
  constructor(private filterService: FiltersService) { }

  ngOnInit() {
    this.products$ = this.filterService.getProduct();
    this.products$.subscribe(data => {
      this.products = data.results;
      this.filteredCharacters = data.results;
      console.log("filterd characters", this.filteredCharacters);
      console.log("products", this.products);
    });





    // this.filteredCharacters= this.filterService.getProduct();
  }

  sortOrderCheck(sortOrder: string, otherFilters = []) {
    console.log(sortOrder);
    let mygen = "male"
    console.log(
      this.filteredCharacters.filter(data => {
        return data.gender.toLowerCase().indexOf(mygen.toLowerCase());
      })
    );


    if (sortOrder === "ascending") {

      this.products$ = this.filterService.getProduct();
      this.products$.subscribe(data => {

        this.filteredCharacters = data.results;

      });

    } else {

      this.products$ = this.filterService.getProduct();
      this.products$.subscribe(data => {

        this.filteredCharacters = data.results.reverse();

      });

    }

    // return this.products.sort((a, b) => {
    //   if (sortOrder.toLowerCase() === 'asc') {
    //     return a - b;
    //   } else {
    //     return b - a;
    //   }

    // })
  }

  filterForGender(value: string) {
    value = "male";

    return this.filteredCharacters.filter(data => {
      return data.gender.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    })

  }

  searchCharacters(value: string) {
    console.log(value);
    this.filteredCharacters = this.myfilter(value);
    console.log(this.filteredCharacters);
  }




}
