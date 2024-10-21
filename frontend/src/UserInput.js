import React from 'react';

const UserInput = ({ index, group, handleInputChange }) => {
  return (
    <div className="input-group">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={group.name}
          onChange={(event) => handleInputChange(index, event)}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={group.age}
          onChange={(event) => handleInputChange(index, event)}
          required
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={group.gender}
          onChange={(event) => handleInputChange(index, event)}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </div>
  );
};

export default UserInput;
