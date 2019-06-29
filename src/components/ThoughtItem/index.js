import React from 'react';
import {observer} from 'mobx-react';
import views from 'config/views';
import {Link, ListItem, Title, DateTime, TagList, Tag} from './styles';

const ThoughtItem = ({store, thought, index}) => {
  return (
    <ListItem index={index}>
      <Link
        index={index}
        key={thought.id}
        view={views.thought}
        params={{slug: thought.slug}}
        store={store}
      >
        <Title>
          {thought.title}
        </Title>

        {thought.tags && <TagList>
          {thought.tags.map(tag => <Tag key={tag}> {tag} </Tag>)}
        </TagList>
        }

        <DateTime>
          {thought.createdAt}
        </DateTime>
      </Link>
    </ListItem>
  )
}

export default observer(['store'])(ThoughtItem);