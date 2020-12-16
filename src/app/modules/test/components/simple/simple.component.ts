import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ColorService } from "../../services/color.service";

@Component({
  selector: "app-simple",
  templateUrl: "simple.component.html",
  styleUrls: ["simple.component.css"]
})
export class SimpleComponent implements OnInit {
  color$ = new BehaviorSubject("red");

  colors;

  constructor(private readonly colorService: ColorService) {}

  ngOnInit() {
    console.log("test");
    this.colorService.getColors().subscribe(colors => (this.colors = colors));
  }

  /** finish code */
  randomlyChangeColor() {}
}
