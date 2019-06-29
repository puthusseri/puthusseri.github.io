import AppStore from 'stores/global/app-store.mobx';
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  router: new RouterStore(),
};

export default store;