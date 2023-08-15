import { useState } from 'react';
import './index.scss';

function Carro() {
  const[valor, setValor]=useState('')
  const[parcela, setParcela]=useState('')
  const[juros, setJuros]=useState('')
  const[vtotal, setVtotal]=useState(0)
  const[jparcela, setJparcela]=useState(0)


  function Calculo(){


    let b = Number(valor)

    for(let i = 1; i <= parcela; i++){
      let x = (b * juros) / 100; 
      let c = b + x;
      b = c
     }

     let v = b / parcela;

     setJparcela(v.toFixed(2))
     setVtotal(b.toFixed(2))
      
  }


  return (
    <div className="pagina-compra">
        <div className='cab'>
          <img src='/assets/image/logo.png'/>
          <p>Portifolio.me</p>
        </div>


        <h1>Simulador de Compra de Veículo</h1>

        <div className='card'>
           
              <div className='carro'>
                <img src='assets/image/carro 2.png'/>
              </div>

              <div className='valor'>
                  <p>Valor Total</p>
                  <input type='number' value={valor} onChange={e => setValor(e.target.value)}/>

                  <div className='inputs'>
                      <div>
                        <p>Parcelas</p>
                        <input className='i' type='number' value={parcela} onChange={e => setParcela(e.target.value)}/>
                      </div>

                      <div>
                        <p>Juros Mensal (%)</p>
                        <input  type='number' value={juros} onChange={e => setJuros(e.target.value)}/>
                      </div>
                      
                  </div>
                  <button onClick={Calculo}>Calcular</button>
                  <p>Parcela: {jparcela}</p>
                  <p>Valor total: {vtotal}</p>
              </div>
        </div>

    </div>
  );
}

export default Carro;


