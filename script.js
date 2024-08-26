function calculatePrice() {
    // Get form values
    const serviceType = document.getElementById("serviceType").value;
    const squareFootage = parseFloat(document.getElementById("squareFootage").value);
    const frequency = document.getElementById("frequency").value;
    const helpers = parseInt(document.getElementById("helpers").value) || 0;
    const estimatedHours = parseFloat(document.getElementById("estimatedHours").value) || 0;

    // Base prices and rates
    let basePrice = 0;
    let ownerRate = 0;
    let helperRate = 0;

    switch (serviceType) {
        case "standard":
            basePrice = getStandardBasePrice(squareFootage);
            ownerRate = 70;
            helperRate = 50;
            break;
        case "deep":
            basePrice = getDeepBasePrice(squareFootage);
            ownerRate = 90;
            helperRate = 120;
            break;
        case "move_in_out":
            basePrice = getMoveInOutBasePrice(squareFootage);
            ownerRate = 85;
            helperRate = 120;
            break;
        case "commercial":
            basePrice = getCommercialBasePrice(squareFootage);
            ownerRate = 75;
            helperRate = 60;
            break;
    }

    // Calculate add-on costs
    const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(checkbox => checkbox.value);
    let addonCost = 0;
    addons.forEach(addon => {
        switch (addon) {
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

    // Calculate total cost
    let totalCost = basePrice + (ownerRate * estimatedHours) + (helperRate * helpers) + addonCost;

    // Apply discounts
    if (frequency === "biweekly") {
        totalCost *= 0.90; // 10% discount
    } else if (frequency === "one_time") {
        totalCost += 15;
    }

    // Display total price
    document.getElementById("totalPrice").textContent = `$${totalCost.toFixed(2)}`;
}

// Base price functions
function getStandardBasePrice(sqft) {
    if (sqft < 1000) return 130;
    if (sqft <= 2000) return 150;
    if (sqft <= 3000) return 200;
    return 250;
}

function getDeepBasePrice(sqft) {
    if (sqft < 1000) return 200;
    if (sqft <= 2000) return 250;
    if (sqft <= 3000) return 350;
    return 450;
}

function getMoveInOutBasePrice(sqft) {
    if (sqft < 1000) return 250;
    if (sqft <= 2000) return 300;
    if (sqft <= 3000) return 400;
    return 500;
}

function getCommercialBasePrice(sqft) {
    if (sqft <= 2000) return 200;
    if (sqft <= 5000) return 400;
    return 800;
}
