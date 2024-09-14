import { useEffect, useContext } from "react";
import Heading from "../Heading";
import AchievementCard from "./AchievementCard";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllAchievements } from '../../features/AchievementSlice';
import { SearchContext } from '../../Context/SearchContext';

const AchievementsSection = () => {
  const dispatch = useDispatch();
  const achievements = useSelector((state) => state.achievements.achievements);
  const status = useSelector((state) => state.achievements.status);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllAchievements());
    }
  }, [status, dispatch]);

  const filteredAchievements = achievements.filter(
    (achievement) =>
      achievement.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.Description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <Heading title="Achievements" />
      <SearchBar />
      <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filteredAchievements.map((item) => (
          <AchievementCard 
            key={item.AchievementID}
            title={item.Title}
            date={item.DateAchieved}
            description={item.Description}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
