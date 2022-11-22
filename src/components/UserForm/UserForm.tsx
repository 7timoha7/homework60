import React, {useState} from 'react';
import {MessageUserType} from "../../types";

interface Props {
  onSubmit: (userInf: MessageUserType) => void;
}

const UserForm: React.FC<Props> = (props) => {
  const [user, setUser] = useState<MessageUserType>({
    message: '',
    author: '',
  })

  const onChangeUserNameMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}))
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit(user);
  }

  return (
    <div className="UserForm">
      <form className="form" onSubmit={onFormSubmit}>
        <div>
          <div>
            <label htmlFor="author">User Name</label>
          </div>
          <input className="input-name" defaultValue={user.author} type="text" name="author" onChange={onChangeUserNameMessage}/>
        </div>
        <div>
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <input className="input-message" defaultValue={user.message} type="text" name='message' onChange={onChangeUserNameMessage}/>
        </div>
        <button className="btn-form">Submit</button>
      </form>

    </div>
  );
};

export default UserForm;