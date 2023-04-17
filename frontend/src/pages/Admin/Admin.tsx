import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-1/4">
        <h1 className="text-2xl font-bold p-4">Admin Dashboard</h1>
        <nav className="flex flex-col space-y-2 p-4">
          <a href="#" className="hover:text-gray-300">
            Bank Section
          </a>
          <a href="#" className="hover:text-gray-300">
            Finance Section
          </a>
          <a href="#" className="hover:text-gray-300">
            Insurance Section
          </a>
          <a href="#" className="hover:text-gray-300">
            Customer Section
          </a>
          <a href="#" className="hover:text-gray-300">
            Car Ads
          </a>
          {/* Add more sidebar links as needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        {/* Render the respective section components based on the selected sidebar link */}
        {/* Example: Bank Section */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Bank Section</h2>
          {/* Add bank-related components and functionality here */}
        </div>

        {/* Example: Finance Section */}
        <div className="bg-white mt-8 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Finance Section</h2>
          {/* Add finance-related components and functionality here */}
        </div>

        {/* Example: Insurance Section */}
        <div className="bg-white mt-8 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Insurance Section</h2>
          {/* Add insurance-related components and functionality here */}
        </div>
        <div className="bg-white mt-8 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Customer Section</h2>
          {/* Add customer-related components and functionality here */}
        </div>
        <div className="bg-white mt-8 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Car Ads</h2>
          {/* Add car ads-related components and functionality here */}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;



