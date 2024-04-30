
// import  { useState } from "react";
const Table = () => {
  // State to manage checked status of checkboxes
//   const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-indigo-950 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Phone
            </th>
            <th scope="col" className="py-3 px-6">
              Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-indigo-950">
          <tr className="bg-white border-b">
            <td className="py-4 px-6">1</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6">2</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6">3</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6">4</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6">5</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6">6</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6">7</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-white border-b">
            <td className="py-4 px-6">8</td>
            <td className="py-4 px-6">Zubaidur</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Edit</td>
          </tr>
          <tr className="bg-gray-100 border-b">
            <td className="py-4 px-6">2</td>
            <td className="py-4 px-6">Rahman</td>
            <td className="py-4 px-6">03000000000</td>
            <td className="py-4 px-6">$ 1000</td>
            <td className="py-4 px-6">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;