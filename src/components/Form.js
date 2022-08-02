import React, {useState} from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
  })

  function handleChange(event) {
    setFormData({...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }
  
  return (
      <form onSubmit={handleSubmit}>
          <label>Recipe:</label><br></br>
          <input type="text" id="name" name="ingredient1" value={formData.ingredient1} onChange={handleChange}/><br></br>
          <input type="text" id="name" name="ingredient2" value={formData.ingredient2} onChange={handleChange}/><br></br>
          <input type="text" id="name" name="ingredient3" value={formData.ingredient3} onChange={handleChange}/><br></br>
          <input type="text" id="name" name="ingredient4" value={formData.ingredient4} onChange={handleChange}/><br></br>
          <input type="text" id="name" name="ingredient5" value={formData.ingredient5} onChange={handleChange}/><br></br>
          <input type="submit" value="Search"/>
      </form>
)

}

export default Form;