import React from 'react';

const Hello = () => {
   
    return React.createElement(
        'div',
        { id: 'Hello', className: 'dummyClass' },
        React.createElement('h1', null, "Hello Jhon")
    )
}

export default Hello;