import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";

const footerSocials = [
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/company/piazzaconsulting",
  },
  {
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/piazzaconsulting/",
  },
];

export const Footer = () => {
  return (
    <footer id="contact" className="relative w-full pt-20 pb-10 mb-[100px] md:mb-auto overflow-hidden">
      {/* Background grid image */}
      <div className="absolute -bottom-72 left-0 min-h-96 w-full -z-10 pointer-events-none">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 flex flex-col items-center">
        {/* CTA Section */}
        <div className="flex flex-col items-center w-full mb-24 relative z-10">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to <span className="text-purple">transform</span> your hiring
            process?
          </h1>

          <p className="my-5 text-center text-white-200 md:mt-10 max-w-2xl text-lg">
            Start using D360 ACE to automate hiring, eliminate bias, and discover
            real talent.
          </p>

          <Link href="/contact-us" className="md:mt-10 mt-5">
            <MagicButton
              title="Get Started Now"
              icon={<FaLocationArrow />}
              position="right"
              asChild
            />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16 relative z-10" />

        {/* 4 Column SaaS Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 relative z-10">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-6 md:pr-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                D360 <span className="text-purple">ACE</span>
              </h2>
            </Link>
            <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xs">
              Start using D360 ACE to automate hiring, eliminate bias, and discover real talent.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <ul className="flex flex-col space-y-4 text-sm md:text-base text-gray-400">
              <li>
                <Link href="#about" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block focus:outline-none focus:text-white w-fit">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block focus:outline-none focus:text-white w-fit">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block focus:outline-none focus:text-white w-fit">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block focus:outline-none focus:text-white w-fit">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="flex flex-col space-y-4 text-sm md:text-base text-gray-400">
              <li>
                <Link 
                  href="https://piazza-website-beta.vercel.app/work.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Piazza Consulting Group
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex items-center gap-4">
              {footerSocials.map((profile) => (
                <Link
                  key={profile.name}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-black-200/50 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 group hover:shadow-lg hover:shadow-purple/20 focus:outline-none focus:ring-2 focus:ring-purple"
                  title={profile.name}
                  aria-label={profile.name}
                >
                  <Image
                    src={profile.img}
                    alt={`${profile.name} icon`}
                    width={20}
                    height={20}
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 mt-4 relative z-10 gap-4 sm:gap-0">
          <p className="text-sm md:text-base text-gray-400 text-center sm:text-left w-full">
            Copyright &copy; 2026 D360 ACE. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
