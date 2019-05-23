import * as React from 'react';

class VehicleDataContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      uiStore: {isFetching, setIsFetching},
      vehicleStore: { valor }
    } = this.props;
    const viewComponentProps = {
      isFetching,
      valor
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default VehicleDataContainer;
