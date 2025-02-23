const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full">
      <div
        className="h-full rounded-full bg-blue-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
