import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

  constructor(){}

localStorage(){

  let articulo= "camisa";
  let precio=12000;

  let producto ={
    nombre:"juano",
    edad:19

  }

  localStorage.setItem("nombre", articulo)

  localStorage.setItem("producto", JSON.stringify(producto) )

}
}

