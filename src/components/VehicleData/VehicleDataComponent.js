import * as React from 'react';
import { SelectFromList } from '../';
import {VehicleDataKeyDictionary} from '../../helpers/VehicleDataHelper';

class VehicleDataComponent extends React.Component {
  render() {
    const { isFetching, valor } = this.props;

    console.log(valor)


    return (
      <React.Fragment>
        <div className='vehicle-data'>
          {Object.keys(valor).map((key, index) => 
            <p key={`${key}-${valor[key]}`} className={`vehicle-data__line${index%2==0 ? ' vehicle-data__line--even' : ''}`}>{VehicleDataKeyDictionary(key)}: {valor[key]}</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default VehicleDataComponent;
