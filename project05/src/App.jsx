import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

function App() {
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
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => clickHandler('components')}>Components</TabButton>
            <TabButton onClick={() => clickHandler('jsx')}>JSX</TabButton>
            <TabButton onClick={() => clickHandler('props')}>Props</TabButton>
            <TabButton onClick={() => clickHandler('state')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
