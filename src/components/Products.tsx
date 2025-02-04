import React from "react";
import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { WidthMargin, HeightMargin } from "./tools/Margin";
import { PageTitle } from "./tools/Title";

const Products: React.FC = () => {
    return (
      <>
        <Flex>
            <WidthMargin width="10%" opacity={marginOpacity}/>
            <Main>
                <PageTitle title="Products: 制作物" color="#00AE95"/>
                <HeightMargin height="160px" opacity={marginOpacity}/>
            </Main>
            <WidthMargin width="10%" opacity={marginOpacity}/>
        </Flex>
      </>
    );
};

const marginOpacity = 0;

const Flex = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Main = styled(Box)({
    width: '80%'
})
  
export default Products;