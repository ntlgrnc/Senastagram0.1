import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

      public registro: any;
      public dia: number[];
      public mes: string[];
      public ano: number[];

      @ViewChild ('formRegistro' , {static:true}) formRegistro: NgForm;

  constructor() { 
    this.registro = {
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',
      correo: '',
      clave: '',
      dia: '',
      mes: '',
      ano: ''
    }

    this.dia = [
      1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
    ]

    this.mes = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]

    this.ano = [
      1950,	1951,	1952,	1953,	1954,	1955,	1956,	1957,	1958,	1959,
    	1960,	1961,	1962,	1963,	1964,	1965,	1966,	1967,	1968,	1969,
      1970,	1971,	1972,	1973,	1974,	1975,	1976,	1977,	1978,	1979,
      1980,	1981,	1982,	1983,	1984,	1985,	1986,	1987,	1988,	1989,
      1990,	1991,	1992,	1993,	1994,	1995,	1996,	1997,	1998,	1999,
      2000,	2001,	2002,	2003,	2004,	2005,	2006,	2007,	2008,	2009,
      2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
    ]
  }

  ngOnInit() {
  }

  onRegistro(){
    this.registro.nombre1 = this.formRegistro.value.nombre1;
    this.registro.nombre2 = this.formRegistro.value.nombre2;
    this.registro.apellido1 = this.formRegistro.value.apellido1;
    this.registro.apellido2 = this.formRegistro.value.apellido2;
    this.registro.correo = this.formRegistro.value.correo;
    this.registro.clave = this.formRegistro.value.clave;
    this.registro.dia = this.formRegistro.value.dia;
    this.registro.mes = this.formRegistro.value.mes;
    this.registro.ano = this.formRegistro.value.ano;

    console.log(this.registro.nombre1 + ' ' + this.registro.nombre2 + ' ' + this.registro.apellido1 + ' ' +
      this.registro.apellido2 + ' ' + this.registro.correo + ' ' + this.registro.clave + ' ' + this.registro.dia + 
      ' ' + this.registro.mes + ' ' + this.registro.ano );
  }

}
