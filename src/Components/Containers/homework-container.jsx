import React from 'react'

const Homeworkcontainer = () => {
  return (
    <div className="homework">
    
           <div className="input-text-box-white input-div h-16-semi color-primary  ">
               <p>Q.1 When will I have access to the lectures and assignments ?</p> 
               <div className="input-div">
             <input
               type="text"
               placeholder='Your answer here.....'
               className="input-text-box  color-primary h-20-bold"
             ></input>
             
           </div>
           <div className="submit-btn-div">
         <button
           type="button"
           className="secondary-btn  color-pure   h-20-semi "
         >
         Submit
         </button>
       </div>
           </div>
          
    </div>
  )
}

export default Homeworkcontainer