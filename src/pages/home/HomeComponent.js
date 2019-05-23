import * as React from 'react';
import { ChooseVehicle } from '../../components';

class HomeComponent extends React.Component {
  render() {
    const { welcome, isFetching, vehicleStore } = this.props;
    console.log(vehicleStore)

    return (
      <React.Fragment>
        <h2>{welcome}</h2>
        {isFetching ? (<p>Carregando</p>) : ''}
        <ChooseVehicle  />
      </React.Fragment>
    );
  }
}

export default HomeComponent;
