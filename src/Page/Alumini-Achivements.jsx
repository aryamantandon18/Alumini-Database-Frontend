import AchievementCard from "../Page-Components/Alumini-Achievements/AchievementCard";
import AchievementsSection from "../Page-Components/Alumini-Achievements/AchievementsSection";
import AlumniCarousel from "../Page-Components/Alumini-Achievements/Alumni_dashboard";

function Alumini_Achivements_Page() {
  return (
    <>
      <AlumniCarousel />
      <div className="p-4">
        <AchievementsSection />
      </div>
    </>
  );
}

export default Alumini_Achivements_Page;
