import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { worker } from "./mocks/browser.js";


async function enableMocking() {
  return worker.start()
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})



