import React from 'react';
import DayliesActivity from '../components/DayliesActivity';
import Navigation from '../components/Navigation';
import Nutriment from '../components/Nutriment';
import SidebarIcons from '../components/SidebarIcons';
import Hello from '../components/Hello';


const DashBoard = () => {
    return (
        <div>
            <Navigation/>
            <Hello/>
            <SidebarIcons/>
            <DayliesActivity/>
            <Nutriment/>
        </div>
    );
};

export default DashBoard;