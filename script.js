function calculatePrice() {
    const serviceType = document.getElementById('serviceType').value;
    const squareFootage = parseFloat(document.getElementById('squareFootage').value);
    const frequency = document.getElementById('frequency').value;
    const helpers = parseInt(document.getElementById('helpers').value, 10);
    const estimatedHours = parseFloat(document.getElementById('estimatedHours').value);

    const addons = document.querySelectorAll('input[name="addons"]:checked');
    let addonCost = 0;
    
    // Calculate add-on costs
    addons.forEach(addon => {
        switch (addon.value) {
            case "fridge": addonCost += 35; break;
            case "oven": addonCost += 45; break;
            case "laundry_fold": addonCost += 20; break;
            case "laundry_wash": addonCost += 30; break;
            case "garage": addonCost += 50; break;
            case "porch": addonCost += 20; break;
            case "sunroom": addonCost += 30; break;
            case "dishes": addonCost += 10; break;
            case "windows": addonCost += 4; break;
            case "restocking": addonCost += 20; break;
        }
    });

    let basePrice = 0;
    let ownerRate = 0;
    let helperRate = 0;

    // Base price, owner rate, and helper rate calculation based on service type
    switch (serviceType) {
        case 'standard':
            basePrice = 540; // Base price for 3,500 - 4,700 sq ft
            ownerRate = 70; // Owner's hourly rate
            helperRate = 65; // Helper's daily rate
            break;
        case 'deep':
            basePrice = 800; // Base price for 3,500 - 4,700 sq ft
            ownerRate = 90; // Owner's hourly rate
            helperRate = 120; // Helper's daily rate
            break;
        case 'post_construction':
            basePrice = 1200; // Base price for 3,500 - 4,700 sq ft
            ownerRate = 90; // Owner's hourly rate
            helperRate = 175; // Helper's daily rate
            break;
        case 'move_in_out':
            basePrice = 600; // Base price for 3,500 - 4,700 sq ft
            ownerRate = 85; // Owner's hourly rate (adjusted)
            helperRate = 85; // Helper's daily rate (adjusted)
            break;
        case 'commercial':
            basePrice = 1000; // Base price for 3,500 - 4,700 sq ft
            ownerRate = 75; // Owner's hourly rate
            helperRate = 75; // Helper's daily rate
            break;
    }

    // Calculate the total helper cost
    const helperCost = helpers * helperRate;

    // Calculate the total owner cost based on estimated hours
    const ownerCost = estimatedHours * ownerRate;

    // Calculate the total price before applying discounts or additional fees
    let totalPrice = basePrice + ownerCost + helperCost + addonCost;

    // Apply frequency-based adjustments
    if (frequency === 'biweekly') {
        totalPrice *= 0.9; // Apply 10% discount for biweekly services
    } else if (frequency === 'one_time') {
        totalPrice += 15; // Apply $15 additional fee for one-time cleaning
    }

    // Display the total price
    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}
