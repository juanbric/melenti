import React from "react";

export const Skeleton = () => {
  return (
    <div className="py-4 lg:py-8 w-full">
      <div className="bg-[#ebecf0] rounded-[22px] h-[300px]" />
      <div className="bg-[#ebecf0] rounded-[22px] h-[40px] mt-8" />
      <div className="bg-[#ebecf0] rounded-[22px]  h-[20px] mt-8" />
      <div className="bg-[#ebecf0] rounded-[22px]  h-[20px] mt-4" />
    </div>
  );
};

export default Skeleton;