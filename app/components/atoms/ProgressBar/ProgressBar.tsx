export const ProgressBar = ({ percent }: { percent: number }) => {
  return (
    <div className="w-full flex items-center gap-2 [direction:ltr] transition-all">
      <p>{percent}%</p>
      <div className="w-full h-2 rounded-md bg-gray-300 transition- duration-300">
        <div
          className="h-full rounded-md bg-brand-600"
          style={{ width: percent + '%' }}
        ></div>
      </div>
    </div>
  );
};
//   <ProgressBar percent={uploadPercent || 0} />
