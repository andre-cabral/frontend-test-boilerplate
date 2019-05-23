import * as React from 'react';
import { ChooseVehicle, VehicleData, Loading } from '../../components';

class HomeComponent extends React.Component {
  render() {
    const { welcome, isFetching, vehicleStore } = this.props;
    console.log(vehicleStore)

    return (
      <React.Fragment>
        <div className='home-container'>
          <Loading isLoading={isFetching} />
          <h2>{welcome}</h2>
          <ChooseVehicle  />
          <VehicleData />
        </div>
      </React.Fragment>
    );
  }
}

export default HomeComponent;
