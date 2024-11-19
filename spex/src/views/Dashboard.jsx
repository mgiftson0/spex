// import Header from '../components/Header'; 
import RightSideCard from '../components/RightSideCard';
import SideMenu from '../components/SideMenu'; 
import FitnessOverviewCard from '../components/FitnessOverviewCard';

const Dashboard = () => {
  return (
    <div>
      {/* <Header /> */}
      <div style={{ display: 'flex', marginTop: '60px' }}> {/* Adjust margin to account for fixed header height */}
        <SideMenu />
        <RightSideCard />

        <FitnessOverviewCard />
      
      </div>
    </div>
  );
};

export default Dashboard;