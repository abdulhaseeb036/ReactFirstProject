import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';



// class component
class App extends React.Component {
  render() {
    return (

      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}


export default App;


// this is called function component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }


// aik hota export deafault means k pury file may aik hi file improt krrha hy.
// or aik sirf export hota.