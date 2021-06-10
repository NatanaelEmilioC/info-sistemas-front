import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  veiculos: Veiculo[] = [{
    id:1,
    placa: 'ASM-2541',
    chassi: '31r tU1xDM 1a 0l21525',
    renavam: '71246088001',
    modelo: 'Focus',
    marca: 'Ford',
    ano: 2020,
  }];

  constructor() { }

  getAll(){
return this.veiculos;
  }
}
