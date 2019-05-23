import * as React from 'react';

class ChooseVehicleContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      uiStore: {isFetching, setIsFetching},
      vehicleStore: { tipoLista, setTipo, marcaLista, setMarca, modeloLista, setModelo, anoLista, setAno }
    } = this.props;
    const viewComponentProps = {
      isFetching,
      setIsFetching,
      tipoLista,
      setTipo,
      marcaLista,
      setMarca,
      modeloLista,
      setModelo,
      anoLista,
      setAno
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default ChooseVehicleContainer;
