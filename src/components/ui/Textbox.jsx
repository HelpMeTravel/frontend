export const Textbox = ({ label, placeholder, value, onChange, type = 'text' }) => {
  return (
    <div className="textbox-wrapper">
      {label && <label>{label}</label>}
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};