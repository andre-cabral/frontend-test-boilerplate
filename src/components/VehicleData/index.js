import * as React from 'react';
import { connect } from '../../store';

import VehicleDataContainer from './VehicleDataContainer';
import VehicleDataComponent from './VehicleDataComponent';

const Container = connect(
  VehicleDataContainer,
  ['uiStore', 'vehicleStore']
);

function VehicleDataMain(props) {
  return <Container viewComponent={VehicleDataComponent} {...props} />;
}

export default VehicleDataMain;
