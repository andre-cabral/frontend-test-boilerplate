import * as React from 'react';

class HomeContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      userStore: { welcome },
      uiStore: {isFetching},
      vehicleStore: {tipoLista}
    } = this.props;
    const viewComponentProps = {
      welcome,
      isFetching,
      tipoLista
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default HomeContainer;
