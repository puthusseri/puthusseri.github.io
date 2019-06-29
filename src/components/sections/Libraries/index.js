import React from 'react';
import {Section, SectionTitle, ListItem, UnderlinedLink, UnorderedList} from 'styles/shared/styled-components';
import libraries from 'data/libraries';

const Libraries = () => (
  <Section id="libraries">
    <SectionTitle> Libraries I've written </SectionTitle>
    <UnorderedList>
      {libraries.map(({name, description, link}, key) => <ListItem key={name}>
          <UnderlinedLink href={link} target="_blank">
            {name}
          </UnderlinedLink>
          <span> - {description} </span>
        </ListItem>
      )}
    </UnorderedList>
  </Section>
);

export default Libraries;