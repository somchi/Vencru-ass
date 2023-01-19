export const Card = ({ title, expire, active, logo, onClick, name }) => {
  return (
    <div className={`flex justify-between ${active? 'bg-[#F9F5FF]' : 'bg-white'} border ${active? 'border-[#D6BBFB]' : 'border-gray-200'} rounded-lg mb-3 py-4 px-5`}>
      <div className="flex items-start">
        <div className="grid mt-2 bg-white p-2">
          <img src={logo} />
        </div>
        <div className={`grid items-center ml-6 ${active? 'text-[#7F56D9]' : ''}`}>
          <span className="text-sm font-medium">{title}</span>
          <span className="text-sm font-normal">Expiry {expire}</span>
          <div className="flex">
            <span className="text-sm font-medium">Set as default</span>
            <span className="text-sm font-normal ml-4 text-[#7F56D9]">Edit</span>
          </div>
        </div>
      </div>

      <div onClick={()=>onClick(name)}>
        <input type="radio" name="payment" />
      </div>
    </div>
  );
};
