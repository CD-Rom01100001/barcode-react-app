import { useRef, useState } from 'react';
import { ReactBarcode } from 'react-jsbarcode';
import { optionsBarcode } from './redux/data';
import Button from './components/button/Button';
import Textarea from './components/textarea/Textarea';
import OutField from './components/outField/OutField';
import './App.css';

function App() {
  const inRef = useRef()
  const [outState, setOuteState] = useState()
  const getBarcode = () => {
    setOuteState(
      inRef.current.value.split('\n').map((elem, i) =>
        <ReactBarcode
          value={elem}
          options={optionsBarcode}
          key={i} />
      )
    )
  }

  return (
    <div className="app">
      <Textarea refComp={inRef} />
      <Button funcComp={getBarcode} buttonName='Generate' />
      <OutField barcode={outState} />
    </div>
  );
}

export default App;
