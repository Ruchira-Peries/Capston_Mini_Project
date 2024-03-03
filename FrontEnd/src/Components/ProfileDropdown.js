// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProfileDropdown = () => {
//   const [profilePic, setProfilePic] = useState('');

//   useEffect(() => {
//     fetchProfilePic();
//   }, []);

//   const fetchProfilePic = async () => {
//     try {
//       const response = await axios.get('http://localhost:5001/getProfilePic');
//       setProfilePic(response.data.profilePic);
//     } catch (error) {
//       console.error('Error fetching profile picture:', error);
//     }
//   };

//   return (
//     <div className="profile-dropdown">
//       <img src={profilePic} alt="Profile" className="profile-icon" />
//       <div className="dropdown-content">
//         <a href="/profile">Profile</a>
//         <a href="/settings">Settings</a>
//         <a href="/logout">Logout</a>
//       </div>
//     </div>
//   );
// };

// export default ProfileDropdown;
