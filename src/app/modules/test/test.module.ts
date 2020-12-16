import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SimpleComponent } from "./components/simple/simple.component";

@NgModule({
  declarations: [SimpleComponent],
  exports: [SimpleComponent],
  imports: [CommonModule]
})
export class TestModule {}
