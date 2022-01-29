import './App.css';
import { Flowers } from './Flowers';
import { Add } from './Add';
import { Link, Route, Routes } from "react-router-dom";
import { Editbouquet } from './Editbouquet';
import { Bouquetdetail } from './Bouquetdetail';


export function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/bouquet">Bouquet</Link></li>
          <li><Link to="/newbouquet">Add New Bouquet</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/bouquet" element={<Flowers />}/>          
        <Route path="/newbouquet" element={<Add />}/>
           
        <Route path="/bouquet/edit/:id" element={<Editbouquet />}/>
          
        <Route path="/bouquet/detail/:id" element={<Bouquetdetail />}/>
          
        <Route exact path="/" element={<Flowers />}/>
          
      </Routes>


    </div>
  );
}