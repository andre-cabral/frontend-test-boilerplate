import { configure } from 'mobx';
import UserStore from './UserStore';
import UIStore from './UIStore';
import VehicleStore from './VehicleStore';

export default class RootStore {
  constructor() {
    configure({ enforceActions: 'always' });
    this.userStore = new UserStore();
    this.uiStore = new UIStore();
    this.vehicleStore = new VehicleStore();
  }
}
