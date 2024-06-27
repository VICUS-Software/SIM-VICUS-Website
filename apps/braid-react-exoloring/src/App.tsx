import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'braid-design-system/reset';
import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider, Text } from 'braid-design-system';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


        <BraidProvider theme={apacTheme}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        </BraidProvider>

    </>
  )
}

export default App
