import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core";
import db, {auth} from "../firebase";
import firebase from "firebase";
import {useCollection} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

const ChatInput = ({channelName, channelId, chatRef }) => {

    // const inputRef = useRef(null);
    const [input, setInput] = useState();

    const [user] = useAuthState(auth);


    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }


        db.collection('rooms').doc(channelId).collection("messages").add({
            // the current point input ref is pointing, and then the item value
           message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth",
        });

        setInput("");

    };

    return (
        <ChatInputContainer>
            <form action="">
                <input value={input} onChange={event => setInput(event.target.value)} type="text" placeholder={`Message #${channelName}`}/>
                <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </ChatInputContainer>
    );
};

export default ChatInput;


const ChatInputContainer = styled.div`
  border-radius: 20px;
  
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  
  > form > button {
    display: none !important;
  }
`;
