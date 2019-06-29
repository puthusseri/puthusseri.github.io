import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const DevStack = () => (
  <Section id="achievements">
    <SectionTitle> Some Achievements </SectionTitle>
    <UnorderedList>
      <ListItem>Won first place @ Startup Weekend Skopje</ListItem>
      <ListItem>One of the winners at T-Mobile's "most creative talent video" competition</ListItem>
      <ListItem>First place @ Europemobility's <UnderlinedLink
        href="https://www.youtube.com/watch?v=8Y50TjYfOrU"
        target="_blank">video contest</UnderlinedLink>,
                but got kicked out because of audio copyright 😂
      </ListItem>
    </UnorderedList>
  </Section>
);

export default DevStack;