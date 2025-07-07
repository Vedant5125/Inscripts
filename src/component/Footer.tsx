const Footer = () => {
  const handleClick = (word: string) => {
    console.log(`${word} was clicked`);
  };

  return (
    <div className="w-[1440px] h-[48px] pl-[32px] pr-[16px] bottom-0 fixed border-[1px] border-[#EEE] flex items-end z-30 bg-white">
      <div className="w-[437px] h-[44px] flex gap-0 items-center">
        <div
          onClick={() => {
            handleClick("All Orders");
          }}
          className="w-[111px] px-[16px] py-[10px] text-[16px] leading-[24px] font-semibold text-[#3E5741] bg-[#E8F0E9] border-t-[2px] border-[#4B6A4F] hover:cursor-pointer"
        >
          All Orders
        </div>
        <div
          onClick={() => {
            handleClick("Pending");
          }}
          className="w-[94px]  px-[16px] py-[10px] text-[16px] leading-[24px] font-semibold text-[#757575] hover:cursor-pointer"
        >
          Pending
        </div>
        <div
          onClick={() => {
            handleClick("Reviewed");
          }}
          className="w-[107px]  px-[16px] py-[10px] text-[16px] leading-[24px] font-semibold text-[#757575] hover:cursor-pointer"
        >
          Reviewed
        </div>
        <div
          onClick={() => {
            handleClick("Arrived");
          }}
          className="w-[89px]  px-[16px] py-[10px] text-[16px] leading-[24px] font-semibold text-[#757575] hover:cursor-pointer"
        >
          Arrived
        </div>
        <div
          onClick={() => {
            handleClick("Add button");
          }}
          className="w-[36px] h-[44px] "
        >
          <div className="w-[28px] h-[28px] text-[16px] text-[#757575] p-[4px] mt-2 hover:cursor-pointer">
            <img src="plus.png" alt="Plus Icon" className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
