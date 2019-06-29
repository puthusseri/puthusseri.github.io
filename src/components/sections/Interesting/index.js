import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';

const Interesting = () => (
  <Section id="interesting" className="animated fadeInDown">
    <SectionTitle>Interesting</SectionTitle>
    <UnorderedList>
      <ListItem>
        I met Katy Perry and participated in one of her music videos. No, seriously, she's cool.
      </ListItem>
      <ListItem>
        Visited a 1 week "basics of photography" seminar where we learned to take photos with frickin'
        coffee
        tins.
        Believe it or not.
      </ListItem>
      <ListItem>
        I have the funniest dog ever and <UnderlinedLink
        href="https://instagram.com/benjithemaltese/"
        target="_blank"
      >
        he has an Instagram profile
      </UnderlinedLink>.
        It's {new Date().getFullYear()}, shut up.
      </ListItem>
    </UnorderedList>
  </Section>
);

export default Interesting;