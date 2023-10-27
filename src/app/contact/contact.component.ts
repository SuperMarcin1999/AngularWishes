import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createInvalidDomainValidator} from "./InvalidEmailDomain";

const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'o2.pl']);

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('',
      [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('',
      [Validators.required, Validators.minLength(10)])
  });

  submitForm(){
    console.log(this.contactForm.valid);
    // if (this.senderNameControl.dirty){
    //   alert('you changed name')
    // }
  }
}
