import React from 'react';
import DayliesActivity from '../components/DayliesActivity';
import Navigation from '../components/Navigation';
import Nutriment from '../components/Nutriment';
import SidebarIcons from '../components/SidebarIcons';
import Hello from '../components/Hello';
import RadarPerformance from '../components/RadarPerformance';
import RadialScore from '../components/RadialScore';


const DashBoard = () => {
    return (
        <div>
            <Navigation/>
            <Hello/>
            <SidebarIcons/>
            <DayliesActivity/>
            <Nutriment/>
            <RadarPerformance/>
            <RadialScore/>
        </div>
    );
};

export default DashBoard;