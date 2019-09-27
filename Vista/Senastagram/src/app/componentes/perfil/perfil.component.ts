import { Component, OnInit } from '@angular/core';
import { PublicacionService } from 'src/app/shared/publicacion.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private service:PublicacionService, private toastr:ToastrService) { }

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
    if (form!=null) 
    form.resetForm()
    this.service.formData={
      IdImagen:0,
      imagen:'',
      Descripcion:''
    }
    this.ImageURL="/assets/img/fotosPerfil/nophoto.png";
    this.FileName="Seleccionar imagen"
  }

  onSubmit(form:NgForm){
    this.service.postPublicacion(form.value,this.FileToUpload).subscribe(
      res=>{
        this.resetForm(form);
        this.ngOnInit();
        this.toastr.success("Foto agregada","Senagram")
      },

      err=>{
        this.resetForm(form);
        this.toastr.error(err.error,"Senagram")
      }
    )
  }

  ngOnInit() {
    this.service.getPublicacions();
  }

  onDelete(id:number){
    if (confirm("Seguro quieres eliminar la foto?")) {
      this.service.deletePublicacion(id).subscribe(
        res=>{
          this.ngOnInit();
          this.toastr.warning("Foto eliminada","Senagram")
        },
        err=>{
          this.toastr.error(err.error,"Senagram")
        }
      )
    }
  }

}
