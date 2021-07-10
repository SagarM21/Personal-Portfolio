import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
          Welcome to <br />
          My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hey! I am Sagar Maheshwari, persuing B.Tech CSE focused on Artificial Intelligence & Machine Learning from VIT-Bhopal,
        Currently making advancements in Web Development.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;