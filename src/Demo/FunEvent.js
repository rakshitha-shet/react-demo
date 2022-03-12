import React from 'react'

function FunEvent() {
    function clickHandler(){
        console.log('function event clicked ===>');
    };

  return (
      <>
        <div>FunEvent</div>
        <button onClick={clickHandler}>Fun Click</button>
      </>
    
  );
}

export default FunEvent