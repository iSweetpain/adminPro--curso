import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThrowStmt } from '@angular/compiler';
import { SettingsService } from '../../service/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any ) {

    this.aplicarChek( link );

    this.ajustes.aplicarTema( tema );

  }

  aplicarChek( link: any) {

    let selectores: any = document.getElementsByClassName('selector');

    for ( let ref of selectores ) {
      ref.classList.remove('working' );
    }

    link.classList.add('working');

  }

  colocarCheck() {

    let selectores: any = document.getElementsByClassName('selector');

    let tema = this.ajustes.ajustes.tema;

    for ( let ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
  }

}

