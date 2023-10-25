import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  contactForm = new FormGroup({
    senderName: new FormControl(''),
    senderEmail: new FormControl(''),
    senderMessage: new FormControl('')
  });

  submitForm(){
    console.log(this.contactForm.value);
    // if (this.senderNameControl.dirty){
    //   alert('you changed name')
    // }
  }
}
