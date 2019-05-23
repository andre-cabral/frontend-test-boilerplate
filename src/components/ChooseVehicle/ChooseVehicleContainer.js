import * as React from 'react';

class ChooseVehicleContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      uiStore: { isFetching, setIsFetching, showVehicleList, setShowVehicleList },
      vehicleStore: { tipoLista, setTipo, marcaLista, setMarca, modeloLista, setModelo, anoLista, setAno, valor }
    } = this.props;
    const viewComponentProps = {
      isFetching,
      setIsFetching,
      showVehicleList,
      setShowVehicleList,
      tipoLista,
      setTipo,
      marcaLista,
      setMarca,
      modeloLista,
      setModelo,
      anoLista,
      setAno,
      valor
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default ChooseVehicleContainer;
