import {useState} from "react";
import { Box, Typography, Tooltip } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    const [copySuccess, setCopySuccess] = useState('Copy Email');

    const copyToClipboard = async () => {
      await navigator.clipboard.writeText('shinshin1110.ss@gmail.com');
      setCopySuccess('Copied!');
    };

    const copyTextReset = () => {
      setCopySuccess('Copy Email');
    };

    return (
      <>
        <Background>
          <Title src= '/He_Art_Sign.png' />
          <Typography variant='h6' sx={{ color: '#555', textAlign: 'center', marginBottom: '70px' }}>
            # Frontend Engineer | # UI/UX | # AI | # ML | # NLP
          </Typography>
          <LinkFlex>
            <MyLink target="_blank" href="https://github.com/He-Art-Suger">
              <Tooltip title="Code" arrow placement="top" >
                <GitHubIcon sx={{ color: "black", fontSize: '48px', ':hover': {color: '#00AE95'} }} />
              </Tooltip>
            </MyLink>
            <MyLink target="_blank" href="https://he-art.hatenablog.com/">
              <Tooltip title="Blog" arrow placement="top" >
                <ArticleIcon sx={{ color: "black", fontSize: '48px', ':hover': {color: '#00AE95'} }} />
              </Tooltip>
            </MyLink>
            <EmailCopy onClick={copyToClipboard} onMouseEnter={copyTextReset} >
              <Tooltip title={copySuccess} arrow placement="top" >
                <EmailIcon sx={{ color: "black", fontSize: '48px', ':hover': {color: '#00AE95'} }} />
              </Tooltip>
            </EmailCopy>
          </LinkFlex>
        </Background>
      </>
    );
  };

const LinkFlex = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Background = styled(Box)({
    backgroundColor: 'white',
    paddingBottom: '30px',
    boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)'
});

const Title = styled('img')({
    width: '30%',
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '35%'
});

const MyLink = styled('a')({
  textDecoration: "none",
  margin: "0 30px",
});

const EmailCopy = styled(Box)({
  margin: "0 30px",
});
  
export default Footer;