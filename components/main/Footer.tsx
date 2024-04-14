import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import Link from 'next/link'
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <Link href="https://www.youtube.com/@CODEWITHRAHUL./videos"
                             className="text-[15px] ml-[6px]">Youtube
                        </Link>
                    </p>
        
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <Link href="https://github.com/rahulgarg55?tab=repositories">
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </Link>
                    </p>
        
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <Link href="https://discord.com/your-server-id">
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </Link>
                    </p>
                </div>
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <Link href="https://www.instagram.com/your-instagram-id">
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </Link>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <Link href="https://twitter.com/your-twitter-id">
                            <span className="text-[15px] ml-[6px]">Twitter</span>
                        </Link>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <Link href="https://www.linkedin.com/in/your-linkedin-id">
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </Link>
                    </p>
                </div>

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <Link href="https://your-sponsor-page-link">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </Link>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <Link href="https://about-me-page-link">
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </Link>
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <Link href="mailto:mifwebchain@gmail.com">
                            <span className="text-[15px] ml-[6px]">mifwebchain@gmail.com</span>
                        </Link>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; WebChain Dev 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer;
