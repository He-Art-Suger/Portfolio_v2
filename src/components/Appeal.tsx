import React from "react";
import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { WidthMargin, HeightMargin } from "./tools/Margin";
import { PageTitle } from "./tools/Title";
import { MainContent2RightLogo, MainContent2LeftLogo } from "./tools/ContentBox";

const Appeal: React.FC = () => {

    const text1="学生時代から部活動や学業でライバルに負けると、悔しすぎて三日三晩次勝つためにはどうすればいいかを考え込んでしまうほど勝ちや1番にこだわってきました。\n\nこの勝ちにこだわる執念が、プロダクトへの情熱やこだわりにつながっていると考えています。"
    const text2="自分が手掛けたプロダクトや技術には非常に愛着があり、それがプロダクトをより良いものにしていくと考えています。\n\n今回のポートフォリオもReactなどフロントエンドのこだわりが詰まった作品なので、ぜひご覧ください。"
    const text3="学部時代からの研究活動で機械学習や自然言語処理など、現在のAIを活用していく上で必要になる知識を貪欲に学んできました。\n\nそのため、フロントエンドだけでなく、AIエンジニアとしての知見も事業の向上に寄与すると考えられます。"

    const marginLeft = "3vw";

    return (
      <>
        <Flex>
            <WidthMargin width="10%" opacity={marginOpacity}/>
            <Main>
                <PageTitle title="Appeal: アピールポイント" color="#00AE95"/>
                <MainContent2RightLogo
                 mainWidth="100%"
                 mainHeight="500px" 
                 marginLeft={marginLeft}
                 title="負けず嫌い" 
                 fontSize="42px" 
                 text={text1}
                 src="/otherIcons/boxing.svg"
                />
                <HeightMargin height="80px" opacity={marginOpacity}/>
                <MainContent2LeftLogo
                 mainWidth="100%"
                 mainHeight="500px"
                 marginLeft={marginLeft}
                 title="エンジニアのこだわり"
                 fontSize="42px" 
                 text={text2}
                 src="/otherIcons/program.svg"
                />
                <HeightMargin height="80px" opacity={marginOpacity}/>
                <MainContent2RightLogo
                 mainWidth="100%"
                 mainHeight="500px" 
                 marginLeft={marginLeft}
                 title="AIに関する知識"
                 fontSize="42px"  
                 text={text3}
                 src="/otherIcons/ai.svg"
                />
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
  
export default Appeal;