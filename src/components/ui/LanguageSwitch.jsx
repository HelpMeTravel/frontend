export const LanguageSwitch = ({ currentLang = 'EN', onToggle }) => {
  return (
    <button onClick={onToggle} className="language-switch">
      {currentLang} / {currentLang === 'EN' ? 'UA' : 'EN'}
    </button>
  );
};