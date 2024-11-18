import Header from '../components/Header'; // Path to your Header component
import SideMenu from '../components/SideMenu'; // Sidebar component (if applicable)

const App = () => {
  return (
    <div>
      <Header />
      <div > {/* Space for fixed header */}
        <SideMenu />
        <main style={{ padding: '20px' }}> {/* Main content */}
          <h2>Welcome to the Dashboard!</h2>
        </main>
      </div>
    </div>
  );
};

export default App;
