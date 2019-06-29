import React from 'react';
import {Section, SectionTitle, ListItem, UnorderedList, UnderlinedLink} from 'styles/shared/styled-components';
import {textLinks} from 'data/social';

const WhoAmI = () => (
  <Section id="who" className="animated fadeInDown">
    <SectionTitle> Who? </SectionTitle>
    <UnorderedList>
      {textLinks.map(link => <ListItem key={link.href}>
          <UnderlinedLink target="_blank" href={link.href}>
            {link.title}
          </UnderlinedLink>
        </ListItem>
      )
      }
    </UnorderedList>
  </Section>
);

export default WhoAmI;