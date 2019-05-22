import * as React from 'react';
import { ChooseVehicle } from '../../components';

class HomeComponent extends React.Component {
  render() {
    const { welcome, isFetching } = this.props;
    console.log('welcome', welcome);
    console.log('carregando', isFetching);

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
