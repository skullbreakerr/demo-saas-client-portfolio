/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { SocialLinks } from "../SocialLinks";
import { cn } from "@/lib/utils";
import moment from "moment";
export function Footer({ copyright, logo, links, social, ...rest }) {
  const mid = Math.ceil(links.length / 2);
  const columns = [links.slice(0, mid), links.slice(mid)];

  return (
    <footer
      className="bg-base-100 dark:bg-base-900 pt-12 min-h-[50vh] flex flex-col justify-between"
      {...rest}
    >
      <div className="container px-4 mx-auto flex-1 flex flex-col justify-center">
        <div
          className={cn(
            "flex flex-col gap-12 py-8 md:flex-row md:justify-between md:items-start"
          )}
        >
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="./logo.png"
              alt="logo"
              className="h-16 w-auto opacity-80 hover:opacity-100 dark:invert"
            />
            <SocialLinks links={social} />
          </div>
          {/* Links */}
          <div className="w-full flex flex-col sm:flex-row gap-8 justify-center md:w-auto">
            {columns.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3 min-w-[120px] items-center sm:items-start">
                {col.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    className="text-base text-base-700 dark:text-base-300 hover:text-primary-500 transition"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          {/* Company Info */}
          <div className="flex flex-col gap-3 min-w-[200px] text-base text-base-700 dark:text-base-300 mt-8 md:mt-0 items-center md:items-start">
            <h3 className="font-semibold text-lg mb-2">Company Info</h3>
            <p className="text-center md:text-left">
              123 Main Street, Suite 456<br />Your City, Country 12345
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+1234567890" className="hover:text-primary-500 transition">+1 234 567 890</a>
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@company.com" className="hover:text-primary-500 transition">info@company.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-base py-6 text-center">
        <p className="text-base text-base-500">&copy; {moment().year()} {copyright}</p>
      </div>
    </footer>
  );
}