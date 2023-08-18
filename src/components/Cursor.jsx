const Cursor = ({ mousePositions }) => {
  return (
    <div
      className="cursor"
      style={{
        top: `${mousePositions.y}px`,
        left: `${mousePositions.x}px`,
      }}
    ></div>
  );
};

export default Cursor;
