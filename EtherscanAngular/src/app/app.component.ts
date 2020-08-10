import { Component } from '@angular/core';
import { token } from './models/token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token:token
  tokensList: token[]

  findToken(id:number){
    var token = this.tokensList.find(token=>token.id == id);
    return token;
  }
}
