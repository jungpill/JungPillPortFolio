import Main from './pages/main/Main';
import Layout from './pages/Layout';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Alert from './component/Alert';

function App() {
  return (
    <HashRouter>
      <Alert/>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
