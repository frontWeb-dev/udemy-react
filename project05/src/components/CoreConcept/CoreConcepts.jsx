import React from 'react';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../../data.js';
import './CoreConcept.css';
import Section from '../Section';

const CoreConcepts = () => {
  return (
    <Section title='Core Concpepts' id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
