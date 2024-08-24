function calculatePrice() {
    let serviceType = document.getElementById("serviceType").value;
    let squareFootage = parseInt(document.getElementById("squareFootage").value);
    let frequency = document.getElementById("frequency").value;
    let helpers = parseInt(document.getElementById("helpers").value);
    let estimatedHours = parseFloat(document.getElementById("estimatedHours").value);
    let addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(el => el.value);

    let basePrice = 0;
    let hourlyRate = 0;
    let addonCost = 0;
    let helperCost = 0;

    // Calculate base price and helper costs based on service type and size
    switch (serviceType) {
        case "standard":
            hourlyRate = 70;
            helperCost = helpers * 65; // Helpers paid $65 per day for standard cleaning
            break;
        case "deep":
            hourlyRate = 90;
            helperCost = helpers * 120; // Helpers paid $120 per day for deep cleaning
            break;
        case "post_construction":
            helperCost = helpers * 175; // Helpers paid $175 per day for post-construction
            hourlyRate = 90;

            if (squareFootage < 1000) basePrice = 250;
            else if (squareFootage <= 2000) basePrice = 500;
            else if (squareFootage <= 3000) basePrice = 800;
            else basePrice = 1500;
            break;
        case "airbnb":
            if (squareFootage < 1000) basePrice = 100;
            else if (squareFootage <= 2000) basePrice = 150;
            else basePrice = 200;
            addonCost += addons.includes("laundry") ? 20 : 0;
            addonCost += addons.includes("restocking") ? 20 : 0;
            break;
        case "move_in_out":
            if (squareFootage < 1000) basePrice = 250;
            else if (squareFootage <= 2000) basePrice = 300;
            else if (squareFootage <= 3000) basePrice = 400;
            else basePrice = 500;
            break;
        case "commercial":
            helperCost = helpers * 75; // Helpers paid $75 per day for commercial cleaning
            hourlyRate = 75;
            
            if (squareFootage <= 2000) basePrice = 200;
            else if (squareFootage <= 5000) basePrice = 400;
            else basePrice = 800;
            break;
        default:
            break;
    }

    // Calculate add-on costs
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

    // Calculate the final price considering the base rate, hourly rate, and addons
    let timeAdjustedPrice = basePrice + (hourlyRate * estimatedHours);
    let totalPrice = timeAdjustedPrice + addonCost + helperCost;

    document.getElementById("totalPrice").innerText = `$${totalPrice.toFixed(2)}`;
}


