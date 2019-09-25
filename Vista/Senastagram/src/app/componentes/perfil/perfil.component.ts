import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  FileName:string="Seleccionar imagen";
  FileToUpload:File=null;
  ImageURL:string="/assets/img/fotosPerfil/nophoto.png"

  UpdateControls(e):void{
    this.FileToUpload=e.target.files.item(0);
    this.FileName=this.FileToUpload.name;

    var reader = new FileReader();

    reader.onload=(event:any)=>{
      this.ImageURL=event.target.result;
    }
    reader.readAsDataURL(this.FileToUpload);
  }

  constructor() { }

  ngOnInit() {
  }

}
