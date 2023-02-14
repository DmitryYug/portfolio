import React from 'react';
import {Title} from "../../Title";
import type {TabsProps} from 'antd';
import {Tabs} from 'antd';
import {AllProjects} from "./ProjectTabs/AllProjects";

interface ProjectsPropsType {
}



export const Projects: React.FC<ProjectsPropsType> = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `All`,
            children: <AllProjects/>,
        },
    ];

    const tabStyles = {
        'color': 'rgba(255, 255, 255, 1)',
    }

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <div id='projects' className='light-block-wrapper full-screen-height'>
            <div className='light-block-wrapper full-screen-height'>
                <Title title='My projects'
                       subtitle='Pets'
                />
                <div className='project-cards-wrapper'>
                    <Tabs defaultActiveKey="1"
                          items={items}
                          onChange={onChange}
                          centered
                          size='large'
                          tabBarStyle={tabStyles}
                          tabBarGutter={50}
                    />
                </div>
            </div>
        </div>
    );
}

