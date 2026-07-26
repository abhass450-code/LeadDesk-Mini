import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        window.location.href = "/login";
        return;
      }

      const res = await axios.get(
        "https://leaddesk-mini-wiv8.onrender.com/api/leads",
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setLeads(res.data.data);
    } catch (err) {
      console.log(err);

      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `https://leaddesk-mini-wiv8.onrender.com/api/leads/${id}`,
        { status },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      fetchLeads();
    } catch (error) {
      console.log(error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  };

  const filteredLeads = leads.filter(
    (lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Admin Dashboard</h2>

      <input
        type="text"
        placeholder="Search by Name or Email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "15px 0",
        }}
      />

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Budget</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredLeads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.budget}</td>
              <td>{lead.message}</td>
              <td>
                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(lead._id, e.target.value)
                  }
                >
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;