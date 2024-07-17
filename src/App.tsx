import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {

  return (
    <>
      <div>
        <h1>Testing</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>

            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
