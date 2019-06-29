import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const WhatImUpTo = () => (
  <Section id="sup" className="animated fadeInDown">
    <SectionTitle> What I'm up to </SectionTitle>
    <UnorderedList>
      <ListItem>
        Making products
      </ListItem>
      <ListItem>
        Traveling the world
      </ListItem>
      <ListItem>
        Teaching React with <UnderlinedLink
        target="_blank"
        href="https://reactacademy.io">
        React Academy
      </UnderlinedLink>
      </ListItem>
      <ListItem>
        <UnderlinedLink href="https://twitter.com/thekitze" target="_blank">
          Tweeting like there's no tomorrow!
        </UnderlinedLink>
      </ListItem>
    </UnorderedList>
  </Section>
);

export default WhatImUpTo;