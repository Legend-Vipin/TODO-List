const foodItems = {
    starter: ["Soup", "Salad", "Bruschetta"],
    mainCourse: ["Pasta", "Pizza", "Burger"],
    dessert: ["Ice Cream", "Cake", "Fruit Salad"]
  };
  
  const tableNumberInput = document.getElementById("tableNumber");
  const foodCategorySelect = document.getElementById("foodCategory");
  const quantity = document.getElementById("quantity");
  const foodItemSelect = document.getElementById("foodItem");
  const cartList = document.getElementById("cartItems");
  
  function populateFoodItems() {
    const selectedCategory = foodCategorySelect.value;
    const items = foodItems[selectedCategory];
  
    // Clear previous options
    foodItemSelect.innerHTML = "";
  
    // Add new options
    items.forEach(item => {
      const option = document.createElement("option");
      option.value = item;
      option.text = item;
      foodItemSelect.add(option);
    });
  }
  
  function addToCart() {
    const tableNumber = tableNumberInput.value;
    const foodCategory = foodCategorySelect.value;
    const foodItem = foodItemSelect.value;
  
    if (tableNumber && foodCategory && foodItem) {
      const listItem = document.createElement("li");
      listItem.textContent = `Table ${tableNumber}: ${foodCategory} - ${foodItem}`;
      cartList.appendChild(listItem);
  
      // Clear input fields after adding to cart
      tableNumberInput.value = "";
      foodItemSelect.value = "";
    }
  }
  
  // Populate food items when the category changes
  foodCategorySelect.addEventListener("change", populateFoodItems);
  
  // Initial population
  populateFoodItems();
  