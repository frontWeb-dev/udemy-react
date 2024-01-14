import React, { useState } from 'react';
import TabButton from '../TabButton.jsx';
import { EXAMPLES } from '../../data.js';
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
    <section id='examples'>
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectTopic === 'components'}
          onClick={() => clickHandler('components')}>
          Components
        </TabButton>
        <TabButton isSelected={selectTopic === 'jsx'} onClick={() => clickHandler('jsx')}>
          JSX
        </TabButton>
        <TabButton isSelected={selectTopic === 'props'} onClick={() => clickHandler('props')}>
          Props
        </TabButton>
        <TabButton isSelected={selectTopic === 'state'} onClick={() => clickHandler('state')}>
          State
        </TabButton>
      </menu>

      {tabContent}
    </section>
  );
};

export default Examples;
