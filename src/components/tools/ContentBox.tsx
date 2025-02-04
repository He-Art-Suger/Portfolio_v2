import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { HeightMargin } from "./Margin";
import { LeftLineTitle, TextBox } from "./ContentText";

type MainContentProps = {
    children: React.ReactNode;
    mainWidth: string;
    mainHeight: string;
    title: string;
};

type MainContent2Props = {
    mainWidth: string;
    mainHeight: string;
    marginLeft: string;
    title: string;
    fontSize: string;
    text: string;
    src: string;
};

type SubContentProps = {
    children: React.ReactNode;
    subWidth: string;
    title: string;
};

type SrcContentProps = {
    children: React.ReactNode;
    mainWidth: string;
    mainHeight: string;
    title: string;
    src: string;
};

interface styleInfo {
    width?: string;
    height?: string;
};

export const MainContent: React.FC<MainContentProps> = (props) => {
    return (
        <div>
            <MainBackground width={props.mainWidth} height={props.mainHeight}>
                <MainTitleStyle>{props.title}</MainTitleStyle>
                { props.children }
            </MainBackground>
        </div>
    );
}

const MainTitleStyle = styled(Box)({
    fontSize: '42px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0px auto',
    color: '#000000',
    opacity: '0.8',
})

const MainBackground = styled(Box)<styleInfo>((props) => ({
    width: props.width,
    height: props.height,
    paddingTop: '20px',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)'
}))



export const SubContent: React.FC<SubContentProps> = (props) => {
    return (
        <div>
            <SubTitleStyle>{props.title}</SubTitleStyle>
            <SubBackground width={props.subWidth}>{ props.children }</SubBackground>
        </div>
    );
}

const SubTitleStyle = styled(Box)({
    fontSize: '24px',
    textAlign: 'center',
    margin: '30px auto 0px',
    color: '#000000',
    opacity: '0.8',
})

const SubBackground = styled(Box)<styleInfo>((props) => ({
    width: props.width,
    margin: '10px auto 60px',
    borderRadius: '20px',
    backgroundColor: '#cceee9',
}))



export const InTitle = ( props: { title: string } ) => {
    return (
      <InTitleStyle>{props.title}</InTitleStyle>
    );
}

const InTitleStyle = styled(Box)({
    fontSize: '20px',
    textAlign: 'center',
    margin: '20px auto 0',
    color: '#000000',
    opacity: '0.6',
})



export const Logo = ( props: { src: string } ) => {
    return (
      <LogoStyle src={props.src}/>
    );
}

const LogoStyle = styled('img')({
    width: '64px',
    height: '64px',
    margin: '30px auto',
}) 



export const GreenContent: React.FC<SrcContentProps> = (props) => {
    return (
        <div>
            <GreenBackground width={props.mainWidth} height={props.mainHeight}>
                <FlexCenter>
                    <HeadLogoStyle src={props.src}/>
                </FlexCenter>
                <GreenTitleStyle>{props.title}</GreenTitleStyle>
                { props.children }
            </GreenBackground>
        </div>
    );
}

const GreenBackground = styled(Box)<styleInfo>((props) => ({
    width: props.width,
    height: props.height,
    margin: '30px 0',
    paddingTop: '5px',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    border: '4px solid #00AE95',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0)'
}))

const GreenTitleStyle = styled(Box)({
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '10px auto 30px',
    color: '#222222',
})

const HeadLogoStyle = styled('img')({
    width: '64px',
    height: '64px',
    margin: '5px auto 0px',
}) 

const FlexCenter = styled(Box)({
    display: 'flex',
    justifyContent: 'center'
})

const FlexEvenly = styled(Box)({
    display: 'flex',
    justifyContent: 'space-evenly'
})


export const MainContent2RightLogo: React.FC<MainContent2Props> = (props) => {

    const marginOpacity = 0;

    return (
        <div>
            <MainBackground width={props.mainWidth} height={props.mainHeight}>
                <HeightMargin height="5%" opacity={marginOpacity}/>
                <FlexEvenly>
                    <TextPosition>
                        <LeftLineTitle title={props.title} fontSize={props.fontSize}/>
                        <TextBox text={props.text} marginLeft={props.marginLeft} />
                    </TextPosition>
                    <BigLogoStyle src={props.src}/>
                </FlexEvenly>
                <HeightMargin height="5%" opacity={marginOpacity}/>
            </MainBackground>
        </div>
    );
}

export const MainContent2LeftLogo: React.FC<MainContent2Props> = (props) => {

    const marginOpacity = 0;

    return (
        <div>
            <MainBackground width={props.mainWidth} height={props.mainHeight}>
                <HeightMargin height="5%" opacity={marginOpacity}/>
                <FlexEvenly>
                    <BigLogoStyle src={props.src}/>
                    <TextPosition>
                        <LeftLineTitle title={props.title} fontSize={props.fontSize}/>
                        <TextBox text={props.text} marginLeft={props.marginLeft} />
                    </TextPosition>
                </FlexEvenly>
                <HeightMargin height="5%" opacity={marginOpacity}/>
            </MainBackground>
        </div>
    );
}

const BigLogoStyle = styled('img')({
    width: '400px',
    height: '400px',
    margin: '0 3vw',
    opacity: '0.8',
}) 

const TextPosition = styled(Box)({
    margin: '0 3vw',
}) 