import React, {Component} from 'react';
import {observer} from 'mobx-react';

//styles
import './styles.css';
import styled from 'styled-components';
import {mobileThoughts} from 'styles/scenarios';

const Wrapper = styled.span`
	${mobileThoughts`
      display: none !important;
	`}
`;

class MouseScroll extends Component {
  render() {

    const {store} = this.props;
    const {router} = store;
    const isHome = router.currentView.id === 'home';

    return (
      <Wrapper isHome={isHome} className="scroll-btn">
        <div>
					<span className="mouse">
						<span>
						</span>
					</span>
        </div>
      </Wrapper>
    )
  }
}

export default observer(['store'])(MouseScroll);
