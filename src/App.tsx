import { MouseEvent, useState } from 'react';

import History from './components/History';
import Numbers from './components/Numbers';

import './assets/App.css';
import Display from './components/Display';
import Operators from './components/Operators';

function App() {
  const [expression, setExpression] = useState('0');

  const calculate = () => {
    const tokens = expression.split(' ');
    let answer = parseFloat(tokens.shift() as string);
    return answer;
  }

  const pressKey = (e: MouseEvent) => {
    const value = (e.target as HTMLParagraphElement).innerText;
    if (Number.isInteger(+value)) {
      if (parseInt(expression) === 0) {
        setExpression(() => value);
      } else {
        setExpression((prev) => prev + value);
      }
    } else {
      if (expression === '0') {
        return;
      } else if (Number.isInteger(+expression.charAt(expression.length - 1))) {
        setExpression((prev) => prev + value);
      } else {
        setExpression((prev) => {
          return prev.substring(0, prev.length - 1) + value;
        })
      }
    }
  };

  return (
    <>
      <main>
        <h1>WASM Calculator</h1>
        <div id='calculator'>
          <Display expression={expression} calculate={calculate} />
          <div id='options'>Options</div>
          <Numbers pressKey={pressKey} />
          <Operators pressKey={pressKey} />
        </div>
      </main>
      <History />
    </>
  );
}

export default App;
