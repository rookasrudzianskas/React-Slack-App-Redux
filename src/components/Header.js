import React from 'react';
import styled from 'styled-components';
import { Avatar } from "@material-ui/core";

const Header = () => {
    return (
        <HeaderContainer>

            <HeaderLeft>
                <HeaderAvatar />
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
  
`;

const HeaderLeft = styled.div`
  
`;

const HeaderAvatar = styled(Avatar)`
  
`

const HeaderSearch = styled.div`
  
`;

const HeaderRight = styled.div`
  
`;
