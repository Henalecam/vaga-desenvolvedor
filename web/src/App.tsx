import { Outlet } from 'react-router-dom'

import Navbar  from './components/Navbar'

import './App.css'


function App() {
  function handleSubmit(event: any) {
    event.preventDefault()
    const texto = document.getElementById('texto') as HTMLInputElement
    const content = texto.value
    const filho = document.createElement('p')
    filho.innerHTML = content
    const pai = document.querySelector('.Pai') as HTMLInputElement
    pai.appendChild(filho)
  }
  return (
    <>
        <Navbar />
      <div className="App">
        <textarea name="texto" placeholder='Escreva Aqui' id="texto" cols={30} rows={10} ></textarea>
        <button onClick={handleSubmit}>Enviar</button>
      </div>
      <div className="Pai">
        </div>
      <Outlet />
    </>
  )
}

export default App
