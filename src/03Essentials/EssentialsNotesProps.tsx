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
            {/* 1 */}
            {/* 1 */}
            {/* Direct Props Passing: */}
            <CoreConcept
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              src={componentsImg} />
            {/* <CoreConcept
              title="JSX"
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
              src={jsxImg} />
            <CoreConcept
              title="Props"
              description="Make components configurable (and therefore reusable) by passing input data to them."
              src={propsImg} />
            <CoreConcept
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
              src={stateImg} /> */}
            {/* 2 */}
            {/* 2 */}
            {/* Object Destructuring: */}
            {/* <CoreConceptObjectDestructuring
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              src={CORE_CONCEPTS[0].src}
            /> */}
            <CoreConceptObjectDestructuring
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              src={CORE_CONCEPTS[1].src}
            />
            {/* <CoreConceptObjectDestructuring
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              src={CORE_CONCEPTS[2].src}
            />
            <CoreConceptObjectDestructuring
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              src={CORE_CONCEPTS[3].src}
            /> */}
            {/* 3 */}
            {/* 3 */}
            {/* Spread Operator for Props: */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} /> */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            {/* <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* 4 */}
            {/* 4 */}
            {/* Rest Property for Props: */}
            <CoreConceptRestProperty {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            {/* children prop method */}
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            {/* attribute prop method */}
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {/* {selectedTopic} */}
          {tabContent}
        </section>
      </main>
    </div >
  );
}

export default Essentials

