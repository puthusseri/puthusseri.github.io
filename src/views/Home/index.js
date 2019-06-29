import React, {Component} from 'react';
import {observer} from 'mobx-react';

//meta tags
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//fonts
import 'font-awesome/css/font-awesome.css';
import 'animate.css';

//styled components
import {RightSideHome, ShowMoreButton} from './styles';

//sections
import WhoAmI from 'components/sections/WhoAmI';
import WhatImUpTo from 'components/sections/WhatImUpTo';
import ProudProjects from 'components/sections/ProudProjects';
import Speaking from 'components/sections/Speaking';
import DevStack from 'components/sections/DevStack';
import Technologies from 'components/sections/Technologies';
import Libraries from 'components/sections/Libraries';
import Projects from 'components/sections/Projects';
import Achievements from 'components/sections/Achievements';

//extra sections
import Interesting from 'components/sections/Interesting';
import Countries from 'components/sections/Countries';
import Concerts from 'components/sections/Concerts';
import ConcertGoals from 'components/sections/ConcertGoals';
import Fitness from 'components/sections/Fitness';

@observer(['store'])
class Home extends Component {

  componentDidMount() {
    const {store:{app, router:{queryParams = {}}}} = this.props;
    app.scrollToUrlSection(queryParams.section);
  }

  render() {

    const {store} = this.props;
    const {app} = store;
    const {showExtra} = app;

    return (
      <RightSideHome id="right-side-home" backgroundColor="#333959">

        <Helmet
          title="Kitze"
          meta={getMeta()}
        />

        <WhoAmI/>
        <WhatImUpTo/>
        <ProudProjects/>
        <Speaking/>
        <DevStack/>
        <Technologies/>
        <Libraries/>
        {/*<Projects/>*/}
        <Achievements/>

        {!showExtra && <ShowMoreButton onClick={() => app.setShowExtra(true)}>
          I wanna know more!
        </ShowMoreButton>
        }

        {showExtra && <div>
          <Interesting/>
          <Countries/>
          <Concerts/>
          <ConcertGoals/>
          <Fitness/>
        </div>
        }

      </RightSideHome>
    )
  }
}

export default Home;
