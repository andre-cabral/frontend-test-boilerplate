import * as React from 'react';

class VehicleDataContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      uiStore: { showVehicleList },
      vehicleStore: { valor }
    } = this.props;
    const viewComponentProps = {
      showVehicleList,
      valor
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default VehicleDataContainer;
