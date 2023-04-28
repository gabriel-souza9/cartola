import { useEffect, useState } from 'react'
import service from './service'
import './App.css'
import imgcartola from '../public/Cartola FC.svg'

function App() {
  const [atletas, setAtletas] = useState([])
  
  
  useEffect(() => {
    if(atletas.length === 0){
      service().getMercado()
      .then((response) => {
        setAtletas(response?.atletas)
      })
    }
    console.table(atletas)
    
  },[])

  return (
    <div className='app'>
      <header className='header'>
       <img src={imgcartola} alt="" />
      </header>

      <table className='table'>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Image</td>
          </tr>
        </thead>

        {/* <tbody>
          {atletas.map((jogador, index) => (
            <tr key={index}>
              <td>
                {jogador.slug}
              </td>
              <td>
                <img height={30} src={jogador.foto} alt="" />
              </td>
            </tr>
          ))}
        </tbody> */}

      </table>
    </div>
  )
}

export default App
