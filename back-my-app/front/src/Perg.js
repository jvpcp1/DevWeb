import React from 'react'
import Guarda from './Guarda'

const Perg = (props) => {
  return (
        <div className="d-flex">

            <div className="d-flex aling-items-center">
                    <i className={props.icone}></i>
            </div> 
      
            <div class="input-group mb-3">
                <input type="number ms-3" className="form-control ms-2 p-2" placeholder={props.preenchimento}/>
                    <button 
                        className="btn btn-outline-secondary d-flex" 

                        type="button" id="button-addon2"
                        onClick={Guarda}>
                            Enviar Valor
                    </button>
                </div>          
            </div>
)}

export default Perg