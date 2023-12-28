import React from 'react'

const Perg = (props) => {
  return (
        <div className="d-flex">

            <div className="d-flex aling-items-center">
                    <i className={props.icone}></i>
            </div> 
      
            <div class="input-group mb-3">
                <input type="number ms-3" class="form-control ms-2 p-2" placeholder={props.preenchimento}/>
            </div>
       
        </div>
)}

export default Perg