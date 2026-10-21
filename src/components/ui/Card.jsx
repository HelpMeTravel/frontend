export const Card = ({ children, title }) => {
  return (
    <div className="card-container">
      {title && <h3>{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};