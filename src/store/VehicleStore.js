// @flow

import { action, observable, computed, decorate } from 'mobx';
import remotedev from 'mobx-remotedev';
import RootStore from './RootStore';

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
      anoEscolhidoCodigo,
      valor
    } = initialState;

    this.tipoLista = tipoLista;
    this.tipoEscolhidoCodigo = tipoEscolhidoCodigo;
    this.marcaLista = marcaLista;
    this.marcaEscolhidaCodigo = marcaEscolhidaCodigo;
    this.modeloLista = modeloLista;
    this.modeloEscolhidoCodigo = modeloEscolhidoCodigo;
    this.anoLista = anoLista;
    this.anoEscolhidoCodigo = anoEscolhidoCodigo;
    this.valor = valor;
  };

  setTipo = (codigo, setIsFetching = value => {}) => {
    this.tipoEscolhidoCodigo = codigo;

    this.resetMarca();
    this.resetModelo();
    this.resetAno();

    this.fetchMarca(setIsFetching);
  }

  fetchMarca = (setIsFetching = value => {}) => {
    const that = this;
    setIsFetching(true);

    fetch(`https://parallelum.com.br/fipe/api/v1/${this.tipoEscolhidoCodigo}/marcas`)
    .then(response => {
      
      if (response.status === 404) {
        // Error on API
        console.log('404');
        setIsFetching(false);
      } else {
        // API response ok        
        response.json().then(function(json) {
          that.setMarcaLista(json);
        });

        setIsFetching(false);
      }
    })
    .catch(() => {
      // request error
      console.log('error');
      setIsFetching(false);
    });
  }
  setMarca = (codigo, setIsFetching = value => {}) => {
    this.marcaEscolhidaCodigo = codigo;

    this.resetModelo();
    this.resetAno();

    this.fetchModelo(setIsFetching);
  }
  setMarcaLista = marcaLista => {
    this.marcaLista = marcaLista;
  }
  resetMarca = () => {
    const { marcaLista, marcaEscolhidaCodigo } = _defaultInitialState;

    this.marcaLista = marcaLista;
    this.marcaEscolhidaCodigo = marcaEscolhidaCodigo;
  }
  
  
  fetchModelo = (setIsFetching = value => {}) => {
    const that = this;
    setIsFetching(true);

    fetch(`https://parallelum.com.br/fipe/api/v1/${this.tipoEscolhidoCodigo}/marcas/${this.marcaEscolhidaCodigo}/modelos`)
    .then(response => {
      
      if (response.status === 404) {
        // Error on API
        console.log('404');
        setIsFetching(false);
      } else {
        // API response ok        
        response.json().then(function(json) {
          that.setModeloLista(json.modelos);
        });

        setIsFetching(false);
      }
    })
    .catch(() => {
      // request error
      console.log('error');
      setIsFetching(false);
    });
  }
  setModelo = (codigo, setIsFetching = value => {}) => {
    this.modeloEscolhidoCodigo = codigo;

    this.resetAno();

    this.fetchAno(setIsFetching);
  }
  setModeloLista = modeloLista => {
    this.modeloLista = modeloLista;
  }
  resetModelo = () => {
    const { modeloLista, modeloEscolhidoCodigo } = _defaultInitialState;

    this.modeloLista = modeloLista;
    this.modeloEscolhidoCodigo = modeloEscolhidoCodigo;
  }
  
  
  fetchAno = (setIsFetching = value => {}) => {
    const that = this;
    setIsFetching(true);

    fetch(`https://parallelum.com.br/fipe/api/v1/${this.tipoEscolhidoCodigo}/marcas/${this.marcaEscolhidaCodigo}/modelos/${this.modeloEscolhidoCodigo}/anos`)
    .then(response => {
      
      if (response.status === 404) {
        // Error on API
        console.log('404');
        setIsFetching(false);
      } else {
        // API response ok        
        response.json().then(function(json) {
          that.setAnoLista(json);
        });

        setIsFetching(false);
      }
    })
    .catch(() => {
      // request error
      console.log('error');
      setIsFetching(false);
    });
  }
  setAno = (codigo, setIsFetching = value => {}) => {
    this.anoEscolhidoCodigo = codigo;

    this.fetchValor(setIsFetching);
  }
  setAnoLista = anoLista => {
    this.anoLista = anoLista;
  }
  resetAno = () => {
    const { anoLista, anoEscolhidoCodigo } = _defaultInitialState;

    this.anoLista = anoLista;
    this.anoEscolhidoCodigo = anoEscolhidoCodigo;
  }

  fetchValor = (setIsFetching = value => {}) => {
    const that = this;
    setIsFetching(true);

    fetch(`https://parallelum.com.br/fipe/api/v1/${this.tipoEscolhidoCodigo}/marcas/${this.marcaEscolhidaCodigo}/modelos/${this.modeloEscolhidoCodigo}/anos/${this.anoEscolhidoCodigo}`)
    .then(response => {
      
      if (response.status === 404) {
        // Error on API
        console.log('404');
        setIsFetching(false);
      } else {
        // API response ok        
        response.json().then(function(json) {
          that.setValor(json);
        });

        setIsFetching(false);
      }
    })
    .catch(() => {
      // request error
      console.log('error');
      setIsFetching(false);
    });
  }
  setValor = valor => {
    this.valor = valor;
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
    valor: observable,
    setInitialState: action,
    setTipo: action,
    setMarca: action,
    setMarcaLista: action,
    setModelo: action,
    setModeloLista: action,
    setAno: action,
    setAnoLista: action,
    setValor: action
  })
);
