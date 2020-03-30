import React from 'react';

const Greet = ({ name, superhero }) => {
  return (
    <div>
      <h1>
        Hello {name} aka {superhero}
      </h1>
    </div>
  );
};

export default Greet;
