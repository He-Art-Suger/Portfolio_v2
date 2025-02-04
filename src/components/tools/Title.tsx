import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { WidthMargin, HeightMargin } from "./Margin";

const marginOpacity = 0;

interface styleInfo {
    color?: string;
}

export const PageTitle = ( props: { title: string, color: string } ) => {
    return (
      <>
        <HeightMargin height="60px" opacity={marginOpacity}/>
        <PageTitleBackground>
            <Flex>
                <WidthMargin width="3vw" opacity={marginOpacity}/>
                <PageTitleText color={props.color}>{props.title}</PageTitleText>
                <WidthMargin width="3vw" opacity={marginOpacity}/>
            </Flex>
            <Flex>
                <WidthMargin width="2vw" opacity={marginOpacity}/>
                <PageTitleUnderline color={props.color}/>
                <WidthMargin width="2vw" opacity={marginOpacity}/>
            </Flex>
        </PageTitleBackground>
        <HeightMargin height="40px" opacity={marginOpacity}/>
      </>
    );
}

const Flex = styled(Box)({
    display: 'flex'
})

const PageTitleBackground = styled(Box)({
    backgroundColor: '#ffffff',
    width: '100%',
    height: '80px',
    borderRadius: '20px',
    boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)'
})
    

const PageTitleText = styled(Box)<styleInfo>((props) =>({
    color: props.color,
    fontSize: '32px',
    fontWeight: 'bold',
    paddingTop: '10px'
}))

const PageTitleUnderline = styled(Box)<styleInfo>((props) =>({
    backgroundColor: props.color,
    width: '100%',
    height: '2px'
})) 