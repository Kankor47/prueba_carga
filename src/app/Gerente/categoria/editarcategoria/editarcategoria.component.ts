import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'app/api/alertas/alertas.service';
import { RestService } from 'app/api/rest.service';
import { ResponseI } from 'app/modelos/response.interface';
import { CategoriaI } from './categoria.interface';

@Component({
  selector: 'app-editarcategoria',
  templateUrl: './editarcategoria.component.html',
  styleUrls: ['./editarcategoria.component.css']
})
export class EditarcategoriaComponent implements OnInit {

  categoria:CategoriaI;

  editarForm = new FormGroup({
    nombre_categoria: new FormControl(''),
    id_categoria:new FormControl(''),
});

  constructor(private rest:RestService, private router:Router, private activeroute:ActivatedRoute, private alertas:AlertasService) { }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.paramMap.get('id_categoria');
    this.rest.getCategoriaID(id).subscribe(Data=>{
      this.categoria=Data;
      this.editarForm.setValue({
        'nombre_categoria': this.categoria.nombre_categoria,
        'id_categoria': this.categoria.id_categoria,
      });
      
    }) 
  }

  postForm(form:CategoriaI){
    this.rest.putCategoria(form).subscribe(Data=>{
      let resp:ResponseI=Data;
      if(resp.data=="Información agregada con exito"){
        this.alertas.showSucces('Datos Agregados','Hecho');
        this.router.navigate(['tipo-pedido']);
      }
      else
      {
        this.alertas.showError('Error datos no actualizados','Error');
      }
    });
  }

}
