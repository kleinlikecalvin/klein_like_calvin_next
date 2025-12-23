export default function DisplayModeToggle({
  setIsLightMode,
}: {
  setIsLightMode: Function;
}) {
  function handleDisplayModeToggleClick() {
    setIsLightMode((prev: boolean) => !prev);
  }

  return (
    <div className="DisplayModeToggle">
      <p>light</p>
      <label>
        <input
          className="toggle"
          type="checkbox"
          onClick={handleDisplayModeToggleClick}
        />
        <span className="toggle-container"></span>
      </label>
      <p>dark</p>
    </div>
  );
}
