import "./toggleswitch.css"

function ToggleSwitch({ isChecked, onToggle }) {
    return (
      <label className="switch">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onToggle(e.target.checked)}
        />
        <span className="slide round"></span>
      </label>
    );
  }
  
  export default ToggleSwitch;
