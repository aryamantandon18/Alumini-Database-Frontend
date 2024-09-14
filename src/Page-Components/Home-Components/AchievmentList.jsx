import * as React from 'react';
import Box from '@mui/material/Box';
import AchievementCard from '../Alumini-Achievements/AchievementCard';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllAchievements } from '../../features/AchievementSlice'; // Update the path as needed

export default function AchievementList() {
    const dispatch = useDispatch();
    const achievements = useSelector((state) => state.achievements.achievements);
   const status = useSelector((state) => state.achievements.status);

   useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllAchievements());
    }
  }, [status, dispatch]);

    return (
        <Box sx={{ width: '90%',
                height: { xs: 300, sm: 350, md: 400, lg: 450, xl: 500 }, 
                overflowY: 'scroll' }}>
           {achievements.map((item) => (
                <AchievementCard 
                key={item.AchievementID}
                title={item.Title}
                date={item.DateAchieved}
                description={item.Description}
              />
            ))}
        </Box>
    );
}
