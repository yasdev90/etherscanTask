import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { token } from 'src/app/models/token';

@Component({
  selector: 'app-tokens-table',
  templateUrl: './tokens-table.component.html',
  styleUrls: ['./tokens-table.component.css']
})
export class TokensTableComponent implements OnInit {
  
  @Input() tokens
  @Output() editOldToken: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  editToken(token){
    console.log(token)
    this.editOldToken.emit(token)
  }
}
