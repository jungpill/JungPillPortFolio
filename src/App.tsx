import Main from '././pages/main/Main';
import Layout from './pages/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element ={
          <Layout>
            <Main/>
          </Layout>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
