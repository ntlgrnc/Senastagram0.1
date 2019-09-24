import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Senagram';

  public inicio: any;

  public usuario = true;

  @ViewChild('formInicio', { static: true }) formInicio: NgForm;

  constructor() {
    this.inicio = {
      correoL: '',
      claveL: ''
    }
  }

  ngOnInit() {
  }

  onInicio() {
    this.inicio.correoL = this.formInicio.value.correoL;
    this.inicio.claveL = this.formInicio.value.claveL;

    console.log(this.inicio.correoL + ' ' + this.inicio.claveL);
  }
}
