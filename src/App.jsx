import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'


 function App(){

               const[chatMessages,setChatMesssages] = useState([{
             message : "hello chatbot ",
             sender : "user",
             id:'id1'
        },
        {
              message : "Hello! How can I help you?" ,
              sender : "robot",
              id: "id2"
        },
        {
             message : "can you get me todays date?" ,
             sender : "user",
             id: "id3"
        },
        {
            message : "Today is Septempber 27", 
            sender : "robot",
            id:"id4"
        }] );
        // const[chatMessages , setChatMesssages]  = array;
        //or
      //  const chatMessages =  array[0]; 
      //  const setChatMesssages  = array[1];

        return (
            <div className = "app-container">
             
                <ChatMessages
                chatMessages = {chatMessages}
                />
                <ChatInput
                chatMessages = {chatMessages}
                setChatMessages = {setChatMesssages}
                />
          </div>
        );
      }

export default App
