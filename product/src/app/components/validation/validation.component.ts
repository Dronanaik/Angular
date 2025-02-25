import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-validation',
  imports: [CommonModule,FormsModule  ],
  templateUrl: './validation.component.html',
  styleUrl: './validation.component.css'
})
export class ValidationComponent {
  actor = {
    name: '',
    age: null,
    email: ''
  };

  onSubmit(actorForm: any) {
    if (actorForm.valid) {
      console.log('Form Submitted:', this.actor);
    } else {
      console.log('Form is invalid');
    }
  }
  
}

