import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,             
    updateUser: () => {},    
});


const UserProvider = ({ children }) => {    
                    
const [userId, setUserId] = useState(() => {          
     const storedUserId = sessionStorage.getItem('userId');
     return storedUserId !== null ? storedUserId : null;    
 });


const updateUser = (id) => {                   
    console.log("aca estoy ")
    setUserId(id)
    sessionStorage.setItem('userId', id);     
};

useEffect(() => {
    const handleStorageChange = (event) => {    
      if (event.key === 'userId') {            
        setUserId(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange); 
    return () => {
      window.removeEventListener('storage', handleStorageChange); 
    };
  }, []);

  return (
    <UserContext.Provider value={{ userId, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

          