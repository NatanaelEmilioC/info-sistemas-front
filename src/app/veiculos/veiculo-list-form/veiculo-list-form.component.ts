import { VeiculoService } from './../shared/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../shared/veiculo';

@Component({
  selector: 'app-veiculo-list-form',
  templateUrl: './veiculo-list-form.component.html',
  styleUrls: ['./veiculo-list-form.component.css']
})
export class VeiculoListFormComponent implements OnInit {
  veiculo: Veiculo | null | undefined = new Veiculo();
  title: string = 'Novo veículo';
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private VeiculoService: VeiculoService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.veiculo = this.VeiculoService.getById(parseInt(id));
      this.title = 'Alterando veículo';
    }
  }
  onSubmit(){
    if(this.veiculo)
    this.VeiculoService.save(this.veiculo);
    this.router.navigate(['']);
  }

}
