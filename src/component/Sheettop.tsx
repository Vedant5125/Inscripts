import { BiDotsHorizontalRounded } from "react-icons/bi";

const Sheettop = () => {
  const handleClick = (word: string) => {
    console.log(`${word} was clicked`);
  };

  return (
    <div>
      {/* First part */}
      <div className="w-[1440px] h-[32px] flex fixed top-[104px] gap-[1px] border-b-[1px] z-30 border-b-white bg-white">
        <div className="w-[32px] h-[32px] bg-white"></div>
        <div className="w-[631px] flex bg-[#E2E2E2] p-[8px] items-center gap-[8px]">
          <img
            onClick={() => {
              handleClick("Linked-to");
            }}
            className="w-[158px] h-[24px] hover:cursor-pointer"
            src="Linked-to.png"
            alt="Linked-to Icon"
          />
          <img
            onClick={() => {
              handleClick("ArrowSync");
            }}
            className="w-[16px] h-[16px] hover:cursor-pointer"
            src="ArrowSync.png"
            alt="ArrowSync Icon"
          />
        </div>

        <div className="w-[124px] p-[8px] bg-white"></div>

        <div className="w-[124px] bg-[#D2E0D4] px-[16px] flex items-center justify-center">
          <div className="w-[81px] h-[24px] flex items-center justify-center px-[4px] py-[2px] gap-[4px]">
            <img
              className="w-[12px] h-[12px]"
              src="ArrowSplit2.png"
              alt="Arrow Icon"
            />
            <div className="w-[29px] h-[20px] text-[14px] leading-[20px] tracking-wide font-medium text-[#505450]">
              ABC
            </div>
            <BiDotsHorizontalRounded
              onClick={() => {
                handleClick("More options (ABC)");
              }}
              className="text-[#AFAFAF] w-[16px] h-[16px] mt-[3px] hover:cursor-pointer hover:scale-150"
            />
          </div>
        </div>

        <div className="w-[251px] bg-[#DCCFFC] px-[16px] flex items-center justify-center">
          <div className="w-[179px] h-[24px] flex items-center justify-center px-[4px] py-[2px] gap-[4px]">
            <img
              className="w-[14px] h-[14px]"
              src="ArrowSplit.png"
              alt="Arrow Icon"
            />
            <div className="w-[127px] h-[20px] text-[14px] leading-[20px] tracking-wide font-medium text-[#463E59]">
              Answer a question
            </div>
            <BiDotsHorizontalRounded
              onClick={() => {
                handleClick("More options (Answer a question)");
              }}
              className="text-[#AFAFAF] w-[16px] h-[16px] mt-[3px] hover:cursor-pointer hover:scale-150"
            />
          </div>
        </div>

        <div className="w-[124px] bg-[#FAC2AF] px-[16px] flex items-center justify-center">
          <div className="w-[102px] h-[24px] flex items-center justify-center px-[4px] py-[2px] gap-[4px]">
            <img
              className="w-[14px] h-[14px]"
              src="ArrowSplit.png"
              alt="Arrow Icon"
            />
            <div className="w-[50px] h-[20px] text-[14px] leading-[20px] tracking-wide font-medium text-[#695149]">
              Extract
            </div>
            <BiDotsHorizontalRounded
              onClick={() => {
                handleClick("More options (Extract)");
              }}
              className="text-[#AFAFAF] w-[16px] h-[16px] mt-[3px] hover:cursor-pointer hover:scale-150"
            />
          </div>
        </div>

        <div
          onClick={() => {
            handleClick("Add more fields");
          }}
          className="w-[124px] px-[8px] flex items-center justify-center bg-[#EEE]  border-x-[2px] border-dashed border-[#CCC] box-border hover:cursor-pointer"
        >
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <img src="plus2.png" alt="Plus Icon" />
          </div>
        </div>
      </div>

      {/* Second part */}
      <div className="w-[1440px] h-[32px] flex fixed top-[136px] gap-[1px] z-30 bg-white">
        <div className="w-[32px] h-[32px] bg-[#EEE] pl-[8px] pr-[4px] flex items-center justify-center border-[1px] border-r-white ">
          <div className="w-[20px] h-[16px] flex items-center justify-center">
            <img
              className="w-[16px] h-[16px] "
              src="hashtag.png"
              alt="# icon"
            />
          </div>
        </div>

        <div
          onClick={() => {
            handleClick("Job request dropdown");
          }}
          className="w-[256px] bg-[#EEE] pl-[8px] pr-[4px] flex items-center justify-center gap-[4px] hover:cursor-pointer"
        >
          <div className="w-[220px] h-[16px] flex items-center justify-center gap-[4px]">
            <img
              className="w-[16px] h-[16px]"
              src="Briefcase.png"
              alt="bag icon"
            />
            <div className="w-[200px] text-[#757575] text-[12px] leading-[16px] font-semibold tracking-wide">
              Job Request
            </div>
          </div>
          <div className="w-[20px] h-[20px] flex items-center justify-center p-[4px]">
            <img
              className="w-[12px] h-[12px]"
              src="Chevron.png"
              alt="Chevron icon"
            />
          </div>
        </div>

        <div
          onClick={() => {
            handleClick("Submit date calender");
          }}
          className="w-[124px] bg-[#EEE] pl-[8px] pr-[4px] flex items-center justify-center gap-[4px] hover:cursor-pointer"
        >
          <div className="w-[88px] h-[16px] flex items-center justify-center gap-[4px]">
            <img
              className="w-[16px] h-[16px]"
              src="Calendar.png"
              alt="Calendar icon"
            />
            <div className="w-[68px] text-[#757575] text-[12px] leading-[16px] font-semibold tracking-wide">
              Submitted
            </div>
          </div>
          <div className="w-[20px] h-[20px] flex items-center justify-center p-[4px]">
            <img
              className="w-[12px] h-[12px]"
              src="Chevron.png"
              alt="Chevron icon"
            />
          </div>
        </div>

        <div
          onClick={() => {
            handleClick("Status options dropdown");
          }}
          className="w-[124px] bg-[#EEE] pl-[8px] pr-[4px] flex items-center justify-center gap-[4px] hover:cursor-pointer"
        >
          <div className="w-[88px] h-[16px] flex items-center justify-center gap-[4px]">
            <img
              className="w-[16px] h-[16px]"
              src="Chevron Circle.png"
              alt="Chevron Circle icon"
            />
            <div className="w-[68px] text-[#757575] text-[12px] leading-[16px] font-semibold tracking-wide">
              Status
            </div>
          </div>
          <div className="w-[20px] h-[20px] flex items-center justify-center p-[4px]">
            <img
              className="w-[12px] h-[12px]"
              src="Chevron.png"
              alt="Chevron icon"
            />
          </div>
        </div>

        <div
          onClick={() => {
            handleClick("Submitter dropdown");
          }}
          className="w-[124px] bg-[#EEE] pl-[8px] pr-[4px] flex items-center justify-center gap-[4px] hover:cursor-pointer"
        >
          <div className="w-[88px] h-[16px] flex items-center justify-center gap-[4px]">
            <img
              className="w-[16px] h-[16px]"
              src="Person.png"
              alt="Person icon"
            />
            <div className="w-[68px] text-[#757575] text-[12px] leading-[16px] font-semibold tracking-wide">
              Submitter
            </div>
          </div>
          <div className="w-[20px] h-[20px] flex items-center justify-center p-[4px]">
            <img
              className="w-[12px] h-[12px]"
              src="Chevron.png"
              alt="Chevron icon"
            />
          </div>
        </div>

        <div
          onClick={() => {
            handleClick("URL dropdown");
          }}
          className="w-[124px] bg-[#EEE] pl-[8px] pr-[4px] flex items-center justify-center gap-[4px] hover:cursor-pointer"
        >
          <div className="w-[88px] h-[16px] flex items-center justify-center gap-[4px]">
            <img
              className="w-[16px] h-[16px]"
              src="Globe.png"
              alt="Globe icon"
            />
            <div className="w-[68px] text-[#757575] text-[12px] leading-[16px] font-semibold tracking-wide">
              URL
            </div>
          </div>
          <div className="w-[20px] h-[20px] flex items-center justify-center p-[4px]">
            <img
              className="w-[12px] h-[12px]"
              src="Chevron.png"
              alt="Chevron icon"
            />
          </div>
        </div>

        <div className="w-[124px] bg-[#E8F0E9] pl-[8px] pr-[4px] flex items-center justify-center">
          <div className="w-[112px] h-[16px] flex items-center justify-center gap-[4px]">
            <img
              className="w-[16px] h-[16px]"
              src="Emoji.png"
              alt="Emoji icon"
            />
            <div className="w-[92px] text-[#666C66] text-[12px] leading-[16px] font-semibold tracking-wide">
              Assigned
            </div>
          </div>
        </div>

        <div className="w-[125px] bg-[#EAE3FC] pl-[8px] pr-[4px] flex items-center justify-start">
          <div className="w-[112px] h-[16px] text-[#666C66] text-[12px] leading-[16px] font-semibold tracking-wide">
            Priority
          </div>
        </div>
        <div className="w-[125px] bg-[#EAE3FC] pl-[8px] pr-[4px] flex items-center justify-start">
          <div className="w-[113px] h-[16px] text-[#666C66] text-[12px] leading-[16px] font-semibold tracking-wide">
            Due Date
          </div>
        </div>

        <div className="w-[124x] bg-[#FFE9E0] pl-[8px] pr-[4px] flex items-center justify-start">
          <div className="w-[112px] h-[16px] text-[#8C6C62] text-[12px] leading-[16px] font-semibold tracking-wide">
            Est. Value
          </div>
        </div>

        <input className="w-[124px] p-[8px] bg-white border-x-[2px] border-dashed border-y-[1px] border-y-[#EEE] border-[#CCC] box-border"></input>
      </div>
    </div>
  );
};

export default Sheettop;
