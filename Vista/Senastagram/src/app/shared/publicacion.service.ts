import { Injectable } from '@angular/core';
import { Publicacion } from './publicacion.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  formData:Publicacion;

  constructor(private HttpClient:HttpClient) { }

  readonly rootURL="https://localhost:44373/api/"

  postPublicacion(formData:Publicacion, FileToUpload:File){
    let formToPost = new FormData();
    let requestToPost = JSON.stringify({
      imagen:FileToUpload.name,
      Descripcion:formData.Descripcion,
    });

    formToPost.append("publicacion",requestToPost);
    formToPost.append("imagen",FileToUpload,FileToUpload.name)

    return this.HttpClient.post(this.rootURL+"publicacion",formToPost)
  }
}
