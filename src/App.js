import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
      {
          name: "commercial",
          description:"photos of grocery stores, food trucks, and other commercial products",
      },
      {
          name: "portraits",
          description: "Portraits of people in my life" 
      },
      {
          name: "food", 
          description: "Delicious delcacies"
      },
      {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature"
      }
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false)

  return (
    <>
    <Nav 
    categories={categories}
    // send category state props(ie getter and setter)
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    // send contact state props (ie getter and setter)
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}
    />
    <main>
      {!contactSelected ? (
        <>
          <Gallery currentCategory={currentCategory} />
          <About />
        </>
      ): (
        <ContactForm />
      )
      }
    </main>
    </>
  );
}

export default App;
