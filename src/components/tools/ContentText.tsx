import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';

interface styleInfo {
    fontSize?: string;
}

interface marginstyleInfo {
    marginLeft?: string;
}

type TitleProps = {
    title: string;
    fontSize: string;
};

type TextProps = {
    text: string;
};

type TextBoxProps = {
    text: string;
    marginLeft: string;
};

export const LeftLineText: React.FC<TextProps> = (props) => {
    return (
        <div>
            <Flex>
                <LeftLine/>
                <TextStyle>{props.text}</TextStyle>
            </Flex>
        </div>
    );
}

const TextStyle = styled(Box)({
    width: '70%',
    fontSize: '16px',
    color: '#222222',
})

const LeftLine = styled(Box)({
    width: '7px',
    margin: '0 15px 0 5px',
    backgroundColor: '#00AE95',
})

const Flex = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 30px',
})



export const LeftLineTitle: React.FC<TitleProps> = (props) => {
    return (
        <div>
            <Flex>
                <LargeLeftLine/>
                <TitleStyle fontSize={props.fontSize}>{props.title}</TitleStyle>
            </Flex>
        </div>
    );
}

const TitleStyle = styled(Box)<styleInfo>((props) =>({
    width: '90%',
    fontSize: props.fontSize,
    fontWeight: 'bold',
    color: '#222222',
}))

const LargeLeftLine = styled(Box)({
    width: '10px',
    marginRight: '15px',
    backgroundColor: '#00AE95',
})



export const TextBox: React.FC<TextBoxProps> = (props) => {
    return (
        <div>
            <TextBoxStyle marginLeft={props.marginLeft}>{props.text}</TextBoxStyle>
        </div>
    );
}

const TextBoxStyle = styled(Box)<marginstyleInfo>((props) =>({
    /*width: '30vw',*/
    marginBottom: '30px',
    marginLeft: props.marginLeft,
    fontSize: '20px',
    whiteSpace: 'pre-line',
    color: '#222222',
}))