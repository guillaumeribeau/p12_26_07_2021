import React from 'react';
import DayliesActivity from '../components/DayliesActivity';
import Navigation from '../components/Navigation';
import SidebarIcons from '../components/SidebarIcons';


const DashBoard = () => {
    return (
        <div>
            <Navigation/>
            <SidebarIcons/>
            <DayliesActivity/>
        </div>
    );
};

export default DashBoard;