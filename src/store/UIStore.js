import { action, observable, decorate } from 'mobx';
import remotedev from 'mobx-remotedev';

const _defaultInitialState = {
  isFetching: false,
  showVehicleList: true
}

class UIStore {
  constructor(initialState) {
    this.setInitialState(initialState || _defaultInitialState);
  }

  setInitialState = initialState => {
    const { isFetching, showVehicleList } = initialState;
    
    this.isFetching = isFetching;
    this.showVehicleList = showVehicleList;
    
  }

  setIsFetching = isFetching => {
    this.isFetching = isFetching;
  }

  setShowVehicleList = showVehicleList => {
    this.showVehicleList = showVehicleList;
  }
}

export default remotedev(
  decorate(UIStore, {
    isFetching: observable,
    showVehicleList: observable,
    setInitialState: action,
    setIsFetching: action,
    setShowVehicleList: action
  })
);
