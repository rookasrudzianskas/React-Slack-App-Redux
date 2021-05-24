import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core";
import db from "../firebase";
import firebase from "firebase";
import {useCollection} from "react-firebase-hooks/firestore";

const ChatInput = ({channelName, channelId }) => {

    // const inputRef = useRef(null);
    const [input, setInput] = useState();


    const sendMessage = (e) => {
        e.preventDefault();

        if(!channelId) {
            return false;
        }


        db.collection('rooms').doc(channelId).collection("messages").add({
            // the current point input ref is pointing, and then the item value
           message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: "Rokas Rudzianskas",
            userImage: 'https://pbs.twimg.com/profile_images/1350895249678348292/RS1Aa0iK.jpg',
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
