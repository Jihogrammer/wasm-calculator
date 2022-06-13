import { MouseEvent } from "react";

import '../assets/Numbers.css';

export default function Numbers({ pressKey }: { pressKey: (e: MouseEvent) => void }) {
  return (
    <div id='numbers'>
      {
        [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['.', '0', '00']]
          .map(group => group.map(number => <p onClick={pressKey} key={number}>{number}</p>))
      }
    </div>
  );
}
