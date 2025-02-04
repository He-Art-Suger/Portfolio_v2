import React from "react";
import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { WidthMargin, HeightMargin } from "./tools/Margin";
import { MainContent } from "./tools/ContentBox";
import { LeftLineTitle, TextBox } from "./tools/ContentText";
import { PageTitle } from "./tools/Title";

const Profile: React.FC = () => {

    const text1 = "氏名: 佐藤 心(さとう しん)\n生年月日: 2001/11/10 (23歳)\nEmail: shinshin1110.ss@gmail.com";
    const text2 = "福島県立白河高等学校(2017~2020)\n横浜国立大学 理工学部 数物・電子情報系学科 情報工学EP(2020~2024)\n横浜国立大学 環境情報学府 情報環境専攻 情報学プログラム(2024~2026)";
    const text3 = "Web系企業(自社開発)\n理由\n・Web業界ではSaaSなど様々な事業が急成長を遂げており、そういった業界でエンジニアとして経験を積むことで\n エンジニアとして特に社会に大きく貢献できると感じたから。\n・Web業界は技術の移り変わりが激しく、モダンな技術を学ぶことで今後の時代をリードするエンジニアになりたいから。";
    const text4 = "フロントエンドエンジニア\n理由\n・UI/UXは自分が改善した点や工夫を凝らした点など努力の形が目に見えるから\n・ユーザに近い視点で開発ができるとともに、ユーザからも直接的かつ客観的なフィードバックを提供していただけるから\n・誰もやっていないことをUI/UXとしてカタチにし、ユーザに驚きや楽しさを提供することを目指したいから";
    const text5 = "卒業研究\n題目: 「マイクロブログにおける単語間類似度と文章内共起による有害語の検出」\n修士研究\n題目: 「誹謗中傷データセット拡張を目的とした LLM による文章生成および評価手法の提案」";
    const text6 = "各種成果物のソースコードをアップロードしているアカウント。";
    const text7 = "自身の研究のアウトプットや、開発での苦悩、技術に対する雑多な感想など、技術的にかかわってきた内容を広く書き留めておくことを目的とした技術ブログ。";

    const marginLeft = "5vw";

    return (
      <>
        <Flex>
            <WidthMargin width="10%" opacity={marginOpacity}/>
            <Main>
                <PageTitle title="Profile: 自己紹介" color="#00AE95"/>
                <MainContent mainWidth="100%" mainHeight="600px" title="基本情報">
                    <LeftLineTitle title="氏名等" fontSize="28px" />
                    <TextBox text={text1} marginLeft={marginLeft} />
                    <LeftLineTitle title="経歴" fontSize="28px" />
                    <TextBox text={text2} marginLeft={marginLeft} />
                </MainContent>
                <HeightMargin height="80px" opacity={marginOpacity}/>
                <MainContent mainWidth="100%" mainHeight="600px" title="志望業界・職種">
                    <LeftLineTitle title="志望業界" fontSize="28px" />
                    <TextBox text={text3} marginLeft={marginLeft} />
                    <LeftLineTitle title="志望職種" fontSize="28px" />
                    <TextBox text={text4} marginLeft={marginLeft} />
                </MainContent>
                <HeightMargin height="80px" opacity={marginOpacity}/>
                <MainContent mainWidth="100%" mainHeight="700px" title="アウトプット">
                    <LeftLineTitle title="研究" fontSize="28px" />
                    <TextBox text={text5} marginLeft={marginLeft} />
                    <LeftLineTitle title="GitHub" fontSize="28px" />
                    <TextBox text={text6} marginLeft={marginLeft} />
                    <StyledLink target="_blank" href="https://github.com/He-Art-Suger">https://github.com/He-Art-Suger</StyledLink>
                    <HeightMargin height="30px" opacity={marginOpacity}/>
                    <LeftLineTitle title="Blog" fontSize="28px" />
                    <TextBox text={text7} marginLeft={marginLeft} />
                    <StyledLink target="_blank" href="https://he-art.hatenablog.com/">https://he-art.hatenablog.com/</StyledLink>
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

const StyledLink = styled('a')({
    textDecoration: 'none',
    fontSize: '20px',
    marginLeft: '5vw',
    color: '#222222',
    "&:hover": {
        color: '#00AE95',
    },
})
  
export default Profile;