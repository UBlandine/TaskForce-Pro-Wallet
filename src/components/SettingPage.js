import React from 'react';

 function SettingsPage() {
  return (
    <div>
      <h2>Settings</h2>
      {/* Add Categories */}
      <form>
        <label>Category Name:</label>
        <input type="text" name="category_name" required />

        <label>Parent Category (Optional):</label>
        <select name="parent_category">
          <option value="none">None</option>
          <option value="food">Food</option>
          <option value="rent">Rent</option>
        </select>

        <button type="submit">Add Category</button>
      </form>

      {/* List of Categories */}
      <ul>
        <li>Food</li>
        <li>Rent</li>
        <li>Other</li>
      </ul>
    </div>
  );
}
export default SettingsPage;