import * as React from 'react';
import { SelectFromList } from '../';

class ChooseVehicleComponent extends React.Component {
  render() {
    const { isFetching, setIsFetching, tipoLista, setTipo, marcaLista, setMarca, modeloLista, setModelo, anoLista, setAno } = this.props;

    const onChangeTipo = (codigo) => {
      setTipo(codigo, setIsFetching);
    }

    const onChangeMarca = (codigo) => {
      console.log(codigo)
      setMarca(codigo, setIsFetching);
    }

    const onChangeModelo = (codigo) => {
      setModelo(codigo, setIsFetching);
    }

    const onChangeAno = (codigo) => {
      setAno(codigo, setIsFetching);
    }

    return (
      <React.Fragment>
        <div className='vehicle-list'>
          <SelectFromList id='tipo' label='Tipo do veículo' defaultOption='-- Escolha o tipo do veículo --' list={tipoLista} onChange={onChangeTipo} />
          <SelectFromList id='marca' label='Marca do veículo' defaultOption='-- Escolha a marca do veículo --' list={marcaLista} onChange={onChangeMarca} />
          <SelectFromList id='modelo' label='Modelo do veículo' defaultOption='-- Escolha o modelo do veículo --' list={modeloLista} onChange={onChangeModelo} />
          <SelectFromList id='ano' label='Ano do veículo' defaultOption='-- Escolha o ano do veículo --' list={anoLista} onChange={onChangeAno} />
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseVehicleComponent;
