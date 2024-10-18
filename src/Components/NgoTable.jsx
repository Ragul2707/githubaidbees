import React from 'react';

const NgoTable = () => {
  const stats = [
    { title: 'Number of NGOs', count: 102, color: 'primary' },
    { title: 'Number of Registered Users', count: 653, color: 'info' },
    { title: 'Number of Active Users', count: 2, color: 'danger' },
    { title: 'Total Donations', count: '2362260.29', color: 'warning' },
    { title: 'User Flagged Posts', count: 22, color: 'info' },
    { title: 'NGO Flagged Posts', count: 26, color: 'danger' },
    { title: 'Total Number of Donations', count: 903, color: 'success' }
  ];

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">NGO Name</th>
          <th scope="col">Total Donation Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping over stats to create table rows */}
        {stats.map((stat, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th> {/* Index for Sr.No */}
            <td>{stat.title}</td>
            <td>{stat.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NgoTable;
