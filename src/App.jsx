import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <Calc />
      </div>
    </>
  )
}

function Calc() {
  return(
    <div className="calc">
      <Head />
      <Screen />
      <Process />
    </div>
  )
}

function Head() {
  return(
    <div className="head">
    <h4>calc</h4>
    <div className="mode">
      <p>TEMA</p>
      <div className="choice">
        <div className="choice-number">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <button className="btn-tema"><a href="/acikrenk.html"><img src="/images/Oval.svg" alt="Oval"/></a></button>
      </div>
    </div>
  </div>
  )
}

function Screen() {
  return(
    <div className="screen">
      <h1></h1>
    </div>
  )
}

function Process() {
  return(
    <div className="process-mathematically">
      <div className="process">
        <button className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn btn-del">DEL</button>
        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn plus">+</button>
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn mines">-</button>
        <button className="btn dot">.</button>
        <button className="btn">0</button>
        <button className="btn slash">/</button>
        <button className="btn multiplication">*</button>
      </div>


      <div className="process-end">
        <a  className="sifirlama" href="#">RESET</a>
        <a  className="esittir" href="#">=</a>
      </div>

    </div>
  )
}


export default App
