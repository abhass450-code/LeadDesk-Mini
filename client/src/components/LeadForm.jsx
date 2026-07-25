import { useState } from "react";
import axios from "axios";

function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "Under ₹10,000",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
        const response = await axios.post(
  "https://leaddesk-mini-wiv8.onrender.com/api/leads",
  formData
);


      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        budget: "Under ₹10,000",
        message: "",
      });
    } catch (error) {
  console.error(error);

  if (error.response) {
    console.log(error.response.data);
    alert(error.response.data.message);
  } else {
    alert(error.message);
  }}}
;

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto" }}>
      <h2>LeadDesk Mini</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        >
          <option>Under ₹10,000</option>
          <option>₹10,000 - ₹50,000</option>
          <option>₹50,000 - ₹1,00,000</option>
          <option>Above ₹1,00,000</option>
        </select>

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LeadForm;
