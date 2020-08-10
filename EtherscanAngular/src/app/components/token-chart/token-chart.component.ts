import { Component, OnInit, Input } from '@angular/core';
import {TokenService} from '../../services/token.service'
import { token } from 'src/app/models/token';

@Component({
  selector: 'app-token-chart',
  templateUrl: './token-chart.component.html',
  styleUrls: ['./token-chart.component.css']
})
export class TokenChartComponent implements OnInit {

  @Input() tokens
  pieChartLabels: string[] = ['t1', 't2', 't3', 't4', 't5'];
  pieChartData: number[] = [120, 150, 180, 90, 10];
  pieChartType: string = 'doughnut';
  pieChartLegend: boolean = true

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
    this.tokenService.getTokens().subscribe(data=>{      
      this.pieChartData = data.map(tl=>tl.totalSupply)
    this.pieChartLabels = data.map(tl=>tl.name)
    })    
  }

  addToken(token:token){
    console.log(123)
    this.tokens = this.tokenService.getTokens()
    this.tokens.push(token)
  }

}
