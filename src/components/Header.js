import React from 'react';
import styled from 'styled-components';
import { Avatar } from "@material-ui/core";
import {AccessTime} from "@material-ui/icons";

const Header = () => {
    return (
        <HeaderContainer>

            <HeaderLeft>
                <HeaderAvatar src="" />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>

            </HeaderSearch>

            <HeaderRight>

            </HeaderRight>

        </HeaderContainer>
    );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  display: flex;
  
  .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  
`

const HeaderSearch = styled.div`
  
`;

const HeaderRight = styled.div`
  
`;
