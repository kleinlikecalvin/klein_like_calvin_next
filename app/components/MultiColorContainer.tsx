import "../styles/components/_MultiColorContainer.scss";

export default function MultiColorContainer({ children }) {
  return (
    <div className="border-one">
      <div className="border-two">
        <div className="border-three">
          <div className="border-four">{children}</div>
        </div>
      </div>
    </div>
  );
}
