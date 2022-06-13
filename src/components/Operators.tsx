import { MouseEvent } from 'react';

import '../assets/Operators.css';

export default function Operators({ pressKey }: { pressKey: (e: MouseEvent) => void }) {
  return (
    <div id='operators'>
      {
        [['(', ')'], ['+ ', '-'], ['* ', '/'], ['% ', '=']]
          .map(group => group.map(op => <p onClick={pressKey} key={op}>{op}</p>))
      }
    </div>
  );
}
