import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0)

  const [textoDoMeuInput, setTextoDoMeuInput] = useState('')

  const [tema, setTema] = useState("light")

  function mudarResultado(){
    setResult(eval(textoDoMeuInput))
  }

  function aoMudarInput(e){
    setTextoDoMeuInput(e.target.value)
  }

  function mudarTema(){
    setTema(tema === "light" ? "dark" : "light")
  }

  return (
    <div className={`${tema} container`}>
        <div className="eachRowItem leftSide">
            <div>
                <div className="title">
                    simple cal
                </div>
                <div id="buttonTheme" onClick={mudarTema}>
                    <i id="icon" className="fa fa-moon"></i>
                </div>
            </div>
            <input onChange={aoMudarInput} id="inputCalc" placeholder="25x10" />
            <button onClick={mudarResultado} className='buttonCalc'>Calcular</button>
            <div>*press enter to find out the total</div>
        </div>
        <div className="eachRowItem rightSide">
            <div>
                <div id="buttonThemeHistoric">
                    <i id="iconHistoric" className="fas fa-history"></i>
                </div>
            </div>
            <div id="resultCalc" className="resultText">{result}</div>
            <div id="historicDiv" className="historicList">
               
            </div>
            <div>→ view keyboard shortcuts</div>
        </div>
    </div>
  );
}

export default App;
