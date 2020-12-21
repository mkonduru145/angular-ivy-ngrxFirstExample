import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { StoreModule } from "@ngrx/store";
import { nameReducer } from "./name.reducer";
import { NameComponent } from "./name/name.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ fullName: nameReducer })
  ],
  declarations: [AppComponent, HelloComponent, NameComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
