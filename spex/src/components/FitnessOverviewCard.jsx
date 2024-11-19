import './FitnessOverviewCard.css'; // Import the CSS file

const FitnessOverviewCard = () => {
  return (
    <div className="fitness-card">
      {/* Card Header */}
      <div className="fitness-card-header">
        <h2>Fitness Overview</h2>
      </div>

      {/* Card Content */}
      <div className="fitness-card-content">
        {/* Steps */}
        <div className="fitness-item">
          <h3>Steps</h3>
          <p>10,543</p>
        </div>

        {/* Calories */}
        <div className="fitness-item">
          <h3>Calories Burned</h3>
          <p>563 kcal</p>
        </div>

        {/* Workout Progress */}
        <div className="fitness-item">
          <h3>Workout Progress</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '75%' }}></div>
          </div>
          <p>75% Completed</p>
        </div>
      </div>
    </div>
  );
};

export default FitnessOverviewCard;
