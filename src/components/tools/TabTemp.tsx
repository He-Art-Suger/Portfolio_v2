import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext , TabList } from '@mui/lab';
import { Link } from 'react-router'

type info = {
    tabTitle: string[];
    tabColor: string;
}

const key = "tabKey"

const TabTemp: React.FC<info> = (props) => {

    const appState = localStorage.getItem(key)
    const initialState = appState ? JSON.parse(appState) : '0'

    const [value, setValue] = React.useState(initialState);

    const handleChange = (e: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
        // 要改善
        console.log(e.target)
    };

    return (
      <>
        <Box sx={{ width: '100%', marginLeft: '10vw', typography: 'body1' }}>
            <TabContext value={value}>
                <Box>
                    <TabList
                     onChange={handleChange}
                     sx={{
                        "& .MuiTab-root": {
                            color: "#gray", // 通常時の色
                        },
                        "&& .Mui-selected": {
                            color: props.tabColor, // 選択されたときの色
                        },
                        "& .MuiTabs-indicator": {
                            backgroundColor: props.tabColor, // インジケータの色
                            height: '2px'
                        },
                    }}>
                        <Tab label={props.tabTitle[0]} value="0" component={Link} to={"/"}
                         sx={{
                            "&:hover": {
                                color: props.tabColor,
                            },
                        }}/>
                        <Tab label={props.tabTitle[1]} value="1" component={Link} to={"/Appeal"}
                         sx={{
                            "&:hover": {
                                color: props.tabColor,
                            },
                        }}/>
                        <Tab label={props.tabTitle[2]} value="2" component={Link} to={"/Dev"}
                         sx={{
                            "&:hover": {
                                color: props.tabColor,
                            },
                        }}/>
                        <Tab label={props.tabTitle[3]} value="3" component={Link} to={"/Portfolio"}
                         sx={{
                            "&:hover": {
                                color: props.tabColor,
                            },
                        }}/>
                        <Tab label={props.tabTitle[4]} value="4" component={Link} to={"/Products"}
                         sx={{
                            "&:hover": {
                                color: props.tabColor,
                            },
                        }}/>
                        <Tab label={props.tabTitle[5]} value="5" component={Link} to={"/Profile"}
                         sx={{
                            "&:hover": {
                                color: props.tabColor,
                            },
                        }}/>
                    </TabList>
                </Box>
            </TabContext>
        </Box>
      </>
    );
};

export default TabTemp;