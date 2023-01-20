import SampleData from '../utilities/sampledata.json';

export const BillHistoryTable = () => {
  return (
    <div className="flex flex-col border-b mb-8 md:px-4">
      <table className="shadow-lg text-start border-red-500 ">
        <thead className="border-b bg-gray-50">
          <tr className="text-gray-500 text-xs">
            <th className="text-left px-4 py-2">
              <div className="flex align-center">
                <input type="checkbox" className="border border-[#D0D5DD] bg-white rounded-md" />
                <span className="mx-2">Invoice</span>
                <span>&darr;</span>
              </div>
            </th>
            <th className="bg-[#F9FAFB] text-left px-4 py-2 ">Amount</th>
            <th className="hidden md:table-cell text-left px-4 py-2">Date</th>
            <th className="hidden md:table-cell text-left px-4 py-2">Status</th>
            <th className="hidden md:table-cell text-left px-4 py-2">Users on plan</th>
            <th className="text-left px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {SampleData.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="text-left px-4 py-2">
                <div className="flex align-center">
                  <input type="checkbox" className="border border-[#D0D5DD] bg-white rounded-md" />
                  <span className="mx-2 text-sm text-gray-800 font-medium">{item.invoice}</span>
                </div>
              </td>
              <td className="text-left px-4 py-2 text-sm text-gray-500 font-normal">
                {item.amount}
              </td>
              <td className="hidden md:table-cell text-left px-4 py-2 text-sm text-gray-500 font-normal">
                {item.date}
              </td>
              <td className="hidden md:table-cell">
                <div className="flex text-sm items-center rounded-2xl bg-success-50 py-0.5 w-14 justify-center">
                  <span>
                    <img src="../check.png" />
                  </span>
                  <span className="text-success-700">{item.status}</span>
                </div>
              </td>
              <td className="hidden md:table-cell text-left px-4 py-2">
                <img src={item.users} />
              </td>
              <td className="hidden md:table-cell text-left px-4 py-2">
                <img src="../download-icon.png" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
