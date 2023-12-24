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
  // function handleSelect(selectedButton: string) {
  const [selectedTopic, setSelectedTopic] = useState<ExampleKey | null>(null);

  // function handleSelect(selectedButton: ExampleKey) {
  function handleSelect(selectedButton: ExampleKey) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  let tabContent = <p>Please select a topic</p>
  if (selectedTopic !== null) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}</code>
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
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div >
  );
}

export default Essentials

