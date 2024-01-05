import { ClimbingBoxLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[1001] flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.3)] backdrop-blur">
      <ClimbingBoxLoader color="rgb(200,235,226)" size={20} />
    </div>
  );
};

export default Loader;
