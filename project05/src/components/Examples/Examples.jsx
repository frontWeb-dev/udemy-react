import React, { useState } from 'react';
import { EXAMPLES, TOPICS } from '../../data.js';
import Section from '../Section';
import Tabs from '../Tabs';
import TabButton from '../TabButton';
import './Examples.css';

const Examples = () => {
  const [selectTopic, setSelectTopic] = useState('');

  const clickHandler = (value) => {
    setSelectTopic(value);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title='Examples' id='examples'>
      <Tabs
        buttons={
          <>
            {TOPICS.map((topic) => (
              <TabButton
                isSelected={selectTopic === topic.label}
                onClick={() => clickHandler(topic.label)}>
                {topic.title}
              </TabButton>
            ))}
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
