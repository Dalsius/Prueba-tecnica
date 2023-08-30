import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BehaviorSubject } from 'rxjs';
import swal from 'sweetalert2';
import { Pais } from '../pais';


@Component({
  selector: '',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  Pais: Pais[] = [];
  Capital: Pais[] = [];
  private contadorPais: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private contadorCapital: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  searchPais: any;
  searchCapital: any;
  historial: any;

  constructor(private apipublica: ApiService) { }

  ngOnInit(): void {
  }
  get contPais() {
    return this.contadorPais.asObservable();
  }
  get contCapital() {
    return this.contadorCapital.asObservable();
  }


  buscarPais(): void {
    this.apipublica.getPais(this.searchPais).subscribe(data => {
      this.Pais = data;
      console.log(this.Pais);
      this.contadorPais.next(this.contadorPais.value + 1);
    })
  }

  buscarCapital(): void {
    this.apipublica.getCapital(this.searchCapital).subscribe(data => {
      this.Capital = data;
      console.log(this.Capital);
      this.contadorCapital.next(this.contadorCapital.value + 1);

    })
  }

  detallePais() {
    swal.fire('Detalle', `Población:  ${this.Pais[0].population} , Status:  ${this.Pais[0].status}, Region:  ${this.Pais[0].region} `, 'success')
  }
  detalleCapital() {
    swal.fire('Detalle', `Población:  ${this.Capital[0].population} , Status:  ${this.Capital[0].status}, Region:  ${this.Capital[0].region} `, 'success')
  }

  agregarHistorial(term: string) {
    const history = this.obtenerhistorial();
    history.push(term);
    localStorage.setItem(this.historial, JSON.stringify(history));
  }

  obtenerhistorial(): string[] {
    const history = localStorage.getItem(this.historial);
    return history ? JSON.parse(history) : [];
  }
}
