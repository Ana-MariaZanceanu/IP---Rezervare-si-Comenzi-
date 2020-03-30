import React from "react";

const Hello = () => {
    // return(
    //     <div className="class">
    //         <h1>Hellooo!!!</h1>
    //     </div>
    // )
    return React.createElement('div',
        {id : 'hello', className : 'class'},
        React.createElement('h1',null,'I\'m happy')
    );
};

export default Hello