'use client'
import { useState } from 'react';
import '../styles/layout.css'
import { X } from 'lucide-react';
import "../styles/globals.css";
import "../styles/layout.css";
import Link from 'next/link';
import Image from 'next/image'
import CreonLogo from '../../public/images/logo.png'
import Soon from '../../public/images/soon.png'
import { Twitter, Menu } from 'lucide-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavVisible(!navVisible);
    console.log(navVisible);
  };
  return (
    <html lang="en">
      <body className='h-screen'>
        <div className="navigation-container">
          <div className="logo-container">
            <Link href='/'>
              <Image
                src={CreonLogo}
                alt="Creon logo"
                width={140}
                height={39}
              />
            </Link>
          </div>
          <button className={`exit-button z-50 ${!navVisible ? '' : 'hide'}`}onClick={toggleNav}>
            <div className="exit-img">
              <Menu />
            </div>
          </button>
          {navVisible && <nav className={`nav-container ${navVisible ? '' : 'hide'}`}>
            <div className={`nav-container`}>
              <div className={`navigation-exit`}>
                <button className="exit-button" onClick={toggleNav} >
                  <div className="exit-img hover:bg-blue-500 transition-colors duration-200">
                    <X />
                  </div>
                </button>
              </div>
              <ul className="">
                <li className="p-6  hover:bg-blue-500 transition-colors duration-200">
                  <Image
                    src={Soon}
                    alt="Soon mark"
                    width={38}
                    height={14}
                  />
                  <Link href='Creon_Pass'>Creon Pass</Link>
                </li>
                <li className="p-6 hover:bg-blue-500 transition-colors duration-200">
                  <Image
                    src={Soon}
                    alt="Soon mark"
                    width={38}
                    height={14}
                  />
                  <Link href='Token'>Token</Link>
                </li>
                <li className="p-6 hover:bg-blue-500 transition-colors duration-200">
                  <Image
                    src={Soon}
                    alt="Soon mark"
                    width={38}
                    height={14}
                  />
                  <Link href='AI_Revenue'>AI Revenue</Link>
                </li>
                <li className="p-6 hover:bg-blue-500 transition-colors duration-200">
                  <Image
                    src={Soon}
                    alt="Soon mark"
                    width={38}
                    height={14}
                  />
                  <Link href='AI_Launchpad'>AI Launchpad</Link>
                </li>
                <li>
                  <Link href='connect'>
                    <button className="m-7 border-2 border-white rounded-lg box-border w-32 h-11 relative top-1/2 transform -translate-y-1/2 hover:bg-blue-500 transition-colors duration-200">
                      connect
                    </button>
                  </Link>
                </li>
              </ul>

              <div className="nav-socials">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17" cy="17" r="16" stroke="white" stroke-width="2" />
                  <path d="M22.1396 10.9193L10.3269 15.9966C9.85152 16.233 9.69074 16.7065 10.212 16.9635L13.2425 18.0369L20.5697 12.9895C20.9698 12.6727 21.3794 12.7572 21.027 13.1057L14.7338 19.4567L14.5361 22.1445C14.7192 22.5595 15.0545 22.5614 15.2683 22.3551L17.0094 20.5189L19.9913 23.0077C20.6839 23.4647 21.0608 23.1698 21.2098 22.3321L23.1656 12.0096C23.3687 10.9785 23.0224 10.5242 22.1396 10.9193Z" fill="white" />
                </svg>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_573_302)">
                    <circle cx="17" cy="17" r="16" stroke="white" stroke-width="2" />
                    <path d="M22.2269 11.9071C21.2394 11.4221 20.1946 11.0774 19.1202 10.8823C18.9864 11.1363 18.83 11.4778 18.7222 11.7495C17.5639 11.5667 16.4162 11.5667 15.2791 11.7495C15.1713 11.4779 15.0115 11.1363 14.8764 10.8823C13.801 11.0775 12.7553 11.423 11.7673 11.9096C9.80117 15.0281 9.26817 18.0691 9.53464 21.067C10.8387 22.0891 12.1025 22.7101 13.3449 23.1164C13.6537 22.6707 13.9267 22.1988 14.161 21.7056C13.7149 21.5274 13.2848 21.3077 12.8759 21.0492C12.9835 20.9655 13.0886 20.8783 13.191 20.7876C15.6688 22.004 18.361 22.004 20.8092 20.7876C20.9121 20.8777 21.0171 20.9649 21.1242 21.0492C20.7147 21.3084 20.2838 21.5285 19.8368 21.7069C20.0725 22.2021 20.3449 22.6744 20.6529 23.1176C21.8965 22.7114 23.1615 22.0904 24.4655 21.067C24.7782 17.5917 23.9314 14.5786 22.2269 11.907V11.9071ZM14.4986 19.2233C13.7548 19.2233 13.1448 18.4945 13.1448 17.6069C13.1448 16.7194 13.7418 15.9893 14.4986 15.9893C15.2555 15.9893 15.8654 16.7181 15.8524 17.6069C15.8536 18.4945 15.2555 19.2233 14.4986 19.2233ZM19.5016 19.2233C18.7578 19.2233 18.1478 18.4945 18.1478 17.6069C18.1478 16.7194 18.7448 15.9893 19.5016 15.9893C20.2585 15.9893 20.8684 16.7181 20.8554 17.6069C20.8554 18.4945 20.2585 19.2233 19.5016 19.2233Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_573_302">
                      <rect width="34" height="34" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div >
                  <Twitter className="twitter" />
                </div>
              </div>
            </div>
          </nav>}
        </div>
        <main>
          {children}
        </main>
        <footer className="footer">
          <p>© Creon 2023. All rights reserved.</p>
          <div className="icons">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17" r="16" stroke="white" stroke-width="2" />
              <path d="M22.1396 10.9193L10.3269 15.9966C9.85152 16.233 9.69074 16.7065 10.212 16.9635L13.2425 18.0369L20.5697 12.9895C20.9698 12.6727 21.3794 12.7572 21.027 13.1057L14.7338 19.4567L14.5361 22.1445C14.7192 22.5595 15.0545 22.5614 15.2683 22.3551L17.0094 20.5189L19.9913 23.0077C20.6839 23.4647 21.0608 23.1698 21.2098 22.3321L23.1656 12.0096C23.3687 10.9785 23.0224 10.5242 22.1396 10.9193Z" fill="white" />
            </svg>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_573_302)">
                <circle cx="17" cy="17" r="16" stroke="white" stroke-width="2" />
                <path d="M22.2269 11.9071C21.2394 11.4221 20.1946 11.0774 19.1202 10.8823C18.9864 11.1363 18.83 11.4778 18.7222 11.7495C17.5639 11.5667 16.4162 11.5667 15.2791 11.7495C15.1713 11.4779 15.0115 11.1363 14.8764 10.8823C13.801 11.0775 12.7553 11.423 11.7673 11.9096C9.80117 15.0281 9.26817 18.0691 9.53464 21.067C10.8387 22.0891 12.1025 22.7101 13.3449 23.1164C13.6537 22.6707 13.9267 22.1988 14.161 21.7056C13.7149 21.5274 13.2848 21.3077 12.8759 21.0492C12.9835 20.9655 13.0886 20.8783 13.191 20.7876C15.6688 22.004 18.361 22.004 20.8092 20.7876C20.9121 20.8777 21.0171 20.9649 21.1242 21.0492C20.7147 21.3084 20.2838 21.5285 19.8368 21.7069C20.0725 22.2021 20.3449 22.6744 20.6529 23.1176C21.8965 22.7114 23.1615 22.0904 24.4655 21.067C24.7782 17.5917 23.9314 14.5786 22.2269 11.907V11.9071ZM14.4986 19.2233C13.7548 19.2233 13.1448 18.4945 13.1448 17.6069C13.1448 16.7194 13.7418 15.9893 14.4986 15.9893C15.2555 15.9893 15.8654 16.7181 15.8524 17.6069C15.8536 18.4945 15.2555 19.2233 14.4986 19.2233ZM19.5016 19.2233C18.7578 19.2233 18.1478 18.4945 18.1478 17.6069C18.1478 16.7194 18.7448 15.9893 19.5016 15.9893C20.2585 15.9893 20.8684 16.7181 20.8554 17.6069C20.8554 18.4945 20.2585 19.2233 19.5016 19.2233Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_573_302">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_573_303)">
                <circle cx="17" cy="17" r="16" stroke="white" stroke-width="2" />
                <path d="M24.3337 12.4234C23.7943 12.664 23.2149 12.8265 22.6058 12.8999C23.2343 12.5215 23.7045 11.9257 23.9287 11.224C23.3382 11.577 22.6919 11.8254 22.018 11.9586C21.5648 11.4716 20.9645 11.1488 20.3103 11.0403C19.6562 10.9318 18.9847 11.0438 18.4002 11.3587C17.8157 11.6737 17.3509 12.174 17.0779 12.7821C16.8049 13.3902 16.7391 14.0719 16.8905 14.7215C15.694 14.6611 14.5236 14.3481 13.455 13.8029C12.3865 13.2577 11.4439 12.4924 10.6882 11.5568C10.4298 12.0054 10.2813 12.5255 10.2813 13.0794C10.281 13.578 10.403 14.069 10.6365 14.5088C10.8699 14.9486 11.2077 15.3236 11.6197 15.6005C11.1418 15.5852 10.6746 15.4552 10.2567 15.2215V15.2605C10.2567 15.9598 10.497 16.6377 10.937 17.1789C11.377 17.7202 11.9895 18.0916 12.6706 18.2302C12.2273 18.3509 11.7626 18.3687 11.3116 18.2822C11.5037 18.8839 11.878 19.4101 12.3821 19.7871C12.8862 20.1641 13.4948 20.373 14.1227 20.3846C13.0568 21.2268 11.7404 21.6836 10.3853 21.6816C10.1452 21.6816 9.90539 21.6675 9.66699 21.6393C11.0425 22.5294 12.6437 23.0018 14.279 23C19.8147 23 22.8409 18.3855 22.8409 14.3835C22.8409 14.2535 22.8377 14.1221 22.8319 13.9921C23.4205 13.5637 23.9286 13.0332 24.3324 12.4254L24.3337 12.4234Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_573_303">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>Powered by NIFTABLE</p>
        </footer>
      </body>
    </html >
  );
}
