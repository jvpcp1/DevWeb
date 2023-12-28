import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Cartao from './Cartao'
import Perg from './Perg'

const App = () => {
  return (
    <div>
      <div className="container border rounded mt-2">

          </div>  <div className="row">
          <div className="col-12">
              <div className='my-3'>
                <h1 className="display-5 text-center">Regra de Taylor.</h1>
                <p className="text-center font-style: italic; font-size: 2px">Gerador de Ata de BC</p>
              </div>
            </div>
      
      </div>

      <div className="container border rounded mt-2">
        <div className="row">

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Cartao
              titulo="Inflação Corrente">
              <Perg
                icone="fa-solid fa-money-bill-trend-up fa-2x fa-fade"
                preenchimento="IPCA 12m"
              />
            </Cartao>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Cartao
              titulo="PIB Corrente">
              <Perg 
                icone="fa-solid fa-gears fa-2x fa-fade"
                preenchimento="PIB 12m"
              />
            </Cartao>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Cartao
              titulo="Meta de Inflação">
              <Perg 
                icone="fa-solid fa-bullseye fa-2x fa-fade"
                preenchimento="IPCA Meta"
              />
            </Cartao>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
           <Cartao
            titulo="PIB Potencial">
              <Perg 
                icone='fa-solid fa-road-barrier fa-2x fa-fade'
                preenchimento='PIB Neutro'
              />
           </Cartao>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Cartao
              titulo="Taxa de Juros Corrente">
              <Perg 
                icone='fa-solid fa-percent fa-2x fa-fade'
                preenchimento='Taxa Real'
              />
            </Cartao>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
              <Cartao
                titulo="Postura do Banco Central">
                <div className='card-body d-flex aling-items-center'>
                  <div className="btn-group aling-items-center ms-2" role="group" aria-label="Opções">
                    <button type="button" class="btn btn-primary">Dovish</button>
                    <button type="button" class="btn btn-secondary">Neutro</button>
                    <button type="button" class="btn btn-success">Hawkish</button>
                  </div>
                </div>      
              </Cartao>
            </div>  
            
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(
   <App />,
   document.querySelector('#root')
 )