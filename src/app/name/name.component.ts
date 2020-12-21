import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { fLName, lFName } from "../name.actions";

@Component({
  selector: "app-name",
  templateUrl: "./name.component.html",
  styleUrls: ["./name.component.css"]
})
export class NameComponent implements OnInit {
  fullName$: Observable<string>;

  constructor(private store: Store<{ fullName: string }>) {
    this.fullName$ = store.select("fullName");
  }

  firstNameLastName() {
    this.store.dispatch(fLName());
  }
  lastNameFirstName() {
    this.store.dispatch(lFName());
  }

  ngOnInit() {}
}
