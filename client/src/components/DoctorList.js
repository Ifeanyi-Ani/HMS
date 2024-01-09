import React from "react";

const DoctorList = () => {
  const data = [
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Alice Johnson", Role: "Radiologist" },
  ];

  return (
    <div className="w-full pt-10 px-2 py-1 mt-0">
      <table className="w-6 divide-y divide-gray-200 float-right ">
        <thead className="bg-white">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              #
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Doctor List
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Specialty
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.Role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DoctorList;
