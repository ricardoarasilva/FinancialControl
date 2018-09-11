import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EntryService } from '../../entry.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private entryservice: EntryService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      type: ['', Validators.required ],
      description: ['', Validators.required ],
      value: ['', Validators.required]
   });
  }

  addEntry(type, description,value,done) {
    this.entryservice.addEntry(type, description,value,done);
  }

  ngOnInit() {
  }

}
