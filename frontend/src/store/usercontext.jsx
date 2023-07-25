import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext({ 
    userId: null,             
    updateUser: () => {},
    userProfileImage: null,
    updateUserProfileImage: () => {},
    userMessages: [],
    updateUserMessages: () => {},
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

 const [userMessages, setUserMessages] = useState(() => { 
  const storedUserMessage = sessionStorage.getItem("userMessages")
  return storedUserMessage !== null ? storedUserMessage : null;
 })

 const [userQuantityMessages, setUserQuantityMessages] = useState(() => { 
  const storedUserQuantityMessages = sessionStorage.getItem("userQuantityMessages")
  return storedUserQuantityMessages !== null ? storedUserQuantityMessages : null;
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

const updateUserMessages = (x) => { 
  setUserMessages(x)
  sessionStorage.setItem("userMessages", JSON.stringify(x))
}

const updateUserQuantityMessages = (x) => { 
  setUserMessages(x)
  sessionStorage.setItem("userQuantityMessages", x)
}

useEffect(() => {
    const handleStorageChange = (event) => {    
      if (event.key === 'userId') {            
        setUserId(event.newValue);
      } else if (event.key === 'userProfileImage') {            
        setUserProfileImage(event.newValue);
      } else if (event.key === 'userMessages') {            
        setUserMessages(event.newValue);
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
    <UserContext.Provider value={{ userId, updateUser, userProfileImage, updateUserProfileImage, userMessages, updateUserMessages, userQuantityMessages, updateUserQuantityMessages }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

          