import React from 'react';
import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';


function App() {
  return (
    <div className="app">
      <nav>
        <div className="nav__header">
          <div>Travelize</div>
          <p><i>My traveling experiences</i></p>
        </div>
        <div className="nav__link">
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
      <main>
          <img className="hero-background" src={ heroBackground } alt="hero-background" />
        <section>
          <div className="headshot__div"><img className="headshot" src={ headshot} alt="headshot"/></div>
          <article>
            <h2>A little about me</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing to make a type specimen book.  Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book. type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </article>
        </section>
      </main>
      <footer>
        <ul>
          <li>&copy; 2020 Travelize</li>
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
