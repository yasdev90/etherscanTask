import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddEditTokenComponent } from './components/add-edit-token/add-edit-token.component';
import { HeaderComponent } from './components/header/header.component';
import { TokenChartComponent } from './components/token-chart/token-chart.component';
import { TokensTableComponent } from './components/tokens-table/tokens-table.component';
import { ContentComponent } from './components/content/content.component'
import {ChartsModule} from 'ng2-charts'
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AddEditTokenComponent,
    HeaderComponent,
    TokenChartComponent,
    TokensTableComponent,
    ContentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
