import { useState, useEffect } from 'react';
import './App.css';
import UserInput from './UserInput';

function App() {

  const [inputGroups, setInputGroups] = useState( [ { name: "", age: "", gender: "" } ] );
  const [data, setData] = useState([]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newInputGroups = [...inputGroups];
    newInputGroups[index][name] = value;
    setInputGroups(newInputGroups);
  };

  const addInputGroup = () => {
    setInputGroups([...inputGroups, { name: "", age: "", gender: "" }]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", inputGroups);
  }

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const response = await fetch('/api/story'); // Replace with your API endpoint
      console.log("Response:", response);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      console.log("Data fetched:", data);
      setData(data);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <h1>Bedtime Story Maker</h1>
      
      <h3>Enter children details:</h3>
      <form>
        {inputGroups.map((group, index) => (
          <UserInput
            key={index}
            index={index}
            group={group}
            handleInputChange={handleInputChange}
          />
        ))}

        <div className="button-group">
          <button type="button" onClick={addInputGroup}>Add</button>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    
      </form>

      <div className="generated-story">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

    </div>
  );
}

export default App;
