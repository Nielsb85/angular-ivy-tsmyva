import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: "root" })
export class ColorService {
  getColors() {
    return of(["red", "green", "yellow"]);
  }
}
