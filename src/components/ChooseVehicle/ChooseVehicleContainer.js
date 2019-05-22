import * as React from 'react';

class ChooseVehicleContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      uiStore: {isFetching},
      vehicleStore: {tipoLista, marcaLista, modeloLista, anoLista }
    } = this.props;
    const viewComponentProps = {
      isFetching,
      tipoLista,
      marcaLista,
      modeloLista,
      anoLista
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default ChooseVehicleContainer;
