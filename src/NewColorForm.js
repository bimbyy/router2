import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const [formData, setFormData] = useState({
    name: "",
    value: "#ffffff"
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    navigate('/colors');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="value">Color Value:</label>
        <input
          type="color"
          id="value"
          name="value"
          value={formData.value}
          onChange={handleChange}
          required
        />
      </div>
      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;
