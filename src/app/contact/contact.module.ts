import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {ContactComponent} from "./contact.component";



@NgModule({
  declarations: [ContactComponent, ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent,
    ContactComponent
  ]
})
export class ContactModule { }
