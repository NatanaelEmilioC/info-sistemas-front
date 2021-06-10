import { VeiculoService } from './../shared/veiculo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../shared/veiculo';

@Component({
  selector: 'app-veiculo-list-item',
  templateUrl: './veiculo-list-item.component.html',
  styleUrls: ['./veiculo-list-item.component.css']
})
export class VeiculoListItemComponent implements OnInit {
  @Input()
  veiculo: Veiculo = new Veiculo();
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
  }

  remove(veiculo: Veiculo){
    if(veiculo.id)
      this.veiculoService.delete(veiculo.id);
  }
}
