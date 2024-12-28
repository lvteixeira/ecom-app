import React from 'react';

const Dashboard = ({ sidebarOpen }) => {
  return(
    <div className={`
      lg:ml-64 transition-margin duration-200 ease-in-out
      ${sidebarOpen ? 'ml-64' : 'ml-0'}
    `}>
      {/* Main Content */}
      <main className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome back!</h2>
          <p className="text-gray-600">Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {['Total Users', 'Revenue', 'Orders', 'Visits'].map((stat) => (
            <div
              key={stat}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-gray-500 text-sm font-medium">{stat}</h3>
              <p className="text-2xl font-semibold text-gray-800 mt-2">0</p>
              <div className="mt-2 text-green-500 text-sm">+0% from last month</div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="border-t border-gray-200">
            <p className="py-4 text-gray-600">No recent activity</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;