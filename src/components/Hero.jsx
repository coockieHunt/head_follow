import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Welcome to My React App</h1>
        <p>A modern single page application built with React and Vite</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;