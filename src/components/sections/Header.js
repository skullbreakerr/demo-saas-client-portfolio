import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "#/base";
import { ThemeSwitch } from "#/ThemeSwitch";
import Link from "next/link";

export function Header({ logo, links, buttons, className, ...rest }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full bg-base-50/50 dark:bg-base-950/50 backdrop-blur-xl z-10">
      <nav
        className={cn(
          "relative h-14 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8",
          className
        )}
        {...rest}
      >
        <Link href={logo.href}>
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto hover:animate-spin dark:invert"
          />
        </Link>
        <div
          className={cn(
            "hidden md:block md:w-auto",
            open &&
              "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"
          )}
        >
<ul className="font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
  {links.map((link, index) => {
    const isActive = pathname === link.href;
    return (
      <li key={index} className="group relative">
        <Link
          href={link.href}
          className={cn(
            "relative text-sm font-normal text-base-600 dark:text-base-400 transition-colors duration-300 px-2 py-2 md:px-0 md:py-0",
            open
              ? "hover:bg-base-100 dark:hover:bg-base-950 py-3 px-4 rounded-md"
              : "hover:text-base-800 dark:hover:text-base-300",
            isActive &&
              "font-semibold dark:text-primary-400"
          )}
          style={{ position: "relative" }}
          onClick={() => setOpen(false)}
        >
          {link.label}
          <span
            className={cn(
              "absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-[#000000f5] dark:bg-primary-400 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100",
              isActive && "scale-x-100"
            )}
          />
        </Link>
      </li>
    );
  })}
</ul>

        </div>
        <div className="flex gap-2 ml-auto">
          <ThemeSwitch />
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
        <Button
          icon={open ? "tabler:x" : "tabler:menu-2"}
          color="transparent"
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
        />
      </nav>
    </header>
  );
}