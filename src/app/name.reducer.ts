import { Action, createReducer, on } from "@ngrx/store";
import { fLName, lFName } from "./name.actions";

let firstName = "Mahesh";
let lastName = "KOnduru";

export const initialState = firstName + lastName;
const _nameReducer = createReducer(
  initialState,
  on(fLName, state => initialState),
  on(lFName, state => lastName + firstName)
);

export function nameReducer(state: string, action: Action) {
  return _nameReducer(state, action);
}
