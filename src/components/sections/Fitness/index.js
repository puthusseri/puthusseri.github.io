import React from 'react';
import {Section, SectionTitle, ListItem, UnderlinedLink, UnorderedList} from 'styles/shared/styled-components';

const Fitness = () => (
  <Section id="fitness" className="animated fadeInDown">
    <SectionTitle> Fitness - shmitness</SectionTitle>
    <UnorderedList>
      <ListItem>
        <span> Climbed </span><UnderlinedLink
        href="https://en.wikipedia.org/wiki/Korab_(mountain)" target="_blank">
        Korab
      </UnderlinedLink>
      </ListItem>
      <ListItem>
        <span> Climbed </span>
        <UnderlinedLink
          href="https://en.wikipedia.org/wiki/High_Tatras" target="_blank">
          <span> High Tatra Mountains </span>
        </UnderlinedLink>
      </ListItem>
      <ListItem>
        Biked around <UnderlinedLink
        href="https://en.wikipedia.org/wiki/Vis_(island)" target="_blank">
        Vis Island
      </UnderlinedLink>
      </ListItem>
      <ListItem>
        Completed <UnderlinedLink
        href="https://www.beachbody.com/product/fitness_programs/insanity.do" target="_blank">
        <span> INSANITY</span>
      </UnderlinedLink>
        <span> twice 😜</span>
      </ListItem>
    </UnorderedList>
  </Section>
);

export default Fitness;