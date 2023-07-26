import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,             
    updateUser: () => {},
    userProfileImage: null,
    updateUserProfileImage: () => {},
    userName: null,
    updateUserName: () => {},
    userQuantityMessages: [],
    updateUserQuantityMessages: () => {}      
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

 const [userName, setUserName] = useState(() => { 
  const storedUserName= sessionStorage.getItem("userName")
  return storedUserName!== null ? storedUserName: null;
 })

 const [userQuantityMessages, setUserQuantityMessages] = useState(() => { 
  const storedUserQuantityMessages = sessionStorage.getItem("userQuantityMessages")
  return storedUserQuantityMessages !== null ? storedUserQuantityMessages : null;
 })


const updateUser = (id) => {                   
    setUserId(id)
    sessionStorage.setItem('userId', id);     
};

const updateUserProfileImage = (x) => { 
    setUserProfileImage(x)
    sessionStorage.setItem("userProfileImage", x)
}

const updateUserName = (name) => { 
  setUserName(name)
  sessionStorage.setItem("userName", name)
}

const updateUserQuantityMessages = (x) => { 
  setUserQuantityMessages(x)
  sessionStorage.setItem("userQuantityMessages", x)
}

useEffect(() => {
    const handleStorageChange = (event) => {    
      if (event.key === 'userId') {            
        setUserId(event.newValue);
      } else if (event.key === 'userProfileImage') {            
        setUserProfileImage(event.newValue);
      } else if (event.key === 'userName') {            
        setUserName(event.newValue);
      } else if (event.key === 'userQuantityMessages') {            
        setUserQuantityMessages(event.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange); 
    return () => {
      window.removeEventListener('storage', handleStorageChange); 
    };
  }, []);

  return (
    <UserContext.Provider value={{ userId, updateUser, userProfileImage, updateUserProfileImage, userName, updateUserName, userQuantityMessages, updateUserQuantityMessages }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

          