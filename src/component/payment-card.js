import { useState } from 'react';

export const Card = ({ title, expire, active, logo, onClick, name }) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    onClick(name);
    setChecked((checked) => !checked);
  };

  return (
    <div
      className={`flex justify-between cursor-pointer ${
        active ? 'bg-primary-50' : 'bg-white'
      } border ${active ? 'border-primary-300' : 'border-gray-200'} rounded-lg mb-3 py-4 px-5`}
      onClick={handleClick}
    >
      <div className="flex items-start">
        <div className="grid mt-2 bg-white p-2">
          <img src={logo} />
        </div>
        <div className={`grid items-center ml-6 ${active ? 'text-primary-600' : 'text-gray-700'}`}>
          <span
            className={'text-sm font-medium' + `${active ? ' text-primary-800' : ' text-gray-700'}`}
          >
            {title}
          </span>
          <span
            className={'text-sm font-normal' + `${active ? ' text-primary-600' : ' text-gray-500'}`}
          >
            Expiry {expire}
          </span>
          <div className="flex">
            <span
              className={
                'text-sm font-medium' + `${active ? ' text-primary-500' : ' text-gray-500'}`
              }
            >
              Set as default
            </span>
            <span className="text-sm font-normal ml-4 text-primary-700">Edit</span>
          </div>
        </div>
      </div>

      <div>
        <input type="radio" name="payment" checked={checked} onChange={handleClick} />
      </div>
    </div>
  );
};
