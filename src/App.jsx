import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './components/home/Homepage.jsx';
import Order from './components/order/Order.jsx';
import PageNotFound from './components/page-not-found/PageNotFound.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
