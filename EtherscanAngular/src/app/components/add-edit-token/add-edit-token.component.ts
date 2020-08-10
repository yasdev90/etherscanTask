import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { token } from '../../models/token';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-edit-token',
  templateUrl: './add-edit-token.component.html',
  styleUrls: ['./add-edit-token.component.css']
})
export class AddEditTokenComponent implements OnInit {
  @Input() token = new token()
  @Output() addToken: EventEmitter<token> = new EventEmitter<token>()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.addToken.emit(this.token)
  }

  reset(){
    this.token.id = null
    this.token.name = ''
    this.token.symbol = ''
    this.token.contractAddress = ''
    this.token.totalHolders =undefined
    this.token.totalSupply =undefined
  }
}
