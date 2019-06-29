import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import colors from 'config/colors';

//models
import Thought from 'stores/models/Thought';

//data
import {graphql} from 'react-apollo';
import {ThoughtQuery, options} from './data';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//styled-components
import {RightSide, Content, Title, Top} from './styles';
import Spinner from 'components/Spinner';

//markdown-to-react configuration
import MTRC from 'markdown-to-react-components';

//markdown styled-components
import Code from 'components/markdown/Code';
import Image from 'components/markdown/Image';
import Codespan from 'components/markdown/Codespan';
import Link from 'components/markdown/Link';

MTRC.configure({
  a: Link,
  code: Code,
  img: Image,
  codespan: Codespan
});

@inject('store')
@graphql(ThoughtQuery, {options})
@observer
class ThoughtPage extends Component {
  render() {
    const {data} = this.props;
    const {loading} = data;
    let thought;

    if (data.allThoughts) {
      thought = new Thought(data.allThoughts[0]);
    }

    return (
      <RightSide backgroundColor={colors.thoughtsBackgroundColor}>

        {loading && <Spinner
          className="spinner"
          speed="0.8"
          size="4em"
          backgroundColor={colors.accent}
          color={colors.thoughtsBackgroundColor}
        />
        }

        {!loading && thought && <div>
          <Helmet
            title={thought.title}
            meta={getMeta({
              title: thought.title,
              description: thought.description,
              image: thought.coverImage
            })
            }
          />
          <Top>
            <Title>{thought.title}</Title>
            <Content>
              {MTRC(thought.content).tree}
            </Content>
          </Top>
        </div>
        }

      </RightSide>
    )
  }
}

export default ThoughtPage;