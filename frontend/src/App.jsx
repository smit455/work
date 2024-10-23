import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserForm from './components/form'; // Import your User Form component
import AdminDashboard from './components/admin'; 
const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserForm />} /> {/* Route for User Form */}
          <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Dashboard route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
