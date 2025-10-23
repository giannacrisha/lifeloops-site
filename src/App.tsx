import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./components/HomePage";
import { ErrorPage } from "./components/ErrorPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}