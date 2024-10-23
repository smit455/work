import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel styling
import './AdminDashboard.css'; // Import custom CSS file

const renderArrowPrev = (onClickHandler) => (
    <button className="carousel-arrow left-arrow" onClick={onClickHandler}>
      &lt; {/* Left Arrow */}
    </button>
  );
  
  const renderArrowNext = (onClickHandler) => (
    <button className="carousel-arrow right-arrow" onClick={onClickHandler}>
      &gt; {/* Right Arrow */}
    </button>
  );

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://repo-xb9j.onrender.com/api/v1/getuser');
        setUsers(response.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="main">
        <div className="admin-dashboard">
      <h2 className="h2">Admin Dashboard</h2>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user._id} className="user-card">
            <h3 className="user-name">Name : {user.name}</h3>
            <p className="social-media-handle">socialMediaHandle : {user.socialMediaHandle}</p>
            <p className="total-images">Total Images: {user.images.length}</p> {/* Display total images */}
            <div className="image-carousel">
              {user.images.length > 0 ? (
                <Carousel
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={3000}
                  showStatus={false}
                  renderArrowPrev={renderArrowPrev}
                  renderArrowNext={renderArrowNext}
                >
                  {user.images.map((image, index) => (
                    
                    <div key={index}>
                      <img src={image} alt={`User upload ${index + 1}`} className="carousel-image" />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>No images uploaded.</p>
              )}
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
