import Sheettop from "./Sheettop";
import ExcelSheet from "./ExcelSheet";

const Mainsheet = () => {
  return (
    <div className="w-[1440px] h-[872px] flex flex-col z-0 relative ">
      <Sheettop />
      <div className="relative pb-[48px] top-[168px] -z-20">
        <ExcelSheet />
      </div>
    </div>
  );
};

export default Mainsheet;
