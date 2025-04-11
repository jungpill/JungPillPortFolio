import Main from './pages/main/Main';
import Layout from './pages/Layout';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
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
