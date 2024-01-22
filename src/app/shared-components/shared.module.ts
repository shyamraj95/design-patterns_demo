import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SvgIconModule } from "./components/svg-icon/svg-icon.module";



const groupOfModules = [
  FormsModule,
  ReactiveFormsModule,
  NgbModule,
  RouterModule,
  CommonModule,
  SvgIconModule
];
@NgModule({
  declarations: [],
  imports: [
    ...groupOfModules
  ],
  exports: [
    ...groupOfModules
  ],
})
export class SharedModule {}
