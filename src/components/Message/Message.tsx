import React from 'react';
import {MessageType} from "../../types";
import "./Message.css";

interface Props {
  message: MessageType;
}

const Message: React.FC<Props> = ({message}) => {
  return (
    <div className="message-box">
      <p className="color">Date: <span className="user-color">{message.datetime}</span></p>
      <p className="color">User name: <span className="user-color">{message.author}</span></p>
      <span className="color">Message:</span>
      <p><span className="user-color">{message.message}</span></p>
    </div>
  );
};

export default Message;