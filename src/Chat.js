import React, { useEffect, useState } from 'react';
import firebase, { auth } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const ChatRoom = () => {
  const messagesRef = firebase.collection("messages");
  const query = messagesRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData(query, {idField:'id'});

  const [formValue, setFormValue] = useState('');

  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text:formValue,
      createAt:firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
  }

  useEffect(() => {
    dummy.current.scrollIntoView({behavior:'smooth'});

  },[messages]);

  return (<>
    <main>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message = {msg} />)}
      <span ref={dummy}></span>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type somthing here... " />
      <button type="submit" disabled={!formValue}>Send</button>
    </form>
   </> )
}

export const ChatMessage= (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid? 'sent': 'received';

  return(
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  )
}