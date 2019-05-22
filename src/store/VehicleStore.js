// @flow

import { action, observable, computed, decorate } from 'mobx';
import remotedev from 'mobx-remotedev';

const _defaultInitialState = {
  tipoLista: [
    {
      nome: 'Carros',
      codigo: 'carros'
    },
    {
      nome: 'Motos',
      codigo: 'motos'
    },
    {
      nome: 'Caminhões',
      codigo: 'caminhoes'
    } 
  ],
  tipoEscolhidoCodigo: '',
  marcaLista: [],
  marcaEscolhidaCodigo: '',
  modeloLista: [],
  modeloEscolhidoCodigo: '',
  anoLista: [],
  anoEscolhidoCodigo: '',
  valor: {}
};

class VehicleStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState);
  }

  setInitialState = initialState => {
    const { 
      tipoLista,
      tipoEscolhidoCodigo,
      marcaLista,
      marcaEscolhidaCodigo,
      modeloLista,
      modeloEscolhidoCodigo,
      anoLista,
      anoEscolhidoCodigo
    } = initialState;

    this.tipoLista = tipoLista;
    this.tipoEscolhidoCodigo = tipoEscolhidoCodigo;
    this.marcaLista = marcaLista;
    this.marcaEscolhidaCodigo = marcaEscolhidaCodigo;
    this.modeloLista = modeloLista;
    this.modeloEscolhidoCodigo = modeloEscolhidoCodigo;
    this.anoLista = anoLista;
    this.anoEscolhidoCodigo = anoEscolhidoCodigo;
  };

  setTipo = codigo => {
    this.tipoEscolhidoCodigo = codigo;

    this.resetMarca();
    this.resetModelo();
    this.resetAno();
  }

  setMarca = codigo => {
    this.marcaEscolhidaCodigo = codigo;

    this.resetModelo();
    this.resetAno();
  }
  resetMarca = () => {
    const { marcaLista, marcaEscolhidaCodigo } = this.initialState;

    this.marcaLista = marcaLista;
    this.marcaEscolhidaCodigo = marcaEscolhidaCodigo;
  }
  
  setModelo = codigo => {
    this.modeloEscolhidoCodigo = codigo;

    this.resetAno();
  }
  resetModelo = () => {
    const { modeloLista, modeloEscolhidoCodigo } = this.initialState;

    this.modeloLista = modeloLista;
    this.modeloEscolhidoCodigo = modeloEscolhidoCodigo;
  }
  
  setAno = codigo => {
    this.anoEscolhidoCodigo = codigo;
  }
  resetAno = () => {
    const { anoLista, anoEscolhidoCodigo } = this.initialState;

    this.anoLista = anoLista;
    this.anoEscolhidoCodigo = anoEscolhidoCodigo;
  }
}

export default remotedev(
  decorate(VehicleStore, {
    tipoLista: observable,
    tipoEscolhidoCodigo: observable,
    marcaLista: observable,
    marcaEscolhidaCodigo: observable,
    modeloLista: observable,
    modeloEscolhidoCodigo: observable,
    anoLista: observable,
    anoEscolhidoCodigo: observable,
    setInitialState: action,
    setTipo: action,
    setMarca: action,
    setModelo: action,
    setAno: action
  })
);
