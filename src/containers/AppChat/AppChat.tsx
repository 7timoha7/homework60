import React, {useEffect, useState} from 'react';
import {MessageType, MessageUserType} from "../../types";
import UserForm from "../../components/UserForm/UserForm";
import Message from "../../components/Message/Message";
import "./AppChat.css";

const url = "http://146.185.154.90:8000/messages";

let lastDateUrl = '';

const AppChat = () => {

  const [messagesAll, setMessageAll] = useState<MessageType[]>([])

  const firstListMessage = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const message: MessageType[] = await response.json();
      lastDateUrl = `http://146.185.154.90:8000/messages?datetime=${message[message.length - 1].datetime}`;
      setMessageAll(message)
    }
  }

  useEffect(() => {
    firstListMessage().catch(console.error);
    setInterval(async () => {
      try {
        const urlNew = await fetch(lastDateUrl);
        const response: MessageType [] = await urlNew.json();
        if (response.length) {
          setMessageAll(prev => ([...prev, ...response]));
          lastDateUrl = `http://146.185.154.90:8000/messages?datetime=${response[response.length - 1].datetime}`;
        }
      } catch (e) {
        console.log('error', e)
      }
    }, 3000);
  }, []);

  const userFormSubmit = async (userInf: MessageUserType) => {
    try {
      const body = new URLSearchParams();
      body.set('message', userInf.message);
      body.set('author', userInf.author);
      await fetch('http://146.185.154.90:8000/messages', {method: 'POST', body});
    } catch (e) {
      console.log('error', e)
    }
  }

  return (
    <div className="AppChat">
      <UserForm onSubmit={userFormSubmit}/>
      <div className="message-reverse-box">
        {messagesAll.map((item) => {
          return <Message message={item} key={item._id}/>
        })}
      </div>
    </div>
  );
};

export default AppChat;