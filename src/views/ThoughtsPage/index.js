import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import colors from 'config/colors';

//data
import {graphql} from 'react-apollo';
import {ThoughtsQuery} from './data';

//meta
import Helmet from 'react-helmet';
import {getMeta} from 'utils/head-utils';

//components
import ThoughtItem from 'components/ThoughtItem';
import Thought from 'stores/models/Thought';

//styled-components
import {List, Tag, Tags, RightSide} from './styles';
import Spinner from 'components/Spinner';

@inject('store')
@graphql(ThoughtsQuery)
@observer
class ThoughtsPage extends Component {

  render() {

    const {data} = this.props;

    const loading = data.loading;
    let thoughts = [];

    if (!loading && data && data.allThoughts) {
      thoughts = data.allThoughts.map(thought => new Thought(thought));
    }

    return (
      <RightSide backgroundColor={colors.thoughtsBackgroundColor}>
        <Helmet
          title="Thoughts"
          meta={getMeta({
            title: "Thoughts"
          })
          }
        />

        {loading && <Spinner
          className="spinner"
          speed="0.8"
          size="4em"
          backgroundColor={colors.accent}
          color={colors.thoughtsBackgroundColor}
        />
        }

        {!loading && <div className="animated fadeIn">
          {false && <Tags>
            {thoughts.allTags.map(tag => <Tag
                key={tag}
                selected={thoughts.selectedTags.indexOf(tag) !== -1}
                onClick={() => thoughts.toggleTag(tag)}>
                #{tag}
              </Tag>
            )}
          </Tags>}

          <List>
            {thoughts.map((thought, index) => <ThoughtItem index={index} key={thought.id} thought={thought}/>)}
          </List>
        </div>
        }
      </RightSide>
    )
  }
}

export default ThoughtsPage;