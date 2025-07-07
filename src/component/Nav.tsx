import { MdChevronRight } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
const Nav = () => {
  const textColor = () => {
    return "text-[#AFAFAF]";
  };

  const handleClick = (word: string) => {
    console.log(`${word} was clicked`);
  };

  return (
    // left-side tabs
    <div className="w-[1440px] h-[56px] top-0 flex justify-between items-center px-[16px] py-[8px] fixed z-30 bg-white">
      <div className="w-[343px] h-[24px] flex gap-[8px]">
        <img
          src="/image.png"
          alt="Logo"
          className="h-[24px] w-[24px] mr-[9px]"
        />
        <div
          onClick={() => {
            handleClick("Workspace");
          }}
          className={`${textColor()} h-[20px] w-[76px] text-[14px] leading-[20px] hover:cursor-pointer`}
        >
          Workspace
        </div>
        <MdChevronRight className={`mt-[5px] ${textColor()}`} />
        <div
          onClick={() => {
            handleClick("Folder 2");
          }}
          className={`${textColor()} h-[20px] w-[58px] text-[14px] leading-[20px] hover:cursor-pointer`}
        >
          Folder 2
        </div>
        <MdChevronRight className={`mt-[5px] ${textColor()}`} />
        <div
          onClick={() => {
            handleClick("Spreadsheet 3");
          }}
          className="text-[#121212] h-[20px] w-[101px] text-[14px] leading-[20px] hover:cursor-pointer"
        >
          Spreadsheet 3
        </div>
        <BiDotsHorizontalRounded
          onClick={() => {
            handleClick("More options");
          }}
          className="h-[24px] w-[24px] text-[#AFAFAF] hover:cursor-pointer"
        />
      </div>

      {/* right-side tabs */}
      <div className="w-[325px] h-[40px] flex justify-between items-center px-4 gap-[4px]">
        <div className="w-[165px] relative  flex gap-[8px] bg-[#F6F6F6] border border-[#E2E2E2] rounded-md ">
          <CiSearch
            onClick={() => {
              handleClick("Search");
            }}
            className="ml-[12px] h-[16px] mt-[12px] w-[16px] text-[#AFAFAF] font-semibold hover:cursor-pointer "
          />
          <input
            className="w-[117px] h-[40px] text-[12px] leading-[16px] bg-[#F6F6F6] outline-none  placeholder:h-[16px] placeholder:text-[#757575]"
            placeholder="Search within sheet"
          />
        </div>
        <div className="w-[40px] relative">
          <GoBell
            onClick={() => handleClick("Notifications")}
            className="h-[24px] mx-[8px] w-[24px] hover:cursor-pointer"
          />
          <p className="h-[16px] w-[16px] text-[10px] font-medium bg-[#4B6A4F] rounded-full absolute -top-2 left-5 text-white flex items-center justify-center">
            2
          </p>
        </div>
        <div
          onClick={() => handleClick("Profile")}
          className="w-[112px] flex gap-[8px] items-center relative hover:cursor-pointer"
        >
          <img
            className="h-[28px] w-[28px] rounded-full relative"
            src="/profileimg.png"
            alt="Profile"
          />
          <div className="w-auto h-[26px]  flex flex-col justify-center">
            <p className="text-[#121212] h-[16px] text-[12px] leading-[16px] font-normal">
              John Doe
            </p>
            <label className="text-[#757575] h-[px] text-[10px] font-normal leading-[12px] tracking-normal">
              john.doe...
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
