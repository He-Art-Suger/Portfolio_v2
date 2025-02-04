import React from "react";
import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom'
import Header from "./Header";
import Footer from "./Footer";

import Home from './Home'
import Appeal from './Appeal'
import Dev from './Dev'
import Portfolio from './Portfolio'
import Products from './Products'
import Profile from './Profile'
import NotFound from './NotFound'

const App: React.FC = () => {
    return (
      <>
        <Background>
            <HeaderPosition>
                <Header/>
            </HeaderPosition>
            <BodyPosition>
                <BodyBackground>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Appeal" element={<Appeal />} />
                        <Route path="/Dev" element={<Dev />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        <Route path="/Products" element={<Products />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>                    
                </BodyBackground> 
            </BodyPosition>  
            <FooterPosition>
                <Footer/>
            </FooterPosition>
        </Background>
      </>
    );
};

const Background = styled(Box)({

})

const HeaderPosition = styled(Box)({
    position: 'sticky',
    top: '0px',
    zIndex: '2'
})

const BodyPosition = styled(Box)({
    position: 'relative',
    zIndex: '0'
})

const BodyBackground = styled(Box)({
    backgroundColor: '#eee'
})
    

const FooterPosition = styled(Box)({
    position: 'relative',
    zIndex: '1'
})
  
export default App;