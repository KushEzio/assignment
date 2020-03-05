import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FiltersComponent } from "./filters/filters.component";
import { CardsComponent } from "./cards/cards.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CharacterSearchComponent } from './character/character-search/character-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    CardsComponent,
    CharacterSearchComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
