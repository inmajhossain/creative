import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-[50px] w-full h-[85vh]">
      <h1 className="font-bold text-6xl">Sorry, Page Not Found</h1>
      <button className="bg-black dark:bg-cyan-950 px-6 py-3 rounded-[10px] font-medium text-white">
        <Link href="/home">Please Go To Home Page</Link>
      </button>
    </div>
  );
}
