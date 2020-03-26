import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {
    this.subcription = this.retornarObservable().subscribe(
      number => console.log('subs', number),
      error => console.log('error', error),
      () => console.log('El observador termino!')
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
   this.subcription.unsubscribe();
  }

  retornarObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      let Intrevalo = setInterval( () => {

        contador++;

        const salida = {
          valor: contador
        };
        // observer.next( salida );
        // if ( contador === 3 ) {
        //   clearInterval( Intrevalo );
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   // clearInterval( Intrevalo );
        //   observer.error('Auxilio!');
        // }
      }, 1000);
    }).pipe(
      map( resp => resp.valor ),
      filter( ( valor, index ) => {

        if ( (valor % 2 === 1) ) {
          //par
          return true;
        } else {
          //impar
          return false;
        }
      } )
    );
  }

}
