import { useState } from 'react';
import './Essentials.css'

import componentsImg from './components.png';
import propsImg from './config.png';
import jsxImg from './jsx-ui.png';
import stateImg from './state-mgmt.png';

import { CORE_CONCEPTS } from './exercises/CoreConcepts';
import Header from './essentialsComponents/Header/Header';
import { CoreConcept, CoreConceptObjectDestructuring, CoreConceptRestProperty } from './essentialsComponents/CoreConcept';
import TabButton, { TabButton2 } from './exercises/TabButton';
import { EXAMPLES, ExampleData, ExampleKey } from './essentialsComponents/data';


function Essentials() {
  const [selectedTopic, setSelectedTopic] = useState('')

  function handleSelect(selectedButton: string) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  // 3
  // 3
  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).title}</h3>
        <p>{(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).description}</p>
        <pre>
          <code>
            {(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* check CoreConcept.tsx for differences on these */}
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConceptRestProperty {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConceptObjectDestructuring {...CORE_CONCEPTS[3]} />
          </ul>
          {/* 1 */}
          {/* 1 */}
          {/* <section id="examples">
            <h2>Example</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
            </menu>
            {!selectedTopic ? <p>Please select a topic.</p> : <div id="tab-content">
              <h3>{(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).title}</h3>
              <p>{(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).description}</p>
              <pre>
                <code>
                  {(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).code}
                </code>
              </pre>
            </div>}
          </section>*/}
          {/* 2 */}
          {/* 2 */}
        </section>
        {/* <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).title}</h3>
              <p>{(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).description}</p>
              <pre>
                <code>
                  {(EXAMPLES[selectedTopic as ExampleKey] as ExampleData).code}</code>
              </pre>
            </div>
          )}
        </section> */}
        {/* 3 */}
        {/* 3 */}
        {tabContent}
      </main>
    </div >
  );
}

export default Essentials

