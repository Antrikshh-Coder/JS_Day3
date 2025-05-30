const inventory = [
    { name: "Banana", color: "Yellow", calories: 105 },
    { name: "Apple", color: "Red", calories: 95 },
    { name: "Lemon", color: "Yellow", calories: 37 },
    { name: "Strawberry", color: "Red", calories: 33 },
    { name: "Avocado", color: "Green", calories: 160 },
    { name: "Grapes", color: "Purple", calories: 62 },
    { name: "Kiwi", color: "Green", calories: 42 }
  ];

  const groupedByColor = inventory.reduce((acc, fruit) => {
    if (!acc[fruit.color]) acc[fruit.color] = [];
    acc[fruit.color].push(fruit.name);
    return acc;
  }, {});
  document.getElementById('groupedByColor').textContent = JSON.stringify(groupedByColor, null, 2);

  const caloriesByColor = inventory.reduce((acc, fruit) => {
    acc[fruit.color] = (acc[fruit.color] || 0) + fruit.calories;
    return acc;
  }, {});
  const filteredCalories = Object.fromEntries(
    Object.entries(caloriesByColor).filter(([color, total]) => total > 100)
  );
  document.getElementById('filteredCalories').textContent = JSON.stringify(filteredCalories, null, 2);

  const nameCaloriesMap = Object.fromEntries(
    inventory.map(fruit => [fruit.name, fruit.calories])
  );
  document.getElementById('nameCaloriesMap').textContent = JSON.stringify(nameCaloriesMap, null, 2);

  const colorGroups = inventory.reduce((acc, fruit) => {
    if (!acc[fruit.color]) acc[fruit.color] = [];
    acc[fruit.color].push(fruit.calories);
    return acc;
  }, {});
  const avgCaloriesByColor = Object.fromEntries(
    Object.entries(colorGroups).map(([color, calories]) => {
      const avg = calories.reduce((sum, c) => sum + c, 0) / calories.length;
      return [color, Math.round(avg)];
    })
  );
  document.getElementById('avgCaloriesByColor').textContent = JSON.stringify(avgCaloriesByColor, null, 2);
  