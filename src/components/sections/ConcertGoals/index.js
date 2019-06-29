import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList} from 'styles/shared/styled-components';

const ConcertGoals = () => (
  <Section id="concert-goals">
    <SectionTitle> Concert goals (19) </SectionTitle>
    <UnorderedList>
      <ListItem>
        Foo Fighters,
        Joe Bonamassa,
        Santana,
        Bon Jovi,
        Richie Sambora,
        Lenny Kravitz,
        Steve Vai,
        Eric Clapton,
        3 Doors Down,
        Glenn Hughes,
        Green Day,
        Kings Of Leon,
        Richie Kotzen,
        Tenacious D,
        Sebastian Bach,
        System of A Down,
        Rammstein,
        U2,
        Imagine Dragons
      </ListItem>
    </UnorderedList>
  </Section>
);

export default ConcertGoals;