import React, {useRef} from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core";
import db from "../firebase";
import firebase from "firebase";

const ChatInput = ({channelName, channelId }) => {

    const inputRef = useRef(null);

    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }


        db.collection('rooms').doc(channelId).collection("messages").add({
            // the current point input ref is pointing, and then the item value
           message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        });
    };

    return (
        <ChatInputContainer>
            <form action="">
                <input ref={inputRef} type="text" placeholder={`Message #${channelId}`}/>
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
