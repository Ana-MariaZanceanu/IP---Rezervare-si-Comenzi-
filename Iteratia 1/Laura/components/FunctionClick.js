import React from 'react';

function FunctionClick() {
  function clickHandker() {
    console.log('Button Clicked');
  }
  return (
    <div>
      <button onClick={clickHandker}>Click</button>
    </div>
  );
}

export default FunctionClick;
