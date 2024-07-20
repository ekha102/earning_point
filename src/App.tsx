import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './Components/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeLayout from './Components/Home/HomeLayout';

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeLayout/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
