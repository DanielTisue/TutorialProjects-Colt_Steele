// Class Component Examples ===================================

// class Hello extends React.Component {
//   render() {
//     return <h1>Hello There!</h1>
//   }
// }

//ReactDOM.render(<Hello/>, document.getElementById('root'));

//=============================================================

// class Dog extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>Hello there Again!!!!</h1>
//         <h1>Hello there Again!!!!</h1>
//         <h1>Hello there Again!!!!</h1>
//       </div>
//     );
//   }
// }

//ReactDOM.render(<Dog/>, document.getElementById('root'));

// Function Components===========================================

function Hello(){
  return (
    <div>
      <h1>Hello there Again!!!!</h1>
      <h1>Hello there Again!!!!</h1>
      <h1>Hello there Again!!!!</h1>
    </div>
    
  );
}
ReactDOM.render(<Hello/>, document.getElementById("root"));