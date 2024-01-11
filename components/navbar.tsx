"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = () => {
  return (
    <>
      <nav className="max-w-[1180px] w-full mx-auto h-[80px] px-2 sm:px-10 bg-transparent">
        <div className="flex flex-row items-center justify-between h-full">
          <a href="/" className=" cursor-pointer flex gap-1">
            <div>
              <svg
                width="31px"
                height="25px"
                viewBox="0 -28.5 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill="white"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
            </div>
            <div className=" font-bold text-lg">Discord</div>
          </a>
          <div className=" max-[870px]:hidden">
            <a
              href="/#"
              className=" mx-[10px] p-[10px] hover:underline hover:decoration-2  text-[13px] font-semibold"
            >
              Download
            </a>
            <a
              href="/#"
              className=" mx-[10px] p-[10px] hover:underline hover:decoration-2  text-[13px] font-semibold"
            >
              Nitro
            </a>
            <a
              href="/#"
              className=" mx-[10px] p-[10px] hover:underline hover:decoration-2  text-[13px] font-semibold"
            >
              Discover
            </a>
            <a
              href="/#"
              className=" mx-[10px] p-[10px] hover:underline hover:decoration-2  text-[13px] font-semibold"
            >
              Safety
            </a>
            <a
              href="/#"
              className=" mx-[10px] p-[10px] hover:underline hover:decoration-2  text-[13px] font-semibold"
            >
              Support
            </a>
            <a
              href="/#"
              className=" mx-[10px] p-[10px] hover:underline hover:decoration-2  text-[13px] font-semibold"
            >
              Blog
            </a>
            <a
              href="/#"
              className=" mx-[10px] p-[10px] hover:underline hover:decoration-2  text-[13px] font-semibold"
            >
              Careers
            </a>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <button 
            className=" w-[110px] py-[7px] px-[10px] h-[38px] hover:text-[#404eed] rounded-full bg-white text-black font-semibold hover:shadow-2xl  ">
              <a  href="/sign-in" className=" text-[13px] ">
                Open Discord
              </a>
            </button>
            <button className="min-[870px]:hidden ">
              <Sheet>
                <SheetTrigger asChild>
                  <Menu />
                </SheetTrigger>
                <SheetContent className=" pt-[12px] bg-white text-black w-[300px] rounded-l-lg ">
                  <SheetHeader className=" pb-8 border-b border-gray-100 ">
                    <SheetTitle  >
                      <div className=" flex items-center gap-1">
                        <div>
                          <svg
                            width="35px"
                            height="30px"
                            viewBox="0 -28.5 256 256"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="xMidYMid"
                          >
                            <g>
                              <path
                                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                                fill="black"
                                fill-rule="nonzero"
                              />
                            </g>
                          </svg>
                        </div>
                        <div className=" font-extrabold text-black text-lg">Discord</div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col w-full h-full" >
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal bg-slate-100 rounded-md underline text-blue-400">Home</a>
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal hover:bg-slate-100 rounded-md hover:underline hover:text-blue-400">Download</a>
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal hover:bg-slate-100 rounded-md hover:underline hover:text-blue-400">Nitro</a>
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal hover:bg-slate-100 rounded-md hover:underline hover:text-blue-400">Discover</a>
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal hover:bg-slate-100 rounded-md hover:underline hover:text-blue-400">Safety</a>
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal hover:bg-slate-100 rounded-md hover:underline hover:text-blue-400">Support</a>
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal hover:bg-slate-100 rounded-md hover:underline hover:text-blue-400">Blog</a>
                  <a href="/#" className=" w-full h-[40px] py-2 px-4 text-[14px] font-normal hover:bg-slate-100 rounded-md hover:underline hover:text-blue-400">Careers</a>
                  </nav>
                  
                </SheetContent>
              </Sheet>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
