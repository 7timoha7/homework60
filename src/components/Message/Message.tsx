import React from 'react';
import {MessageType} from "../../types";
import "./Message.css";

interface Props {
  message: MessageType;
}

const Message: React.FC<Props> = ({message}) => {

  const date: string = message.datetime.slice(0, 10) + ' / ' + message.datetime.slice(11, 19);

  return (
    <div
      className="message-box">
      <p
        className="color"
      >Date: <span
        className="user-color"
      >{date}
      </span></p>
      <p
        className="color"
      >User name: <span
        className="user-color"
      >{message.author}
      </span></p>
      <span
        className="color"
      >Message:
      </span>
      <p className="user-message"><span
        className="user-color"
      >{message.message}
      </span></p>
    </div>
  );
};

export default Message;