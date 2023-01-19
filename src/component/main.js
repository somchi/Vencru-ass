import { useState } from 'react';
import { TABS } from '../utilities/enums';
import { BillHistoryTable } from './billing-table';
import { Card } from './payment-card';

export const Main = () => {
  const [active, setActive] = useState('')
  const handleClick=(name)=>{
      setActive(name)
  }

  return (
    <main className="md:ml-[280px] ml-0">
      <div className="flex-col">
        <div className="px-4 my-5">
          <h3 className="text-gray-900 text-2xl font-medium">Settings</h3>
          <h4 className="text-[#667085] text-base font-normal">
            Manage your team and preferences here.
          </h4>
        </div>
        <div className="grid grid-flow-col auto-cols-max drop-shadow overflow-x-auto md:px-4">
          {Object.keys(TABS).map((item, index) => (
            <button key={index} className="bg-white border-x-[0.5px] border-y py-2 px-4">
              <span className="text-[#344054]">{TABS[item]}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="payment-methods flex-col my-8 px-4">
        <div className="mb-5">
          <h3 className="text-gray-900 text-lg font-medium">Payment methods</h3>
          <h4 className="text-[#667085] text-sm font-normal">
            Update your billing details and address
          </h4>
        </div>
        <hr />
        <form className='grid'>
          <div className="grid md:flex mt-4">
            <div className="mb-5 md:w-1/5">
              <h3 className="text-gray-700 text-sm font-medium">Contact email</h3>
              <h4 className="text-gray-500 text-sm font-normal">where should invoices be sent?</h4>
            </div>
            <div className="grid ml-0  md:w-4/5">
              <div className="flex items-start">
                <div className="mr-1">
                  <input type="radio" name="email" value="Account email" />
                </div>
                <div className="grid mb-5">
                  <h3 className="text-gray-700 text-sm font-medium">Send to my account email</h3>
                  <h4 className="text-gray-500 text-sm font-normal">olivia@untitledui.com</h4>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-1">
                  <input type="radio" name="email" value="Alternative email" />
                </div>
                <div className="grid mb-5">
                  <h3 className="text-gray-700 text-sm font-medium">
                    Send to an alternative email
                  </h3>
                  <div class="mt-1 relative text-gray-500 focus-within:text-gray-400 border-gray-300">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-1">
                      <button type="submit" class="pl-2 focus:outline-none focus:shadow-outline">
                        <img src="../email.png" />
                      </button>
                    </span>
                    <input
                      type="search"
                      name="q"
                      class="py-1 text-base border text-gray-900 border-gray-300 bg-white rounded-lg pl-10 pr-1 focus:outline-none focus:text-gray-900"
                      placeholder="billing@untitledui.com"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="grid md:flex mt-4" >
            <div className="mb-5 md:w-1/5">
              <h3 className="text-gray-700 text-sm font-medium">Card details</h3>
              <h4 className="text-gray-500 text-sm font-normal">Select default payment method</h4>
            </div>
            <div className="grid ml-0 md:w-4/5">
              <Card active={active==='visa'? true: false} title={'Visa ending in 1234'} expire="06/2024" logo={'../visacard.png'} onClick={handleClick} name={'visa'} />
              <Card
                title={'Mastercard ending in 1234'}
                expire="06/2024"
                logo={'../mastercard.png'}
                active={active==='master'? true: false}
                name={'master'}
                onClick={handleClick}
              />
              <div className='mt-2'>
              <span className='text-sm text-gray-500 font-medium'>+ Add new payment method</span>
            </div>
            </div>
          </div>
       
        </form>
      </div>

      <div className="billing-history">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 mb-5 md:items-center">
          <h3 className="text-gray-900 text-lg font-medium">Billing History</h3>
          <button className="md:mt-0 mt-2 border border-[#D0D5DD] bg-white flex rounded-lg px-4 py-3 items-center">
            <>
              <img src="../download-icon.png" />
              <span className="ml-2 text-[#344054] text-sm">Download all</span>
            </>
          </button>
        </div>
        <div>
          <BillHistoryTable />
        </div>
      </div>
    </main>
  );
};
