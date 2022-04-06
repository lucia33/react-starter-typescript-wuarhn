import React from 'react';

import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';

// import { cerButtonBasic } from "./button/button";
// import { cerButtonBasic } from "@platform/foundation";
// import { cerButtonBasic } from 'demo-fast-foundation-extended';

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const FastCard = wrap(fastCard());
export const FastButton = wrap(fastButton());
// export const TestCerButtonBasic = wrap(cerButtonBasic());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FastCard>
        <h2>FAST React</h2>
        <FastButton appearance="accent" onClick={() => console.log('clicked')}>
          Click Me
        </FastButton>
        {/* <TestCerButtonBasic appearance="accent">test</TestCerButtonBasic> */}
      </FastCard>
    </div>
  );
}

export default App;
