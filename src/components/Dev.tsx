import React from "react";
import { Box } from "@mui/material"; 
import { styled } from '@mui/material/styles';
import { WidthMargin, HeightMargin } from "./tools/Margin";
import { PageTitle } from "./tools/Title";
import { MainContent, SubContent, InTitle, Logo } from "./tools/ContentBox";

const Dev: React.FC = () => {
    return (
      <>
        <Flex>
            <WidthMargin width="10%" opacity={marginOpacity}/>
            <Main>
                <PageTitle title="Dev: 開発体制" color="#00AE95"/>
                <Flex>
                    <MainContent mainWidth="24vw" mainHeight="1250px" title="開発言語">
                        <SubContent subWidth="80%" title="フロントエンド">
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
                        <SubContent subWidth="80%" title="バックエンド">
                            <Flex>
                                <Logo src='/useIcons/nodejs.svg'/>
                            </Flex>
                            <InTitle title="FW・ライブラリ" />
                            <Flex>
                                <Logo src='/useIcons/express.svg'/>
                                <Logo src='/useIcons/prisma.svg'/>
                            </Flex>
                        </SubContent>
                        <SubContent subWidth="80%" title="その他">
                            <Flex>
                                <InTitle title="研究" />
                                <InTitle title="UI/UX" />
                            </Flex>
                            <Flex>
                                <Logo src='/useIcons/python.svg'/>
                                <Logo src='/useIcons/figma.svg'/>
                            </Flex>
                        </SubContent>
                    </MainContent>
                    <MainContent mainWidth="24vw" mainHeight="1250px" title="システム・管理">
                        <SubContent subWidth="80%" title="OS">
                            <Flex>
                                <Logo src='/useIcons/windows.svg'/>
                            </Flex>
                        </SubContent>
                        <SubContent subWidth="80%" title="開発環境">
                            <Flex>
                                <Logo src='/useIcons/vscode.svg'/>
                                <Logo src='/useIcons/github.svg'/>
                            </Flex>
                        </SubContent>
                        <SubContent subWidth="80%" title="ツール">
                            <Flex>
                                <Logo src='/useIcons/notion.svg'/>
                                <Logo src='/useIcons/slack.svg'/>
                            </Flex>
                            <Flex>
                                <Logo src='/useIcons/drawio.svg'/>
                                <Logo src='/useIcons/chatgpt.svg'/>
                            </Flex>
                        </SubContent>
                    </MainContent>
                    <MainContent mainWidth="24vw" mainHeight="1250px" title="その他スキル">
                        <SubContent subWidth="80%" title="経験豊富">
                            <Flex>
                                <Logo src='/useIcons/javascript.svg'/>
                                <Logo src='/useIcons/jquery.svg'/>
                            </Flex>
                        </SubContent>
                        <SubContent subWidth="80%" title="経験あり">
                            <Flex>
                                <Logo src='/useIcons/c.svg'/>
                                <Logo src='/useIcons/java.svg'/>
                            </Flex>
                            <Flex>
                                <Logo src='/useIcons/unity.svg'/>
                                <Logo src='/useIcons/php.svg'/>
                            </Flex>
                            <Flex>
                                <Logo src='/useIcons/aws.svg'/>
                            </Flex>
                        </SubContent>
                    </MainContent>
                </Flex>
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

export default Dev;