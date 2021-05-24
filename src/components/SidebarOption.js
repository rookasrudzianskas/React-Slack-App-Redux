import React from 'react';
import styled from "styled-components";
import db from "../firebase";
import {useCollection} from "react-firebase-hooks/firestore";
import {useDispatch} from "react-redux";
import {enterRoom} from "../features/appSlice";


const SidebarOption = ({Icon, title, addChannelOption, id}) => {
    const dispatch = useDispatch();
// accessing channel rooms

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name");

        if(channelName) {
            db.collection("rooms").add({
              name: channelName,
            });
        }
    };

    const selectChannel = () => {
      if(id) {
          /// this is action in reducer
          // it fires action in reducer, and as the payload comes roomID
          dispatch(enterRoom({
              roomId: id,
          }))
      }
    };


    return (
        <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>


            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
             <SidebarOptionChannel>
                 <span>#</span> {title}
             </SidebarOptionChannel>
            )
            }
        </SidebarOptionContainer>
    );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  transition: all 0.1s;
  
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  
  > h3 {
    font-weight: 500;
  }
  
  > h3 > span {
    padding: 15px;
  }
`

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`

































