import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';



const { TabPane } = Tabs;

export default function HomeMenu(props) {

    const [state, setState] = useState({
        tabPosition: 'left',
    })

    const changeTabPosition = (e) => {
        setState({ tabPosition: e.target.value });
    };

    const { tabPosition } = state;

    // const [tabPosition, setTabPosition] = useState('left');

    // const changeTabPosition = (e) => {
    //   setTabPosition(e.target.value);
    // };

    return (
        <>
            {/* <Space
                style={{
                    marginBottom: 24,
                }}
            >
                Tab position:
                <Radio.Group value={tabPosition} onChange={changeTabPosition}>
                    <Radio.Button value="top">top</Radio.Button>
                    <Radio.Button value="bottom">bottom</Radio.Button>
                    <Radio.Button value="left">left</Radio.Button>
                    <Radio.Button value="right">right</Radio.Button>
                </Radio.Group>
            </Space> */}
            <Tabs tabPosition={tabPosition}>
                <TabPane tab={<img src='https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png' className='rounded-full' width="100" />} key="1">
                    Content of Tab 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab 3
                </TabPane>
            </Tabs>
        </>
    )
}
