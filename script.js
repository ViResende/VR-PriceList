function calculatePrice() {
    const serviceType = document.getElementById('serviceType').value;
    const squareFootage = parseFloat(document.getElementById('squareFootage').value);
    const frequency = document.getElementById('frequency').value;
    const helpers = parseInt(document.getElementById('helpers').value, 10);
    const estimatedHours = parseFloat(document.getElementById('estimatedHours').value);
    
    const addons = document.querySelectorAll('input[name="addons"]:checked');
    let addonsTotal = 0;
    addons.forEach(addon => {
        addonsTotal += 20;  // Add your custom logic for calculating add-ons here.
    });
    
    let basePrice = 0;

    switch (serviceType) {
        case 'standard':
            if (squareFootage < 1000) {
                basePrice = 140; // Mid-point between $130 and $150
            } else if (squareFootage < 2000) {
                basePrice = 175; // Mid-point between $150 and $200
            } else if (squareFootage < 3000) {
                basePrice = 225; // Mid-point between $200 and $250
            } else {
                basePrice = 275; // Mid-point between $250 and $300
            }
            basePrice += estimatedHours * 70;
            break;
        case 'deep':
            if (squareFootage < 1000) {
                basePrice = 225; // Mid-point between $200 and $250
            } else if (squareFootage < 2000) {
                basePrice = 300; // Mid-point between $250 and $350
            } else if (squareFootage < 3000) {
                basePrice = 400; // Mid-point between $350 and $450
            } else {
                basePrice = 500; // Mid-point between $450 and $550
            }
            basePrice += estimatedHours * 90;
            break;
        case 'post_construction':
            if (squareFootage < 1000) {
                basePrice = 250; // Mid-point between $200 and $300
            } else if (squareFootage < 2000) {
                basePrice = 600; // Mid-point between $500 and $700
            } else {
                basePrice = 1000; // Mid-point between $800 and $1200
            }
            basePrice += estimatedHours * 95;
            break;
        case 'airbnb':
            basePrice = 150; // Assuming a flat rate for Airbnb turnover
            break;
        case 'move_in_out':
            if (squareFootage < 1000) {
                basePrice = 275; // Mid-point between $250 and $300
            } else if (squareFootage < 2000) {
                basePrice = 350; // Mid-point between $300 and $400
            } else if (squareFootage < 3000) {
                basePrice = 450; // Mid-point between $400 and $500
            } else {
                basePrice = 575; // Mid-point between $500 and $650
            }
            basePrice += estimatedHours * 85;
            break;
        case 'commercial':
            basePrice = 200; // Base rate for commercial, add your logic here
            break;
    }

    // Add discount for biweekly service
    if (frequency === 'biweekly') {
        basePrice *= 0.9; // 10% discount
    } else if (frequency === 'one_time') {
        basePrice += 15; // $15 additional fee for one-time cleaning
    }

    // Add cost of helpers
    const helperCost = helpers * 130; // Assuming helper cost is $130 per day
    basePrice += helperCost + addonsTotal;

    // Display the total price
    document.getElementById('totalPrice').textContent = `$${basePrice.toFixed(2)}`;
}
