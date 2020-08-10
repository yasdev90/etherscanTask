import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service'
import { token } from 'src/app/models/token';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  modifiedToken = new token()
  tokensList

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getTokens()
  }

  tokenOperation(passedToken: token) {
    if (passedToken.id == 0 || passedToken.id == undefined) {
      this.tokenService.addToken(passedToken).subscribe()
      this.tokensList.push(passedToken)
      this.modifiedToken = new token()
    }
    else {
      this.tokenService.updateToken(passedToken).subscribe()
      debugger
      let index = this.tokensList.findIndex(t => t.id === passedToken.id)
      this.tokensList[index].id = passedToken.id
      this.tokensList[index].name = passedToken.name
      this.tokensList[index].symbol = passedToken.symbol
      this.tokensList[index].contractAddress = passedToken.contractAddress
      this.tokensList[index].totalHolders = passedToken.totalHolders
      this.tokensList[index].totalSupply = passedToken.totalSupply
    }
  }

  getTokens() {
    this.tokenService.getTokens().subscribe(data => {
      console.log(data)
      this.tokensList = data
    })
  }

  setControlsToken(passedToken) {
    this.modifiedToken = new token()
    this.modifiedToken.id = passedToken.id
    this.modifiedToken.name = passedToken.name
    this.modifiedToken.symbol = passedToken.symbol
    this.modifiedToken.contractAddress = passedToken.contractAddress
    this.modifiedToken.totalHolders = passedToken.totalHolders
    this.modifiedToken.totalSupply = passedToken.totalSupply
  }
}
