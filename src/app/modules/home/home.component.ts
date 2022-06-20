import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  formCombinacao: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      numero1: ['', [Validators.required]],
      numero2: ['', [Validators.required]],
      numero3: ['', [Validators.required]],
      numero4: ['', [Validators.required]],
      target: ['', [Validators.required]],
    })
    this.formCombinacao = this.fb.group({
      combinacao1: ['', [Validators.required]],
      combinacao2: ['', [Validators.required]],
      combinacao3: ['', [Validators.required]],
      combinacao4: ['', [Validators.required]],

    })

  }

  ngOnInit(): void {
  }



 onSubmit(fm:any){
    console.log('Valida',fm);
 }

 limparCampos(){
  this.form.reset();
 }



}
