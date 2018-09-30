import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

interface Taxa {
  id: number;
  taxa: number;
}

interface Interchange {
  bandeira: string;
  taxas: Taxa[];
}

@Component({
  selector: 'configuracao-reembolso-adquirente-show',
  templateUrl: './configuracao-reembolso-adquirente-show.component.html',
  styleUrls: ['./configuracao-reembolso-adquirente-show.component.css']
})
export class ConfiguracaoReembolsoAdquirenteShowComponent implements OnInit {

  selectedTaxa: Taxa;
  taxas: Interchange[]

  constructor() {
    this.taxas = [
      { 
        bandeira: 'Visa', 
        taxas: [
          { taxa: 1.35, id: 1 }, 
          { taxa: 2.00, id: 2 }, 
          { taxa: 2.35, id: 3 }, 
          { taxa: 2.85, id: 4 },
        ]
      },
      { 
        bandeira: 'Mastercard', 
        taxas: [
          { taxa: 1.35, id: 1 }, 
          { taxa: 2.00, id: 2 }, 
          { taxa: 2.35, id: 3 }, 
          { taxa: 2.85, id: 4 },    
        ]
      },
    ]
  }

  ngOnInit() {
  }

  alterarTaxa(taxa: Taxa, $event): void {
    this.selectedTaxa = taxa;
  }

}
