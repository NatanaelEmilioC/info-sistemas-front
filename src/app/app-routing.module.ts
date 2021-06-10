import { VeiculoListFormComponent } from './veiculos/veiculo-list-form/veiculo-list-form.component';
import { VeiculoListComponent } from './veiculos/veiculo-list/veiculo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: VeiculoListComponent },
  {path: 'new', component: VeiculoListFormComponent },
  {path: 'edit/:id', component: VeiculoListFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
