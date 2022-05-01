import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

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

  return (
    <>
    <Nav 
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    />
    <main>
      <Gallery />
      <About />
    </main>
    </>
  );
}

export default App;
