function calculatePrice() {
    // Get the values from the form
    const serviceType = document.getElementById('serviceType').value;
    const squareFootage = parseFloat(document.getElementById('squareFootage').value);
    const frequency = document.getElementById('frequency').value;
    const numberOfHelpers = parseInt(document.getElementById('helpers').value) || 0;
    const estimatedHours = parseFloat(document.getElementById('estimatedHours').value) || 0;
    
    // Add-ons costs
    const addOnCosts = {
        fridge: 35,
        oven: 45,
        laundry_fold: 20,
        laundry_wash: 35,
        garage: [50, 150],  // Range
        porch: 20,
        sunroom: 50,
        dishes: 20,
        windows: 5,
        restocking: 20
    };
    
    // Initialize total cost
    let basePrice = 0;
    let helperCost = 0;
    let totalAddOnCost = 0;

    // Calculate base price and helper cost based on service type and square footage
    switch(serviceType) {
        case 'standard':
            if (squareFootage < 1000) basePrice = 130;
            else if (squareFootage <= 2000) basePrice = 150;
            else if (squareFootage <= 3000) basePrice = 200;
            else basePrice = 250;
            helperCost = 50;
            break;
        case 'deep':
            if (squareFootage < 1000) basePrice = 200;
            else if (squareFootage <= 2000) basePrice = 250;
            else if (squareFootage <= 3000) basePrice = 350;
            else basePrice = 450;
            helperCost = 120;
            break;
        case 'post_construction':
            if (squareFootage < 1000) basePrice = 200;
            else if (squareFootage <= 2000) basePrice = 500;
            else if (squareFootage <= 3000) basePrice = 800;
            else basePrice = 1000;
            helperCost = 175;
            break;
        case 'move_in_out':
            if (squareFootage < 1000) basePrice = 250;
            else if (squareFootage <= 2000) basePrice = 300;
            else if (squareFootage <= 3000) basePrice = 400;
            else basePrice = 500;
            helperCost = 120;
            break;
        case 'commercial':
            if (squareFootage <= 2000) basePrice = 200;
            else if (squareFootage <= 5000) basePrice = 400;
            else basePrice = 800;
            helperCost = 65;
            break;
        case 'airbnb':
            basePrice = 100; // Use $100 as base for simplicity
            helperCost = 60;
            break;
    }
    
    // Calculate add-on costs
    const checkboxes = document.querySelectorAll('input[name="addons"]:checked');
    checkboxes.forEach(checkbox => {
        const addOn = checkbox.value;
        if (addOnCosts[addOn]) {
            if (Array.isArray(addOnCosts[addOn])) {
                totalAddOnCost += addOnCosts[addOn][1]; // Use the max value for ranges
            } else {
                totalAddOnCost += addOnCosts[addOn];
            }
        }
    });

    // Calculate discount based on frequency
    let discount = 0;
    if (frequency === 'biweekly') {
        discount = 0.10; // 10% discount
    }
    
    // Calculate total cost
    const ownerRate = serviceType === 'commercial' ? 75 : 80; // Example rates for different services
    const baseCost = basePrice + (ownerRate * estimatedHours) + (helperCost * numberOfHelpers);
    const totalCost = baseCost + totalAddOnCost;
    const discountedCost = totalCost - (totalCost * discount);

    // Display the total price
    document.getElementById('totalPrice').textContent = `$${discountedCost.toFixed(2)}`;
}

