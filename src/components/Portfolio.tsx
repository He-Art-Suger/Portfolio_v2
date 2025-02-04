import React from "react";
import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { WidthMargin, HeightMargin } from "./tools/Margin";
import { PageTitle } from "./tools/Title";
import { MainContent, SubContent, InTitle, Logo, GreenContent } from "./tools/ContentBox";
import { LeftLineText } from "./tools/ContentText";

const Portfolio: React.FC = () => {
    return (
      <>
        <Flex>
            <WidthMargin width="10%" opacity={marginOpacity}/>
            <Main>
                <PageTitle title="Porifolio: ポートフォリオについて" color="#00AE95"/>
                <MainContent mainWidth="100%" mainHeight="600px" title="開発経緯">
                  <Flex>
                    <GreenContent 
                     mainWidth="20vw"
                     mainHeight="400px" 
                     title="旧ポートフォリオの課題" 
                     src="/otherIcons/checklist.svg"
                    >
                      <LeftLineText text="旧ポートフォリオはエフェクトやUIの主張が激しい" />
                      <LeftLineText text="より大人っぽいポートフォリオも作成したい" />
                      <LeftLineText text="就活や開発を通して、成長した自分を表現したい" />
                    </GreenContent>
                    <GreenContent
                     mainWidth="20vw"
                     mainHeight="400px"
                     title="技術を形に" 
                     src="/otherIcons/tools.svg"
                     >
                      <LeftLineText text="フロントエンドとして、培った技術を形にしたい" />
                      <LeftLineText text="React×TypeScript を採用ライブラリやツールも活用" />
                      <LeftLineText text="SPAを採用、旧ポートフォリオより高速な読み込みを実現" />
                    </GreenContent>
                    <GreenContent
                     mainWidth="20vw"
                     mainHeight="400px"
                     title="完成したプロダクト" 
                     src="/otherIcons/accessibility-inset.svg"
                     >
                      <LeftLineText text="過去のプロダクトは未完成や再現不可が多かった" />
                      <LeftLineText text="1つ、自信のあるプロダクトを完成させ堂々と公開したい" />
                    </GreenContent>
                  </Flex>
                </MainContent>
                <HeightMargin height="60px" opacity={marginOpacity}/>
                <MainContent mainWidth="100%" mainHeight="500px" title="開発スタック">
                  <Flex>
                    <SubContent subWidth="30vw" title="フロントエンド">
                        <Flex>
                            <Logo src='/useIcons/html5.svg'/>
                            <Logo src='/useIcons/css3.svg'/>
                            <Logo src='/useIcons/typescript.svg'/>
                        </Flex>
                        <InTitle title="FW・ライブラリ" />
                        <Flex>
                            <Logo src='/useIcons/react.svg'/>
                            <Logo src='/useIcons/mui.svg'/>
                            <Logo src='/useIcons/vitejs.svg'/>
                        </Flex>
                    </SubContent>
                    <SubContent subWidth="30vw" title="その他">
                        <Flex>
                            <Logo src='/useIcons/vscode.svg'/>
                            <Logo src='/useIcons/github.svg'/>
                            <Logo src='/useIcons/figma.svg'/>
                        </Flex>
                    </SubContent>
                  </Flex>
                </MainContent>
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
    justifyContent: 'space-evenly'
})

const Main = styled(Box)({
    width: '80%'
})
  
export default Portfolio;