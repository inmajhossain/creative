// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/Header/dropdown-menu";

// export function ModeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="icon"
//           className="bg-white hover:bg-white hover:shadow-[0_0_20px_10px_#61caff]"
//         >
//           <Sun className="w-[1.2rem] h-[1.2rem] rotate-0 dark:-rotate-90 scale-100 dark:scale-0 transition-all" />
//           <Moon className="absolute w-[1.2rem] h-[1.2rem] rotate-90 dark:rotate-0 scale-0 dark:scale-100 transition-all" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         align="center"
//         className="flex flex-col justify-center items-center bg-white dark:bg-cyan-950 mt-[10px] border-1 border-cyan-400"
//       >
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>

//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // After mounting, we can safely show the UI that depends on client-side features
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="bg-transparent">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent hover:shadow-[0_0_7px_4px_#61caff] border-2 border-cyan-400 dark:border-2 dark:border-cyan-400 rounded-full size-[50px] hover-text-white"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-500" />
      ) : (
        <Moon className="w-8 h-5 text-amber-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
