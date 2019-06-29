import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList} from 'styles/shared/styled-components';

const Countries = () => (
  <Section id="countries">
    <SectionTitle> Countries visited (18/196)</SectionTitle>
    <UnorderedList>
      <ListItem> 🇲🇰 🇷🇸 🇧🇬 🇦🇹 🇭🇷 🇭🇺 🇨🇿 🇬🇷 🇳🇱 🇸🇰 🇨🇭 🇫🇷 🇮🇹 🇲🇹 🇷🇴 🇬🇧 🇩🇪 🇵🇱</ListItem>
    </UnorderedList>
  </Section>
);

export default Countries;