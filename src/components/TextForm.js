import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState(' ');

    const handleUpClick = () => {
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase!!','success');
      }

    const handleLoClick = () => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase!!','success');
    }

    const handleClearClick = () => {
        let newText=" ";
        setText(newText);
        props.showAlert('clear text!!','success');
    }
    
    const handleExtraSpace = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
          
    }
        

    const handleOnChange = (event) => {
        // console.log('on change');
        setText(event.target.value);
      
    }



  return (
    <>
    <div className='container'>
       <h2 className= {`text-${props.mode==='light'? 'dark':'light'}`}>{props.heading}</h2>   
<div className="mb-3 my-3">
  <label htmlFor="myBox" className={`form-label mr-3 text-${props.mode==='light'? 'dark':'light'}`} >Enter your text Here </label>

  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#212529':'white', color:props.mode==='light'? 'black':'white' }} id="myBox" rows="8"></textarea>
</div>
    
    <button className=' btn btn-primary mx-2' onClick={handleUpClick}>convert to uppercase</button>

    <button className=' btn btn-primary' onClick={handleLoClick}>convert to lowercase</button>

    <button className=' btn btn-primary mx-2' onClick={handleClearClick}>clear</button>

    <button className=' btn btn-primary mx-2' onClick={handleExtraSpace}>Extraspace</button>

   </div>

   <div className="container my-2">
    <h3 className= {`text-${props.mode==='light'? 'dark':'light'}`}>your text summary</h3>
    <p className= {`text-${props.mode==='light'? 'dark':'light'}`}>{text.split(" ").length} words and {text.length} charecters</p>
   </div>

    </>
  )
}

export default TextForm;