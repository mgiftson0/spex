import Sidebar from '../components/SideMenu';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to your dashboard content area!</p>
      </div>
    </div>
  );
};

export default Dashboard;
