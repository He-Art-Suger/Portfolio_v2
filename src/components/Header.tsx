import React from "react";
import styled from "styled-components";
import TabTemp from './tools/TabTemp';

const Header: React.FC = () => {
    return (
      <>
        <Background>
          <Image src= '/He_Art.jpeg' />
          <Title src= '/portfolio_logo.png'/>
          <TabTemp
          tabTitle={["Home", "Appeal", "Dev", "Portfolio", "Products", "Profile"]}
          tabColor={"#00AE95"}
          />
        </Background>
      </>
    );
  };

const Background = styled.div`
    height: 5vw;
    width: 100vw;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
`;

const Title = styled.img`
    height: 80%;
    margin-left: 3%;
`;

const Image = styled.img`
    aspect-ratio: 1;
    border-radius: 50%;
    height: 80%;
    margin-left: 10%;
`;
  
export default Header;