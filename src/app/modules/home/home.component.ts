import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  formCombinacao: FormGroup;
  value: any;
  arrayretorno: string[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      numero1: ['', [Validators.required]],
      numero2: ['', [Validators.required]],
      numero3: ['', [Validators.required]],
      numero4: ['', [Validators.required]],
      target: ['', [Validators.required]],
    });

    this.formCombinacao = this.fb.group({
      combinacao1: ['', [Validators.required]],
      combinacao2: ['', [Validators.required]],
      combinacao3: ['', [Validators.required]],
      combinacao4: ['', [Validators.required]],
      combinacao5: ['', [Validators.required]],
      combinacao6: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(fm: any) {
    if (fm.status == 'VALID') {
      let ordenado = [];
      this.arrayretorno = [];
      this.value = this.form.controls['target'].value;
      ordenado.push(this.form.controls['numero1'].value, this.form.controls['numero2'].value, this.form.controls['numero3'].value, this.form.controls['numero4'].value)
      ordenado.forEach((item: any) => {
        this.processValue(item);
      });
      return;
    }
    Swal.fire({
      title: 'Erro!',
      text: 'Preencha a sequencia eo Target !',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }

  processValue(ord: any) {
    var val = this.value - ord;
    if (val >= 0) {
      this.value = val;
      this.arrayretorno.push(ord);
      this.processValue(ord);
    }

    if(!this.arrayretorno.length){
      Swal.fire({
        title: 'Erro!',
        text: 'Não existe combinações para numero alvo!',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      return;
    }
    this.formCombinacao.controls['combinacao1'].setValue(this.arrayretorno[0]);
    this.formCombinacao.controls['combinacao2'].setValue(this.arrayretorno[1]);
    this.formCombinacao.controls['combinacao3'].setValue(this.arrayretorno[2]);
    this.formCombinacao.controls['combinacao4'].setValue(this.arrayretorno[3]);
    this.formCombinacao.controls['combinacao5'].setValue(this.arrayretorno[3]);
    this.formCombinacao.controls['combinacao6'].setValue(this.arrayretorno[3]);
  }

  limparCampos() {
    this.form.reset();
    this.formCombinacao.reset();
  }
}
