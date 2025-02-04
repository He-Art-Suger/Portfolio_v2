import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';

interface styleInfo {
  width?: string;
  height?: string;
  opacity?: number;
}

export const WidthMargin = ( props: { width: string, opacity: number } ) => {
    return (
      <WidthMarginStyle width={props.width} opacity={props.opacity}/>
    );
}

const WidthMarginStyle = styled(Box)<styleInfo>((props) =>({
    backgroundColor: '#00ff00',
    width: props.width,
    opacity: props.opacity
}))


export const HeightMargin = ( props: { height: string, opacity: number } ) => {
    return (
      <HeightMarginStyle height={props.height} opacity={props.opacity}/>
    );
}

const HeightMarginStyle = styled(Box)<styleInfo>((props) =>({
    backgroundColor: '#ff0000',
    height: props.height,
    opacity: props.opacity
}))
