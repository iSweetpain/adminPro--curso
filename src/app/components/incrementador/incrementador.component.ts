import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input() leyenda: string = 'Leyenda ';
  @Input() progreso: number = 50;

  @Output() CambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    // console.log('progreso', this.progreso);
    // console.log('leyenda', this.leyenda);
  }

  ngOnInit(): void {
  }
  onChanges(newValue: number) {

    // let elementHtml: any = document.getElementsByName('progresoManual'[0]);

    console.log(newValue);
    if ( newValue >= 100  ) {
      this.progreso = 100;
    } else if ( newValue <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elementHtml.value = this.progreso;
    this.txtProgreso.nativeElement.value = this.progreso;

    this.CambioValor.emit(this.progreso);

  }

  cambiarValor( valor: number ) {

    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.CambioValor.emit(this.progreso);

    this.txtProgreso.nativeElement.focus();
  }
}
