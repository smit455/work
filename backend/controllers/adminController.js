// adminController.js
const predefinedAdmin = {
    username: 'admin', // Predefined admin username
    password: 'admin123', // Predefined admin password
  };
  
  const loginAdmin = (req, res) => {
    const { username, password } = req.body;
  
    // Compare with predefined admin credentials
    if (username === predefinedAdmin.username && password === predefinedAdmin.password) {
      res.status(200).json({ message: 'Login successful!', token: 'admin-token' }); // Send token or confirmation
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  };
  
  module.exports = {
    loginAdmin,
  };
  