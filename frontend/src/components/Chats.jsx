import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"
import { useContext } from 'react'
import { UserContext } from '../store/usercontext'
import PruebaDeNav from "./PruebaDeNav"
import Sidebar from "./Sidebar"
import {Link} from "react-router-dom"


import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const Chats = () => {

  
function OffCanvasExample({ name, amount, image, idInterested, date, ...props }) {

  const [show, setShow] = useState(false);
  const [historyMessages, setHistoryMessages] = useState([])
  const [messagesReceived, setMessagesReceived] = useState([])
  const [response, setResponse] = useState("")
  const [messages, setMessages] = useState([ 
     { 
      name: name,
      amount: amount,
      image: image,
      date: date
     }
  ]);

 
  


  useEffect(() => { 
    axios.get(`/getConversations/${userCtx.userId}`)
         .then((res) => { 
          console.log(res.data)
          setHistoryMessages(res.data)
         })
         .catch(err => console.log(err))
  }, [])



  useEffect(() => { 
     console.log(historyMessages)
  }, [historyMessages])


//Funcion para obtener los mensajes recibidos 
  useEffect(() => { 
    axios.get(`/getMessagesReceived/${userCtx.userId}`)
    .then((res) => { 
     console.log("Mensajes por responder: " +   res.data)
     setMessagesReceived(res.data)
    })
    .catch(err => console.log(err))
  }, [])


  
  useEffect(() => { 
    console.log(messagesReceived)
 }, [messagesReceived])



  const handleSend = () => {
    if (response.trim() !== '') {
      const newMessage = {
        name: userCtx.userName, 
        date: getCurrentDate(), 
        amount: response,
        image: userCtx.userProfileImage,
        senderUser: userCtx.userId,
        userRecipient: idInterested
      }
      setMessages([...messages, newMessage]);
      setResponse('');
      axios.post("/sendMessage", newMessage)
           .then((res) => { 
            console.log(res.data)
           })
           .catch((err) => console.log(err))
      
    }
  };

 
function getCurrentDate() {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; 
  const año = fecha.getFullYear();

  return `${dia}/${mes}/${año}`;
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userCtx = useContext(UserContext)

  useEffect(() => { 
    axios.get(`/getMessages/${userId}`)
         .then((res) => { 
              console.log(res.data)
         })
         .catch((err) => console.log(err))
 }, [])


  return (
    <>

    
      <Button variant="primary" onClick={handleShow} className="btn btn-ghost btn-xs">Response</Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Chat with:  <b>{name}</b> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mb-[76px]">
                    {messages.map((m) => ( 
                          <div className="chat chat-start">
                          <div className="chat-image avatar">
                              <div className="w-10 rounded-full">
                                <img src={m.image} />
                                </div>
                          </div>
                          <div className="chat-header">
                              {m.name}
                              <time className="text-xs opacity-50">{m.date}</time>
                          </div>
                        <div className="chat-bubble">{m.amount} </div> 
                    </div>
                    ))}      
        
                {historyMessages.map((m) => {
                  if (m.userRecipient === idInterested) { // Aquí va la condición dentro del if
                    return (
                      <div className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img src={m.image} />
                          </div>
                        </div>
                        <div className="chat-header">
                          {m.name}
                          <time className="text-xs opacity-50">{m.date}</time>
                        </div>
                        <div className="chat-bubble">{m.amount} </div>
                      </div>
                    );
                  } else {
                    // Puedes retornar null si no quieres renderizar nada en el caso contrario
                    return null;
                  }
                })}
                 {messagesReceived.map((m) => {
                  if (m.senderUser === idInterested) { // Aquí va la condición dentro del if
                    return (
                      <div className="chat chat-start">
                        <div className="chat-image avatar">
                          <div className="w-10 rounded-full">
                            <img src={m.image} />
                          </div>
                        </div>
                        <div className="chat-header">
                          {m.name}
                          <time className="text-xs opacity-50">{m.date}</time>
                        </div>
                        <div className="chat-bubble">{m.amount} </div>
                      </div>
                    );
                  } else {
                    // Puedes retornar null si no quieres renderizar nada en el caso contrario
                    return null;
                  }
                })}
        </Offcanvas.Body>
        <Offcanvas.Body>
                <div className=" fixed bottom-1 ">
                  <div className="flex">
                  <textarea placeholder="Response" className="textarea border-2 bg-white textarea-lg w-full max-w-xs"  value={response} onChange={(e) => setResponse(e.target.value)}></textarea>
                  <button className="btn btn-info ml-4  bottom-1" onClick={handleSend}>Send</button>
                  </div>
                </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



    const userCtx = useContext(UserContext)
    const userId = userCtx.userId
    const [quantityMessages, setQuantityMessages] = useState(null)
    const [offerts, setOfferts] = useState([])
    const [wasDeleted, setWasDeleted] = useState(false)
    const [backMsj, setBackMsj] = useState("")
    const [logUser, setLogUser] = useState(false)
  
     
  
       function openModal() {
        window.my_modal_1.showModal();
      }
  
      useEffect(() => {
        if(userCtx.userId === null) { 
          setLogUser(true)
          setTimeout(() => { 
              openModal()
          }, 300)
        }
     }, [])

    const placements = ['start', 'end', 'top', 'bottom'];
     const onlyEndPlacement = 'end';
    

    useEffect(() => { 
       axios.get(`/getMessages/${userId}`)
            .then((res) => { 
                 console.log(res.data)
                 setOfferts(res.data)
                 setQuantityMessages(res.data.length)
                 setTimeout(() => { 
                  console.log(userCtx.userMessages)
                }, 1000)
            })
            .catch((err) => console.log(err))
    }, [])


    const deleteOfert = (id) => { 
       axios.delete(`/deleteOfert/${id}`)
            .then((res) => { 
              console.log(res.data)
              setWasDeleted(true)
              setBackMsj(res.data.message)
              userCtx.updateUserQuantityMessages(userCtx.quantityMessages - 1)

              setTimeout(() => { 
                window.location.reload()
              }, 1500)
            })
            .catch((err) => console.log(err))
    }

  

    useEffect(() => { 
       console.log(offerts)
    }, [offerts])

  return (
    <div>
      <PruebaDeNav/>
      <Sidebar/>

      {logUser ? <div>

<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">You are not Registered!</h3>
    <p className="py-4">You must have an account to receive messages</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"}><button className="btn">Create my Account</button></Link>
 
    </div>
  </form>
</dialog>
        </div> : null}



      

      



      <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
             <b>¡Congratulations! </b>You are getting closer to seeing your Vehicle!
            </h1>
            <p className="mt-6 text-sm leading-8 text-gray-600">
            The offers you accept will allow you to interact with the potential buyer..
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              
            </div>
          </div>
     
          

      <div className="overflow-x-auto">
  <table className="table w-[100vh] mt-[10vh]">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Vehicle</th>
        <th>Offert </th>
        <th>Date</th>
        <th>Quantity Offerts: {offerts.length}</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       {offerts.map((of) =>  { 
           return ( 
                  <tr key={of._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={of.interestedImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{of.interested}</div>   
                          
                      </div>
                    </div>
                  </td>
                  <td>
                   {of.vehicle}
                    <br/>
                
                  </td>
                  <td>{of.amount} USD</td>
                  <td>{of.date}</td>
                  <th>
                     <> <OffCanvasExample name={of.interested} idInterested={of.interestedId} amount={of.amount} date={of.date} image={of.interestedImage} placement={onlyEndPlacement} /> </>
                    <button className="btn btn-ghost btn-xs" onClick={() => deleteOfert(of._id)}>Reject</button>
                  </th>
                </tr>
            )
       })}

     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr >
       <p >Go Main</p>
      </tr>
    </tfoot>
    
  </table>
</div>    

         
         
    </div>
  )
}

export default Chats
