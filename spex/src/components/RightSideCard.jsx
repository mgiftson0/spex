import './RightSideCard.css'; // Import the CSS file




const RightSideCard = () => {
  return (
    <div className="right-side-card">
      {/* Card Content */}
      <div className="card-content">
        <h2 className="card-title">Notification</h2>
        <p className="card-description">
          You have 3 new messages and 2 upcoming meetings today.
        </p>
        <button className="card-button">View Details</button>
      </div>
    </div>
  );
};

export default RightSideCard;
