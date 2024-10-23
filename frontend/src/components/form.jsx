import { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Importing ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toastify
import './UserForm.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name) {
      toast.error('Name is required.'); // Show toast for missing name
      return;
    }
    if (!socialMediaHandle) {
      toast.error('Social Media Handle is required.'); // Show toast for missing social media handle
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);
    Array.from(images).forEach((image) => {
      formData.append('images', image);
    });

    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post('https://repo-xb9j.onrender.com/api/v1/newuser', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Response:', response);
      if (response.status === 201) {
        toast.success('User submitted successfully!'); // Show success notification

        // Reset form fields
        setName('');
        setSocialMediaHandle('');
        setImages([]); // Clear images array
        fileInputRef.current.value = null; // Clear the file input visually
      }
    } catch (err) {
      if (err.response) {
        console.error('Error response:', err.response);
        if (err.response.status === 409) {
          toast.error('User with this social media handle already exists.'); // Specific toast for conflict
        } else {
          toast.error(`Failed to submit user: ${err.response.data.message || err.response.statusText}`);
        }
      } else if (err.request) {
        console.error('No response from server:', err.request);
        toast.error('No response from server.'); // Show no response notification
      } else {
        console.error('Error:', err.message);
        toast.error('An error occurred.'); // Show general error notification
      }
    }
  };

  return (
    <div className="form-container">
      {/* Left Side Image */}
      <div className="image-side">
        <img src='/a.jpg' alt="Decorative" className="side-image" />
      </div>
      {/* Right Side Form */}
      <div className="form-side">
        <Link to="/admin" className="link">Go to Admin Dashboard</Link>

        <h2 className="title">Submit Your Info</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Social Media Handle:</label>
            <input
              type="text"
              value={socialMediaHandle}
              onChange={(e) => setSocialMediaHandle(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="form-group">
            <label className="label">Upload Images:</label>
            <input
              type="file"
              multiple
              ref={fileInputRef} // Assign ref to the file input
              onChange={handleImageChange}
              required
              className="input"
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} /> {/* Toast container */}
    </div>
  );
};

export default UserForm;
