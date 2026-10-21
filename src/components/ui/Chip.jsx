export const Chip = ({ label, status = 'default' }) => {
  return (
    <span className={`chip status-${status}`}>
      {label}
    </span>
  );
};