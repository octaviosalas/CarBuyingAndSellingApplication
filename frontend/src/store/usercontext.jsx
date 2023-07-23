import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,             
    updateUser: () => {},
    userProfileImage: null,
    updateUserProfileImage: () => {}    
});


const UserProvider = ({ children }) => {    
                    
const [userId, setUserId] = useState(() => {          
     const storedUserId = sessionStorage.getItem('userId');
     return storedUserId !== null ? storedUserId : null;    
 });

 const [userProfileImage, setUserProfileImage] = useState(() => { 
      const storedUserProfileImage = sessionStorage.getItem('userProfileImage');
     return storedUserProfileImage !== null ? storedUserProfileImage : null;    
 })


const updateUser = (id) => {                   
    console.log("aca estoy ")
    setUserId(id)
    sessionStorage.setItem('userId', id);     
};

const updateUserProfileImage = (x) => { 
    setUserProfileImage(x)
    sessionStorage.setItem("userProfileImage", x)
}

useEffect(() => {
    const handleStorageChange = (event) => {    
      if (event.key === 'userId') {            
        setUserId(event.newValue);
      } else if (event.key === 'userProfileImage') {            
        setUserProfileImage(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange); 
    return () => {
      window.removeEventListener('storage', handleStorageChange); 
    };
  }, []);

  return (
    <UserContext.Provider value={{ userId, updateUser, userProfileImage, updateUserProfileImage }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

          