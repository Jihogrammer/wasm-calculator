import '../assets/Display.css';

export default function Display(props: { expression: string, calculate: () => number}) {
  return (
    <div id='display'>
      <p id='expression'>{props.expression}</p>
      <p id='result'>= {props.calculate()}</p>
    </div>
  );
}
