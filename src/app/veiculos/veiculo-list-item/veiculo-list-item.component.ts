import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from '../shared/veiculo';

@Component({
  selector: 'app-veiculo-list-item',
  templateUrl: './veiculo-list-item.component.html',
  styleUrls: ['./veiculo-list-item.component.css']
})
export class VeiculoListItemComponent implements OnInit {
  @Input()
  veiculo!: Veiculo;
  constructor() { }

  ngOnInit(): void {
  }

}
