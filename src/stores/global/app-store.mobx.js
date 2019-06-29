import {observable, action} from 'mobx';
import {scrollToSection} from 'utils/dom-utils';

class App {

  //properties
  hiddenSections = [
    'fitness', 'interesting', 'countries', 'concerts', 'concert-goals'
  ];

  //observables
  @observable showExtra = false;

  //actions
  @action setShowExtra = val => {
    this.showExtra = val;
  }

  @action scrollToUrlSection = (section) => {
    if (section) {
      this.showExtra = true;
      scrollToSection(section);
    }
  }
}

export default App