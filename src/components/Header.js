import React from 'react';
import styled from 'styled-components';
import { Avatar } from "@material-ui/core";
import {AccessTime, HelpOutline, SearchOutlined} from "@material-ui/icons";

const Header = () => {
    return (
        <HeaderContainer>

            <HeaderLeft>
                <HeaderAvatar src="" />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <SearchOutlined />
                <input type="text" placeholder="Search"/>
            </HeaderSearch>

            <HeaderRight>
                <HelpOutline />
            </HeaderRight>

        </HeaderContainer>
    );
};

export default Header;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  padding: 0 50px;
  color: gray;
  border: 1px solid;
  text-align: center;
  display: flex;
  
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  display: flex;
  
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`



const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
