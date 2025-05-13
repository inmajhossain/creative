import { motion } from "framer-motion";

export default function ChairmanNote() {
  return (
    <motion.div
      animate={{ opacity: [0, 100] }}
      transition={{ duration: 3, delay: 2 }}
      className="bg-cyan-100 dark:bg-cyan-950/90 shadow-lg mx-auto mt-[50px] lg:mt-[100px] p-6 border-3 border-cyan-400 w-[380px] md:w-[768px] lg:w-[1024px] xl:w-[1200px] text-black text-md text-center"
    >
      <h2 className="block mx-auto mb-4 py-[10px] dark:border-amber-100 border-b-3 border-black lg:w-[350px] font-thin text-md dark:text-white lg:text-2xl lobster">
        Message From Chairman...
      </h2>
      <h2 className="mb-4 font-bold dark:text-cyan-400 lg:text-4xl">
        Welcome to Creative Tape Industries Ltd.
      </h2>
      <div className="flex flex-col justify-around items-start gap-[10px] mb-[20px] lg:px-[30px] lg:text-left">
        <h4 className="dark:text-green-400">
          Bangladesh is a densely populated developing country, where industrial
          investment is one of the government's top priorities. To achieve
          long-term national growth, development plans are increasingly focused
          on strengthening key economic sectors. As the country's economy is
          primarily driven by the Ready-Made Garments (RMG) industry, further
          industrial development within this sector could serve as a cornerstone
          for sustained economic advancement.
        </h4>
        <h4 className="dark:text-white">
          However, it is a matter of concern that, despite living in an era of
          science and technology, exports from the garments sector are not
          increasing at the desired pace. In light of this, and following the
          successful launch and operation of various leading export businesses
          in the country, we have decided to establish a garments accessories
          manufacturing and supply company named Creative Tape Industries Ltd.
        </h4>
        <h4 className="dark:text-green-400">
          Creative Tape Industries Ltd. offers the most comprehensive and
          competitive range of bottom trims for the Ready-Made Garments sector.
          We are committed to delivering complete customer satisfaction and
          providing round-the-clock service. Our team of experts works with
          dedication and passion, empowering our buyers through reliable
          support.
        </h4>
        <h4 className="dark:text-white">
          With years of experience in the garments industry, we have developed
          the knowledge and expertise necessary to meet the diverse needs of our
          customers. We offer flexibility, competitive pricing, and faster lead
          times to meet market demands. Our supply chain is supported by a
          dynamic, professional team, ensuring efficient and responsive service
          to our clients.
        </h4>
        <h4 className="dark:text-green-400">
          Our belief, "Together Everyone Achieves More," reflects our commitment
          to collaboration. By working closely with our valued buyers, we
          understand their needs and actively engage in fulfilling them. Through
          this partnership, we realize our vision: "Customer satisfaction is our
          main motto."
        </h4>
        {/* Closing Tag */}
        <div className="flex flex-row justify-between items-center gap-2 mx-auto mt-[10px]">
          <h3 className="bg-black dark:bg-white w-[40px] h-[3px]"></h3>
          <h3 className="bg-black dark:bg-white rounded-full w-[10px] h-[10px]"></h3>
          <h3 className="bg-black dark:bg-white w-[40px] h-[3px]"></h3>
        </div>
      </div>
    </motion.div>
  );
}
