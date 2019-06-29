import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';
import projects from 'data/projects';

const Technologies = () => (
  <Section id="work">
    <SectionTitle> Projects I worked for / help build </SectionTitle>
    <UnorderedList>
      {projects.map(({name, link, workedOn}) => <ListItem key={name}>
          <UnderlinedLink target="_blank" href={link}>
            <span>{name}</span>
          </UnderlinedLink>
          <span> ({workedOn})</span>
        </ListItem>
      )}
    </UnorderedList>
  </Section>
);

export default Technologies;