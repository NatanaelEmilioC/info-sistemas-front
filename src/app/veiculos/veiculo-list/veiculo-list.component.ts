import { VeiculoService } from './../shared/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../shared/veiculo';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {
 veiculos: Veiculo[] = [];
  constructor( private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.veiculos = this.veiculoService.getAll();
  }

}
