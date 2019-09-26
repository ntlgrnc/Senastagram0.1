import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/shared/publicacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private service:PublicacionService) { }

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

  resetForm(form?:NgForm){
    if (form!=null) {
      this.resetForm();
    }
    this.service.formData={
      IdImagen:0,
      imagen:'',
      Descripcion:''
    }
  }

  onSubmit(form:NgForm){
    this.service.postPublicacion(form.value,this.FileToUpload).subscribe(
      res=>{
        this.resetForm(form);
      }
    )
  }

  ngOnInit() {
  }

}
