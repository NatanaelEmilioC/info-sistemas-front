import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  veiculos: Veiculo[] = [
    {
      id: 1,
      placa: 'ASM-2541',
      chassi: '31r tU1xDM 1a 0l21525',
      renavam: '71246088001',
      modelo: 'Focus',
      marca: 'Ford',
      ano: 2020,
    },
  ];

  constructor() {}

  getAll() {
    return this.veiculos;
  }

  getById(id: number) {
    const veiculos = this.veiculos.find((value) => value.id == id);
    return veiculos;
  }

  save(veiculo: Veiculo) {
    if (veiculo.id) {
      const veiculoArray = this.getById(veiculo.id);
      veiculoArray!.ano = veiculo.ano;
      veiculoArray!.chassi = veiculo.chassi;
      veiculoArray!.marca = veiculo.marca;
      veiculoArray!.modelo = veiculo.modelo;
      veiculoArray!.placa = veiculo.placa;
      veiculoArray!.ano = veiculo.ano;
    } else {
      let lastId = this.veiculos.length > 0 ? this.veiculos.length - 1 : 0;
      veiculo.id = lastId + 1;
      this.veiculos.push(veiculo);
    }
  }
  delete(id: number) {
    const veiculoIndex = this.veiculos.findIndex((value) => value.id == id);
    this.veiculos.splice(veiculoIndex, 1);
  }
}
