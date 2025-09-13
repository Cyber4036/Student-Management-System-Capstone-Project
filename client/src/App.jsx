import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentDetailPage from './pages/StudentDetailPage';
import AddStudentPage from './pages/AddStudentPage';
import EditStudentPage from './pages/EditStudentPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students/:id" element={<StudentDetailPage />} />
        <Route path="/add-student" element={<AddStudentPage />} />
        <Route path="/edit-student/:id" element={<EditStudentPage />} />
      </Routes>
    </Router>
  );
}

export default App;