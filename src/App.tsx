import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import { CategoryProvider } from './data/CategoryContext'; // Import CategoryProvider

function App() {
  return (
    <CategoryProvider>
      {' '}
      {/* Wrap your app with CategoryProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route
            path="/category/:categoryId"
            element={<CategoryPage onBack={() => window.scrollTo(0, 0)} />}
          />
        </Routes>
      </Router>
    </CategoryProvider>
  );
}

export default App;
