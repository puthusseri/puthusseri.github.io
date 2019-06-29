import React from 'react';
import {Section, SectionTitle, ListItem, UnderlinedLink, UnorderedList} from 'styles/shared/styled-components';

const Technologies = () => (
  <Section id="technologies">
    <SectionTitle> Technologies I have used </SectionTitle>
    <UnorderedList>
      <ListItem>
        <span>
          C#, .NET, MVC, WinForms, WPF, PHP, Wordpress, Java, Node.js, Webpack, Sass, LESS, aphrodite, styled-components,
                 Gulp, Grunt, Yeoman, jQuery, Bootstrap, Angular, MobX, Redux, Firebase, Jade/Pug, etc. etc. etc.
        </span>
        <span> Even </span>
        <UnderlinedLink target="_blank" href="http://www.edwardbosworth.com/CPSC2105/Lectures/Slides_05/Chapter_04/MARIE_AssemblyLanguage.htm">
          MARIE
        </UnderlinedLink>.
      </ListItem>
    </UnorderedList>
  </Section>
);

export default Technologies;