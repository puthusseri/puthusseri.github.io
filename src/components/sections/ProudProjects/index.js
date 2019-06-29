import React from 'react';
import {Section, SectionTitle, UnorderedList} from 'styles/shared/styled-components';

//projects
import FejsMK from 'components/projects/FejsMK';
import OKGoogle from 'components/projects/OKGoogle';
import HumanAgain from 'components/projects/HumanAgain';
import ReactAcademy from 'components/projects/ReactAcademy';
import SizzyCo from 'components/projects/SizzyCo';

const ProudProjects = () => (
  <Section id="projects" className="animated fadeInDown">
    <SectionTitle> Projects I'm proud of </SectionTitle>
    <UnorderedList>
      <ReactAcademy/>
      <SizzyCo/>
      <OKGoogle/>
      {/*<HumanAgain/>*/}
      <FejsMK/>
    </UnorderedList>
  </Section>
);

export default ProudProjects;