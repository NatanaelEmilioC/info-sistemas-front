import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable({
  providedIn: 'root',
})

export class VeiculoService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Veiculo[]>(`${ environment.api }/veiculos/readAll`);
  }

  getById(id: string) {
    return this.http.get<Veiculo>(`${ environment.api }/veiculos/readById/${id}`);
  }

  save(veiculo: Veiculo) {
    const veiculoBody = {
      chassi: veiculo.chassi,
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      placa: veiculo.placa,
      renavam: veiculo.renavam,
      ano: veiculo.ano
    };

    if (veiculo._id) {
      return this.http.put<Veiculo>(`${ environment.api }/veiculos/update/${veiculo._id}`,veiculoBody);
    } else {
      return this.http.post<Veiculo>(`${ environment.api }/veiculos/create`, veiculoBody);
    }
  }

  delete(id: string) {
    return this.http.delete(`${ environment.api }/veiculos/delete/${id}`);
  }
}
