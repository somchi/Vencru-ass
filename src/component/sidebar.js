import { SidebarSubTabs, SidebarTabs } from '../utilities/constants';
import { LogoSection } from './logo';
import { SidebarTab } from './sidebar-tab';

export const Sidebar = () => {
  return (
    <aside
      className="sidebar fixed top-0 bottom-0 md:left-0 left-[-280px] duration-1000
    p-2 w-[280px] overflow-y-auto shadow h-screen bg-white z-30"
    >
      <div className="justify-between items-center py-3 px-4 hidden md:grid">
        <LogoSection />
      </div>
      <div className="py-3 px-6">
        <div className="relative text-gray-500 focus-within:text-gray-400 border-gray-300">
          <span className="absolute inset-y-0 left-0 flex items-center pl-1">
            <button type="submit" className="pl-[-2px] focus:outline-none focus:shadow-outline">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-base border text-gray-500 border-gray-300 bg-white rounded-lg pl-7 pr-1 focus:outline-none focus:text-gray-500"
            placeholder="Search"
          />
        </div>
        <nav className="tabs  pt-6">
          {SidebarTabs.map((item, index) => (
            <SidebarTab key={index} image={item.image} tabTitle={item.title} badge={item.badge} />
          ))}
        </nav>
      </div>
      <div className="footer py-3 px-6">
        <nav className="tabs">
          {SidebarSubTabs.map((item, index) => (
            <SidebarTab key={index} image={item.image} tabTitle={item.title} badge={item.badge} />
          ))}
        </nav>

        <div className="flex-col my-4">
          <div className="mb-4">
            <span className="text-gray-900 text-sm font-medium">New features avaliable</span>
            <h4 className="text-gray-500 text-sm font-normal">
              Update your billing details and address
            </h4>
          </div>
          <div>
            <div className="rounded-md mb-4">
              <img className="rounded-md" src="../feature.png" />
            </div>

            <div className="flex">
              <span className="font-medium text-sm text-gray-500">Dismiss</span>
              <span className="font-medium text-sm text-[#6941C6] ml-3">What&apos;s new?</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-8">
          <div className="flex justify-between items-start">
            <div className="flex justify-between">
              <img src="../account-avatar.png" />
              <div className="flex flex-col  ml-2">
                <span className="text-gray-900 text-sm font-medium">Olivia Rhye</span>
                <span className="text-gray-500 text-sm font-normal">olivia@untitledui.com</span>
              </div>
            </div>
            <span className="">
              {' '}
              <img src="../logout.png" />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
