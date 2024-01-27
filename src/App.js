import MapComponent from './component/MapComponent';
import ShowComponent from './component/ShowComponent';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './App.css';


function App() {
  // Get data from MongoDB.
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('http://localhost:3000/api/items')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="App">
      {/* Router */}
      <Router>
        <div>
          <Routes>
            <Route path="/show" element={<div>
              <header className="App-header">
              <Link to="/">Return</Link>
              </header>
              <ShowComponent items={items}/>
              </div>} />
            <Route path="/" element={<div>
              {/* header */}
              <header className="App-header">
                {"National Park Search Website"}
                {<Link to="/show">Show the National Park List </Link>}
              </header>
              {/* MapComponent */}
              <main>
              <MapComponent locations={items}/>
              </main>
            </div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;