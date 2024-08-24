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

    // Calculate base price and hourly rate based on service type
    if (serviceType === "standard") {
        hourlyRate = 70;
        helperCost = helpers * 60; // Helpers are paid $60 per day for standard cleaning
    } else if (serviceType === "deep") {
        hourlyRate = 90;
        helperCost = helpers * 120; // Helpers are paid $120 per day for deep cleaning
    } else if (serviceType === "commercial") {
        hourlyRate = 75;
        helperCost = helpers * 60; // Helpers are paid $60 per day for commercial cleaning
    } else if (frequency === "monthly") {
        hourlyRate = 80;
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
        }
    });

    // Calculate the final price considering the estimated hours
    let timeAdjustedPrice = hourlyRate * estimatedHours;
    let totalPrice = timeAdjustedPrice + addonCost + helperCost;

    document.getElementById("totalPrice").innerText = `$${totalPrice.toFixed(2)}`;
}
