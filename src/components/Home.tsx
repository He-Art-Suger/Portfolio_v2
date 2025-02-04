import React from "react";
import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { WidthMargin, HeightMargin } from "./tools/Margin";
import { MainContent } from "./tools/ContentBox";
import { LeftLineTitle, TextBox } from "./tools/ContentText";
import { PageTitle } from "./tools/Title";

const Home: React.FC = () => {

    const text1 = "作者の長所、こだわり";
    const text2 = "開発スタック、経験のある技術";
    const text3 = "今回制作したポートフォリオの詳細";
    const text4 = "過去の開発物(制作中)";
    const text5 = "作者に関する各種情報";
    const text6 = "目に優しくすることによるユーザビリティ向上のほか、表現の幅を増やしたい。";
    const text7 = "動きを取り入れることにより、1つの作品としての流れを作りたい。";
    const text8 = "自分があったらいいなという機能を作成し、利便性と技術力を高めたい。";
    const text9 = "作者っぽくファインチューニングしたLLMとの対話によって親しみを持ってもらいたい。";
    const text10 = "2025/02/04: Portfolio_v2を公開しました。";

    const marginLeft = "5vw";

    return (
      <>
        <Flex>
            <WidthMargin width="10%" opacity={marginOpacity}/>
            <Main>
                <PageTitle title="Home: ようこそ" color="#00AE95"/>
                <MainContent mainWidth="100%" mainHeight="750px" title="ポートフォリオ機能">
                    <LeftLineTitle title="Appeal" fontSize="28px" />
                    <TextBox text={text1} marginLeft={marginLeft} />
                    <LeftLineTitle title="Dev" fontSize="28px" />
                    <TextBox text={text2} marginLeft={marginLeft} />
                    <LeftLineTitle title="Portfolio" fontSize="28px" />
                    <TextBox text={text3} marginLeft={marginLeft} />
                    <LeftLineTitle title="Products" fontSize="28px" />
                    <TextBox text={text4} marginLeft={marginLeft} />
                    <LeftLineTitle title="Profile" fontSize="28px" />
                    <TextBox text={text5} marginLeft={marginLeft} />
                </MainContent>
                <HeightMargin height="80px" opacity={marginOpacity}/>
                <MainContent mainWidth="100%" mainHeight="600px" title="今後追加したい機能">
                    <LeftLineTitle title="ダークモード" fontSize="28px" />
                    <TextBox text={text6} marginLeft={marginLeft} />
                    <LeftLineTitle title="アニメーション" fontSize="28px" />
                    <TextBox text={text7} marginLeft={marginLeft} />
                    <LeftLineTitle title="便利アプリ機能" fontSize="28px" />
                    <TextBox text={text8} marginLeft={marginLeft} />
                    <LeftLineTitle title="AI会話機能" fontSize="28px" />
                    <TextBox text={text9} marginLeft={marginLeft} />
                </MainContent>
                <HeightMargin height="80px" opacity={marginOpacity}/>
                <MainContent mainWidth="100%" mainHeight="600px" title="Information">
                    <LeftLineTitle title="v1.0公開！" fontSize="28px" />
                    <TextBox text={text10} marginLeft={marginLeft} />
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
    justifyContent: 'space-between'
})

const Main = styled(Box)({
    width: '80%'
})
  
export default Home;