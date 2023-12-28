import React from 'react'

const Perg = (props) => {
  return (
        <div className="d-flex">

            <div className="d-flex aling-items-center">
                    <i className={props.icone}></i>
            </div> 
      
            <div class="input-group mb-3">
                <input type="number ms-3" class="form-control ms-2 p-2" placeholder={props.preenchimento} aria-label="Enter a percentage" aria-describedby="button-addon2" step="0.01" min="-50" max="50" />
                <button class="btn btn-outline-secondary d-flex" type="submit" id="button-addon2">Enviar Valor</button>
            </div>
       
        </div>
)}

export default Perg