import React from 'react'

const feedback = (props) => {
  return (
    <div className='d-flex justify-content m-2'>
        <button 
            class="btn btn-outline-secondary d-flex" 
            type="button" id="button-addon2"
            onClick={props.guardaDado}>
                 Enviar Valor
        </button>
    </div>
  )
}

export default feedback