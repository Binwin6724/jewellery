import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, 
  Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/Dashboard.css';

// Sample data for user registrations
const userRegistrationData = [
  { month: 'Jan', users: 40 },
  { month: 'Feb', users: 30 },
  { month: 'Mar', users: 45 },
  { month: 'Apr', users: 55 },
  { month: 'May', users: 48 },
  { month: 'Jun', users: 52 },
];

// Sample data for product performance
const productPerformanceData = [
  { name: 'Rings', value: 400 },
  { name: 'Necklaces', value: 300 },
  { name: 'Earrings', value: 300 },
  { name: 'Bracelets', value: 200 },
];

// Sample data for order locations
const orderLocations = [
  { name: "Mumbai", position: [19.0760, 72.8777], orders: 250 },
  { name: "Delhi", position: [28.6139, 77.2090], orders: 180 },
  { name: "Bangalore", position: [12.9716, 77.5946], orders: 200 },
  { name: "Chennai", position: [13.0827, 80.2707], orders: 150 }
];

// Sample data for product sales by location
const productSalesByLocation = [
  {
    location: 'Mumbai',
    Rings: 120,
    Necklaces: 85,
    Earrings: 95,
    Bracelets: 70
  },
  {
    location: 'Delhi',
    Rings: 100,
    Necklaces: 75,
    Earrings: 80,
    Bracelets: 60
  },
  {
    location: 'Bangalore',
    Rings: 90,
    Necklaces: 70,
    Earrings: 85,
    Bracelets: 50
  },
  {
    location: 'Chennai',
    Rings: 80,
    Necklaces: 65,
    Earrings: 75,
    Bracelets: 45
  }
];

// Sample summary data
const summaryData = {
  totalInventory: 1250,
  totalValue: "₹2.5Cr",
  pendingOrders: 45,
  lowStock: 12
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Custom marker icon
const customIcon = new Icon({
  iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Inventory</h3>
          <p>{summaryData.totalInventory} items</p>
        </div>
        <div className="summary-card">
          <h3>Inventory Value</h3>
          <p>{summaryData.totalValue}</p>
        </div>
        <div className="summary-card">
          <h3>Pending Orders</h3>
          <p>{summaryData.pendingOrders}</p>
        </div>
        <div className="summary-card">
          <h3>Low Stock Items</h3>
          <p>{summaryData.lowStock}</p>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h2>New User Registrations</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userRegistrationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Bar dataKey="users" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Product Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productPerformanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {productPerformanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h2>Product Sales by Location</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productSalesByLocation}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="location" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Bar dataKey="Rings" fill={COLORS[0]} />
              <Bar dataKey="Necklaces" fill={COLORS[1]} />
              <Bar dataKey="Earrings" fill={COLORS[2]} />
              <Bar dataKey="Bracelets" fill={COLORS[3]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card map-card">
          <h2>Order Distribution</h2>
          <div className="map-container">
            <MapContainer
              center={[20.5937, 78.9629]}
              zoom={5}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {orderLocations.map(({ name, position, orders }) => (
                <Marker
                  key={name}
                  position={position}
                  icon={customIcon}
                >
                  <Popup>
                    <strong>{name}</strong>
                    <br />
                    Orders: {orders}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;