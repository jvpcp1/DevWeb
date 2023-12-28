import React from 'react'

const Pergunta = (props) => {
  return (
    <div className="card">
        <div className='card-header text-center'>{props.titulo}</div>
                <div className='card-body d-flex aling-items-center'>
                <i className={props.icone}></i>
                <div class="input-group mb-3">
            <input type="number ms-3" class="form-control ms-2 p-2" placeholder={props.preenchimento} aria-label="Enter a percentage" aria-describedby="button-addon2" step="0.01" min="-50" max="50" />
            <button class="btn btn-outline-secondary d-flex" type="submit" id="button-addon2">Submeter Valor</button>
            </div>
        </div>
    </div>
 
)}

export default Pergunta