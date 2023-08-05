import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

//  nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome className="nav-icon" /> },
  { name: "about", path: "/about", icon: <HiUser className="nav-icon" /> },
  { name: "work", path: "/work", icon: <HiViewColumns className="nav-icon" /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope className="nav-icon" />,
  },
];

// next link
import Link from 'next/link'

// next router
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()
  const pathname = router.pathname
  return <div className="flex justify-center fixed z-50 h-full w-full pointer-events-none">
    <div className="xl:container h-full w-full flex justify-end">
      <nav className='flex flex-col items-center xl:justify-center
  gap-y-4 h-max bottom-0 mt-auto xl:right-[2%] x-50 w-full
  xl:w-16 xl:max-w-md xl:h-screen z-50 pt-20'>
        {/* inner */}
        <div className='flex w-full xl:flex-col items-center justify-between 
    xl:justify-around px-[10%] md:px-40 xl:px-0 h-[80px] xl:h-[400px] py-8
    bg-white/10  shadow-md backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full pointer-events-auto'>
          {navData.map((link, index) => {
            return <Link
              className={`${link.path === pathname && 'text-accent'}
          relative flex items-center group hover:text-accent transition-all
          duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary
            items-center p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 
              border-y-transparent border-y-[6px] border-r-0 absolute
              -right-2' />
                </div>
              </div>
              {/* icon */}

              <div>{link.icon}</div>
            </Link>
          })}
        </div>
      </nav>
    </div>
  </div>
};

export default Nav;