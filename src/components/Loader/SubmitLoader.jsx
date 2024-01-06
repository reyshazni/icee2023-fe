import { ClimbingBoxLoader, PulseLoader } from 'react-spinners'

const SubmitLoader = () => {
  return (
    <div className="fixed inset-0 z-[1001] flex h-full w-full flex-col items-center justify-center bg-[rgba(0,0,0,0.3)] backdrop-blur">
      <ClimbingBoxLoader color="rgb(200,235,226)" size={20} />
      <div className="flex justify-center items-center">
        <h1 className="font-sarmady text-[20px] font-[600] text-[rgb(200,235,226)]">
          Mengupload data
        </h1>
        <PulseLoader color="rgb(200,235,226)" size={5}/>
      </div>
    </div>
  )
}

export default SubmitLoader
