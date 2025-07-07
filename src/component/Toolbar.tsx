import { RiArrowRightDoubleLine } from "react-icons/ri";
import { VscEyeClosed } from "react-icons/vsc";
import { HiArrowsUpDown } from "react-icons/hi2";
import { LuListFilter } from "react-icons/lu";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { useState } from "react";

const Toolbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = (word: string) => {
    console.log(`${word} was clicked`);
  };

  return (
    // left side
    <div className="fixed w-[1440px] h-[48px] flex items-center px-[6px] py-[8px] top-[56px] border border-[#EEE] bg-white z-30 justify-between">
      <div
        onClick={() => {
          setToggle(!toggle);
          handleClick("Tool bar");
        }}
        className="flex items-center h-[36px] w-[115px] p-[8px] gap-[8px] hover:cursor-pointer hover:bg-slate-100"
      >
        <div className="text-[14px] leading-[20px] font-normal text-[#121212] ">
          Tool bar
        </div>
        <RiArrowRightDoubleLine className="h-[16px] w-[16px] mt-[2px] ml-[4px]" />
        <div className="w-[1px]" />
        <div className="w-[1px] h-[24px] bg-gray-300" />
      </div>

      {/* mid part */}

      {toggle && (
        <div className="h-[36px] w-[871px] flex items-center p-[8px] gap-[4px]">
          <div
            onClick={() => {
              handleClick("Hide Fields");
            }}
            className="flex h-[36px] w-[118px] items-center p-[8px] gap-[4px] hover:cursor-pointer hover:bg-slate-100"
          >
            <VscEyeClosed className="w-[20px] h-[20px] mt-[2px]" />
            <span className="text-[14px] w-auto leading-[20px] font-normal text-[#121212] ">
              Hide Fields
            </span>
          </div>
          <div
            onClick={() => {
              handleClick("Sort");
            }}
            className="flex h-[36px] w-[73px] items-center p-[8px] gap-[4px] hover:cursor-pointer hover:bg-slate-100"
          >
            <HiArrowsUpDown className="w-[20px] h-[20px] mt-[2px]" />
            <span className="text-[14px] w-auto leading-[20px] font-normal text-[#121212] ">
              Sort
            </span>
          </div>
          <div
            onClick={() => {
              handleClick("Filter");
            }}
            className="flex h-[36px] items-center p-[8px] gap-[4px] hover:cursor-pointer hover:bg-slate-100"
          >
            <LuListFilter className="w-[20px] h-[20px] mt-[2px]" />
            <span className="text-[14px] w-auto leading-[20px] font-normal text-[#121212] ">
              Filter
            </span>
          </div>
          <div
            onClick={() => {
              handleClick("Cell view");
            }}
            className="flex h-[36px] items-center p-[8px] gap-[4px] hover:cursor-pointer hover:bg-slate-100"
          >
            <img
              src="ArrowAutofit.png"
              alt="Icon"
              className="w-[20px] h-[20px] mt-[2px]"
            />
            <span className="text-[14px] w-auto leading-[20px] font-normal text-[#121212] ">
              Cell view
            </span>
          </div>
        </div>
      )}

      {/* last part */}
      <div className="w-[437px] h-[36px] flex gap-[8px] items-center ">
        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => {
              handleClick("Import");
            }}
            className="w-[90px] h-[36px] p-[8px] pr-[12px] flex gap-[4px] text-[#545454] text-[14px] leading-[20px] font-normal tracking-[0.8px] border-[2px] border-[#EEE] rounded-lg hover:bg-slate-100"
          >
            <LuArrowDownToLine className="w-[20px] h-[20px] mt-[2px]" />
            Import
          </button>
          <button
            onClick={() => {
              handleClick("Export");
            }}
            className="w-[90px] h-[36px] p-[8px] pr-[12px] flex gap-[4px] text-[#545454] text-[14px] leading-[20px] font-normal tracking-[0.8px] border-[2px] border-[#EEE] rounded-lg hover:bg-slate-100"
          >
            <LuArrowUpToLine className="w-[20px] h-[20px] mt-[2px]" />
            Export
          </button>
          <button
            onClick={() => {
              handleClick("Share");
            }}
            className="w-[85px] h-[36px] p-[8px] pr-[12px] flex gap-[4px] text-[#545454] text-[14px] leading-[20px] font-normal tracking-[0.8px] border-[2px] border-[#EEE] rounded-lg hover:bg-slate-100"
          >
            <img
              src="Shape.png"
              alt="Share Icon"
              className="w-[15px] h-[15px] mt-[2px]"
            />
            Share
          </button>
        </div>
        <button
          onClick={() => {
            handleClick("New Action");
          }}
          className="w-[150px] h-[36px] bg-[#4B6A4F] flex items-center gap-[4px] px-[24px] py-[8px] text-[14px] font-normal text-[#FFF] rounded-lg  hover:text-black"
        >
          <img
            src="ArrowSplit.png"
            alt="Action Icon"
            className="h-[20px] w-[20px]"
          />
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
