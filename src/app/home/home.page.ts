import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorAplicacao!: number;
  taxaJuros!: number;
  meses!: number;
  tipoJuros!: "composto" | "simples";
  rendimentoTotal!: number;

  constructor() {
  }

  bt_limpar(): void {
    this.valorAplicacao = 0;
    this.taxaJuros = 0;
    this.meses = 0;
    this.rendimentoTotal = 0;
  }

  bt_calcular(): void {
    if (this.valorAplicacao > 0 && this.taxaJuros > 0 && this.meses > 0 && this.tipoJuros != undefined) {
      let juros: number = 0;
      
      if (this.tipoJuros === "composto"){
        juros = this.calcularJurosComposto(this.valorAplicacao, this.taxaJuros, this.meses);
      }else if(this.tipoJuros === "simples"){
        juros = this.calcularJurosSimples(this.valorAplicacao, this.taxaJuros, this.meses);
      }
      this.rendimentoTotal = Number((this.valorAplicacao + juros).toFixed(2))
    } else {
      alert("Preencha todos os campos!")
    }
  }

  calcularJurosComposto(capital: number, taxa: number, meses: number): number {
    let juros = (capital * ((1+(taxa/100)) ** meses)) - capital;
    return Number(juros.toFixed(2));
  };

  calcularJurosSimples(capital: number, taxa: number, meses: number): number {
    return capital * taxa * meses / 100;
  }
}
