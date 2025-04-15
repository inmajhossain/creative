import Image, { StaticImageData } from "next/image";
import image1 from "@/image/profile-image-3.webp"; // Ensure the correct path and filename
import image2 from "@/image/profile-image.webp"; // Ensure the correct path and filename
import image3 from "@/image/profile-image-2.webp"; // Ensure the correct path and filename
import { Lobster } from "next/font/google";

// Define the ImageCard component
const ImageCard = ({
  image,
  name,
  designation,
}: {
  image: StaticImageData;
  name: string;
  designation: string;
}) => {
  return (
    <div className="justify-around bg-cyan-950 shadow-[10px] hover:shadow-[0_0_7px_4px_#61caff] active:shadow-[0_0_10px_5px_rgba(168,85,247,0.4)] p-2 border-1 border-amber-100 rounded-[20px] w-[290px] h-[430px] overflow-hidden text-center hover:scale-105 transition-transform duration-700 container transform">
      <Image
        src={image}
        alt={name}
        className="rounded-t-[20px] w-[280px] h-auto object-contain"
      />
      <h3 className="mt-2 font-semibold text-white text-lg">{name}</h3>
      <p className="text-amber-100">{designation}</p>
    </div>
  );
};

// Main Directors component
const Directors = () => {
  const people = [
    {
      image: image1,
      name: "Mrs. Tohin Ara Mollick",
      designation: "Chairman",
    },
    {
      image: image2,
      name: "Md. Rouf Khan Rubel",
      designation: "Managing Director",
    },
    {
      image: image3,
      name: "Md. Ibrahim Hossain",
      designation: "Director",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-[50px] mb-[50px] py-[20px] rounded-2xl w-full lg:w-[1280px] min-h-[500px]">
      <div>
        <h2 className="mb-[30px] py-[10px] border-cyan-400 dark:border-cyan-400 border-b-2 lg:border-b-5 w-[380px] lg:w-[1280px] dark:text-cyan-400 text-2xl lg:text-5xl text-center lobster">
          Honurable Board of Directors
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-[50px] lg:mt-[-30px] py-[30px] border-cyan-400 dark:border-cyan-400 border-b-2 lg:border-b-5 lg:w-[1280px]">
        {people.map((person, index) => (
          <ImageCard
            key={index}
            image={person.image}
            name={person.name}
            designation={person.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default Directors;
