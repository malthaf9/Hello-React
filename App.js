/* 
<div class='parent'>
  <div class='child'>
    <h1 id='head'>I am h1 tag<h1>
    <h2>I am h2 tag</h2>
  </div>
</div>
*/

const parent = React.createElement( 
    'div',  {className: 'parent'}, 
 React.createElement('div', {className: 'child'}, [
 React.createElement( 'h1',  {id: 'head'},'I am a h1 tag'), React.createElement( 'h2', {}, 'I am a h2 tag')
    ])
     )

console.log(parent);     



/*const heading =  React.createElement(
    'h1', 
    {id : "heading"}, 
    'Hello-React from React'
); // this is for creating a element in react */

const root = ReactDOM.createRoot(document.getElementById('root')); // this is for getting element from root

root.render(parent);