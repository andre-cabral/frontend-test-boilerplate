import * as React from 'react';
import { connect } from '../../store';

import ChooseVehicleContainer from './ChooseVehicleContainer';
import ChooseVehicleComponent from './ChooseVehicleComponent';

const Container = connect(
  ChooseVehicleContainer,
  ['uiStore', 'vehicleStore']
);

function ChooseVehicleMain(props) {
  return <Container viewComponent={ChooseVehicleComponent} {...props} />;
}

export default ChooseVehicleMain;
