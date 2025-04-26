import React from "react";

export default function Location() {
  return (
    <div className="flex flex-col justify-between items-center gap-[50px] lg:h-[700px]">
      <div>
        <h3 className="mx-auto mt-[20px] lg:w-[600px] font-semibold text-[30px] lg:text-[45px] text-center">
          Our{" "}
          <span className="hover:shadow-[0_0_7px_4px_#61caff] px-[10px] py-[5px] rounded-full text-cyan-400 transition-all duration-800">
            Location{" "}
          </span>
        </h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.529947905319!2d90.28912848579054!3d23.906281327519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e82cb79e2561%3A0x2439e405d249295c!2sCreative%20Tape%20Industries%20Ltd!5e0!3m2!1sen!2sbd!4v1745658115255!5m2!1sen!2sbd"
        className="mx-auto mb-[50px] p-2 border-[1px] border-amber-100 rounded-md w-[380px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] h-[350px] lg:h-[500px]"
        loading="lazy"
      ></iframe>
    </div>
  );
}
