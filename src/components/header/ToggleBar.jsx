const ToggleBar = ({ active, handleClick }) => {
  return (
    <button
      className='md:hidden block outline-none'
      onClick={() => handleClick()}
    >
      <div className={`toggle-bar ${active ? 'toggle-bar-active' : ''}`}></div>
    </button>
  );
};

export default ToggleBar;
