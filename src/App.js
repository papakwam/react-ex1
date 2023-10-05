import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';
import Card from './Components/Card';
import './Components/Card.css';
import Footer from './Components/Footer'; 
import './Components/Footer.css'; 
import Counter from './Components/Counter';
import './Components/Counter.css'; 


function App() {
  return (
    <div className='App'>
      <Navbar />

      <div>
        <img
          src='https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
          style={{ width: '100%', height: '10%',padding: '0px' }}
          alt='Website Header'
        />
      </div>

      <div>
        <h1>Welcome to My Website</h1>
        
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div>
  <Counter />
</div>


      
      <Footer />
    </div>
  );
}

export default App;
