import { expect, test } from 'vitest';
import ReactDOMServer from 'react-dom/server'; 
import App from './src/App';  

test('renders hello world', () => {
  const result = ReactDOMServer.renderToString(<App/>)
  console.log(result)
  expect(result).toContain('hello world!')
});
