import { LogoSection } from './component/logo';
import { Main } from './component/main';
import { Sidebar } from './component/sidebar';

const App = () => {
  const Opensidebar = () => {
    document.querySelector('.sidebar').classList.toggle('left-[-280px]');
  };

  return (
    <div className="bg-[#F5F5F5] font-[Inter] text-gray-900">
      <div className="justify-between items-center py-3 px-4 mb-8 bg-white flex md:hidden">
        <LogoSection />
        <span className="text-white text-4xl cursor-pointer" onClick={Opensidebar}>
          <img src="../icon.png" />
        </span>
      </div>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
