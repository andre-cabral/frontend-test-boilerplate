import * as React from 'react';
import { SelectFromList } from '../';

class ChooseVehicleComponent extends React.Component {
  render() {
    const { isFetching, tipoLista, marcaLista, modeloLista, anoLista } = this.props;

    return (
      <React.Fragment>
        <div className='vehicle-list'>
          <SelectFromList id='tipo' label='Tipo do veículo' defaultOption='-- Escolha o tipo do veículo --' list={tipoLista} />
          <SelectFromList id='marca' label='Marca do veículo' defaultOption='-- Escolha a marca do veículo --' list={marcaLista} />
          <SelectFromList id='modelo' label='Modelo do veículo' defaultOption='-- Escolha o modelo do veículo --' list={modeloLista} />
          <SelectFromList id='ano' label='Ano do veículo' defaultOption='-- Escolha o ano do veículo --' list={anoLista} />
        </div>
      </React.Fragment>
    );
  }
}

export default ChooseVehicleComponent;
