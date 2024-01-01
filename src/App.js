import './App.css';
import Navbar from './components/nav';
import Hero from './components/hero';
import Card from './components/card';
import data from "./data"

function App() {
  const cards = data.map(cardItem => {
    
    return (
      <Card
        key = {cardItem.id}
        item = {cardItem} // can also be {...cardItem} 
      />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </>
    
  );
}

export default App;
