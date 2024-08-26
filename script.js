function calculatePrice() {
    const serviceType = document.getElementById('serviceType').value;
    const squareFootage = parseInt(document.getElementById('squareFootage').value);
    const estimatedHours = parseFloat(document.getElementById('estimatedHours').value);
    const helpers = parseInt(document.getElementById('helpers').value);
    const frequency = document.getElementById('frequency').value;

    let hourlyRate = 0;
    let basePrice = 0;
    let helperCost = 0;
    let totalPrice = 0;
    let discount = 0;

    switch (serviceType) {
        case "deep":
            hourlyRate = 90;
            helperCost = helpers * 130;

            if (squareFootage < 1000) {
                basePrice = 200 + Math.min((estimatedHours - (200 / hourlyRate)) * hourlyRate, 250 - 200);
            } else if (squareFootage >= 1000 && squareFootage < 2000) {
                basePrice = 250 + Math.min((estimatedHours - (250 / hourlyRate)) * hourlyRate, 350 - 250);
            } else if (squareFootage >= 2000 && squareFootage < 3000) {
                basePrice = 350 + Math.min((estimatedHours - (350 / hourlyRate)) * hourlyRate, 450 - 350);
            } else if (squareFootage >= 3000) {
                basePrice = 450 + Math.min((estimatedHours - (450 / hourlyRate)) * hourlyRate, 550 - 450);
            }
            totalPrice = basePrice + helperCost;
            break;

        case "post_construction":
            hourlyRate = 95;
            helperCost = helpers * 180;

            if (squareFootage < 1000) {
                basePrice = 200 + Math.min((estimatedHours - (200 / hourlyRate)) * hourlyRate, 300 - 200);
            } else if (squareFootage >= 1000 && squareFootage < 2000) {
                basePrice = 500 + Math.min((estimatedHours - (500 / hourlyRate)) * hourlyRate, 700 - 500);
            } else if (squareFootage >= 2000) {
                basePrice = 800 + Math.min((estimatedHours - (800 / hourlyRate)) * hourlyRate, 1200 - 800);
            }
            totalPrice = basePrice + helperCost;
            break;

        case "move_in_out":
            hourlyRate = 85;
            helperCost = helpers * 150;

            if (squareFootage < 1000) {
                basePrice = 250 + Math.min((estimatedHours - (250 / hourlyRate)) * hourlyRate, 300 - 250);
            } else if (squareFootage >= 1000 && squareFootage < 2000) {
                basePrice = 300 + Math.min((estimatedHours - (300 / hourlyRate)) * hourlyRate, 400 - 300);
            } else if (squareFootage >= 2000 && squareFootage < 3000) {
                basePrice = 400 + Math.min((estimatedHours - (400 / hourlyRate)) * hourlyRate, 500 - 400);
            } else if (squareFootage >= 3000) {
                basePrice = 500 + Math.min((estimatedHours - (500 / hourlyRate)) * hourlyRate, 650 - 500);
            }
            totalPrice = basePrice + helperCost;
            break;

        case "standard":
            hourlyRate = 70;
            helperCost = helpers * 60;

            if (squareFootage < 1000) {
                basePrice = 130 + Math.min((estimatedHours - (130 / hourlyRate)) * hourlyRate, 150 - 130);
            } else if (squareFootage >= 1000 && squareFootage < 2000) {
                basePrice = 150 + Math.min((estimatedHours - (150 / hourlyRate)) * hourlyRate, 200 - 150);
            } else if (squareFootage >= 2000 && squareFootage < 3000) {
                basePrice = 200 + Math.min((estimatedHours - (200 / hourlyRate)) * hourlyRate, 250 - 200);
            } else if (squareFootage >= 3000) {
                basePrice = 250 + Math.min((estimatedHours - (250 / hourlyRate)) * hourlyRate, 300 - 250);
            }
            totalPrice = basePrice + helperCost;
            break;

        default:
            console.log("Invalid service type");
            return;
    }

    // Apply discount for bi-weekly service
    if (frequency === "biweekly") {
        discount = totalPrice * 0.10;
        totalPrice -= discount;
    } else if (frequency === "one_time") {
        totalPrice += 15;
    }

    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

