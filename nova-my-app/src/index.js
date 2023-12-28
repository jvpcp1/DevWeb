import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pergunta from './Pergunta'

const App = () => {
  return (
    <div>
      <div className="container border rounded mt-2">

        <div className="row">
          <div className="col-12">
            <div className='my-3'>
              <h1 className="display-5 text-center">Regra de Taylor</h1>
            </div>
          </div>
        </div>

      </div>

      <div className="container border rounded mt-2">
        <div className="row">

          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Pergunta
              titulo="Inflação Corrente"
              icone="fa-solid fa-money-bill-trend-up fa-2x fa-fade"
              preenchimento="IPCA 12m"
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Pergunta 
              titulo="PIB Corrente"
              icone="fa-solid fa-gears fa-2x fa-fade"
              preenchimento="PIB 12m"
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Pergunta 
              titulo="Meta de Inflação"
              icone="fa-solid fa-bullseye fa-2x fa-fade"
              preenchimento="IPCA Meta"
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Pergunta 
              titulo='PIB Potencial'
              icone='fa-solid fa-road-barrier fa-2x fa-fade'
              preenchimento='PIB Neutro'
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <Pergunta 
              titulo='Taxa de Juros Real Corrente'
              icone='fa-solid fa-percent fa-2x fa-fade'
              preenchimento='Taxa Real'
            />
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            
            <div className="card">
              <div className='card-header text-center'>Postura do BC</div>  
                <div className='card-body d-flex aling-items-center'>
                  <div className="btn-group aling-items-center ms-2" role="group" aria-label="Opções">
                    <button type="button" class="btn btn-primary">Dovish</button>
                    <button type="button" class="btn btn-secondary">Neutro</button>
                    <button type="button" class="btn btn-success">Hawkish</button>
                  </div>
                </div>      
              </div>
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