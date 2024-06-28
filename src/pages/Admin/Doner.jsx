// src/App.js
import React from 'react';

const data = [
  { name: 'Roshan Acharya', bloodGroup: 'A+', address: 'Kathmandu, Nepal', mobile: '9812345678' },
  { name: 'Roman Nepal', bloodGroup: 'B-', address: 'Pokhara, Nepal', mobile: '9812345678' },

];

const TableRow = ({ person }) => (
  <tr className="border-b md:table-row block mb-2 md:mb-0">
    <td className="p-4 md:table-cell flex gap-2  relative md:static " data-label="Name"> <p className='md:hidden font-semibold'>Name:</p> {person.name}</td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static " data-label="Blood Group"><p className='md:hidden font-semibold'>Bood Group:</p>{person.bloodGroup}</td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Address"><p className='md:hidden font-semibold'>Address:</p>{person.address}</td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static" data-label="Mobile"><p className='md:hidden font-semibold'>Phone No:</p>{person.mobile}</td>
    <td className="p-4 md:table-cell flex gap-2 relative md:static"><button className="bg-red-500 text-white py-1 px-3 rounded">Delete</button></td>
  </tr>
);

const Doner = () => (
  <div className="App p-4">
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse md:table block">
        <thead className="md:table-header-group hidden">
          <tr className="md:table-row block">
            <th className="p-4 bg-gray-200 md:table-cell block">Name</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Blood Group</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Address</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Mobile</th>
            <th className="p-4 bg-gray-200 md:table-cell block">Action</th>
          </tr>
        </thead>
        <tbody className="md:table-row-group block">
          {data.map((person, index) => (
            <TableRow key={index} person={person} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Doner;