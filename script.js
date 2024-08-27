function calculatePrice() {
    const serviceType = document.getElementById('serviceType').value;
    const squareFootage = parseInt(document.getElementById('squareFootage').value);
    const frequency = document.getElementById('frequency').value;
    const helpers = parseInt(document.getElementById('helpers').value);
    const estimatedHours = parseFloat(document.getElementById('estimatedHours').value);

    let basePrice = 0;
    let ownerRate = 0;
    let helperRate = 0;

    // Determine base price and rates based on service type
    switch (serviceType) {
        case "standard":
            if (squareFootage <= 1000) {
                basePrice = 140;
            } else if (squareFootage <= 2000) {
                basePrice = 175;
            } else if (squareFootage <= 3000) {
                basePrice = 225;
            } else if (squareFootage <= 4700) {
                basePrice = 540;
            }
            ownerRate = 70;
            helperRate = 50;
            break;

        case "deep":
            if (squareFootage <= 1000) {
                basePrice = 225;
            } else if (squareFootage <= 2000) {
                basePrice = 300;
            } else if (squareFootage <= 3000) {
                basePrice = 400;
            } else if (squareFootage <= 4700) {
                basePrice = 800;
            }
            ownerRate = 80;
            helperRate = 120;
            break;

        case "post_construction":
            if (squareFootage <= 1000) {
                basePrice = 300;
            } else if (squareFootage <= 2000) {
                basePrice = 500;
            } else if (squareFootage <= 3000) {
                basePrice = 700;
            } else if (squareFootage <= 4700) {
                basePrice = 1200;
            }
            ownerRate = 90;
            helperRate = 175;
            break;

        case "move_in_out":
            if (squareFootage <= 1000) {
                basePrice = 275;
            } else if (squareFootage <= 2000) {
                basePrice = 350;
            } else if (squareFootage <= 3000) {
                basePrice = 450;
            } else if (squareFootage <= 4700) {
                basePrice = 600;
            }
            ownerRate = 80;
            helperRate = 120;
            break;

        case "commercial":
            if (squareFootage <= 2000) {
                basePrice = 300;
            } else if (squareFootage <= 5000) {
                basePrice = 600;
            } else if (squareFootage > 5000) {
                basePrice = 1000;
            }
            ownerRate = 75;
            helperRate = 65;
            break;

        default:
            basePrice = 0;
            ownerRate = 0;
            helperRate = 0;
            break;
    }

    // Calculate additional cost for helpers
    const helperCost = helpers * helperRate;

    // Calculate the total base cost
    const ownerCost = ownerRate * estimatedHours;
    let totalCost = basePrice + ownerCost + helperCost;

    // Apply biweekly discount
    if (frequency === "biweekly") {
        totalCost *= 0.9;
    }

    // Display the total price
    document.getElementById('totalPrice').innerText = `$${totalCost.toFixed(2)}`;
}
