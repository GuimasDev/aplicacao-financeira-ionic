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
    //const calcularJurosSimples = (capital: number, taxa: number, meses: number) => capital * taxa * meses / 100;
    
    if (this.tipoJuros === "composto" || this.tipoJuros === "simples") {
      alert(this.tipoJuros);
      
    }
    let juros = this.calcularJurosComposto(this.valorAplicacao, this.taxaJuros, this.meses);
    this.rendimentoTotal = this.valorAplicacao + juros;
  }

  calcularJurosComposto(capital: number, taxa: number, meses: number): number {
    let juros: number;
    juros = (capital * ((1+(taxa/100)) ** meses)) - capital;
    return Number(juros.toFixed(2));
  };

}
