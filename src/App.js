import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Explore Our Car Collection</h1>
        <p>
          Find your dream car from our wide range of high-quality vehicles.
        </p>
        <a
          className="App-link"
          href="#cars"
        >
          View Cars
        </a>
      </header>

      <section id="cars" className="App-cars">
        <h2>Featured Cars</h2>
        <div className="car">
          <img src="car1.jpg" alt="Car 1" />
          <h3>Model XYZ</h3>
          <p>Experience the thrill of driving our top-rated model.</p>
          <p>Price: $50,000</p>
        </div>
        <div className="car">
          <img src="car2.jpg" alt="Car 2" />
          <h3>Model ABC</h3>
          <p>Discover the elegance and style of our luxury model.</p>
          <p>Price: $80,000</p>
        </div>
        {/* Add more featured cars as needed */}
      </section>

      <section className="App-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or want to schedule a test drive, contact us.</p>
        <a
          className="App-link"
          href="tel:+1234567890"
        >
          Call Us
        </a>
        <a
          className="App-link"
          href="mailto:info@cardealership.com"
        >
          Email Us
        </a>
      </section>

      <footer className="App-footer">
        <p>&copy; 2024 Car Dealership. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
