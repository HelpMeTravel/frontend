// Either primary or outline or text
export const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  return (
    <button 
      onClick={onClick} 
      className={`btn btn-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};