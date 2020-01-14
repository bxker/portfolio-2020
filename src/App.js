import React from 'react';
import './App.css';
import routes from './routes'
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Nav />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
