import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoListComponent } from './veiculos/veiculo-list/veiculo-list.component';
import { VeiculoListItemComponent } from './veiculos/veiculo-list-item/veiculo-list-item.component';
import { VeiculoListFormComponent } from './veiculos/veiculo-list-form/veiculo-list-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoListComponent,
    VeiculoListItemComponent,
    VeiculoListFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
