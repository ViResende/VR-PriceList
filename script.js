function calculatePrice() {
    let serviceType = document.getElementById("serviceType").value;
    let squareFootage = parseInt(document.getElementById("squareFootage").value);
    let frequency = document.getElementById("frequency").value;
    let addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(el => el.value);

    let basePrice = 0;
    let hourlyRate = 0;
    let addonCost = 0;

    // Calculate base price based on service type and square footage
    if (serviceType === "standard") {
        if (squareFootage < 1000) basePrice = 130;
        else if (squareFootage <= 2000) basePrice = 150;
        else if (squareFootage <= 3000) basePrice = 200;
        else basePrice = 250;

        if (frequency === "biweekly") hourlyRate = 60;
        else if (frequency === "monthly") hourlyRate = 70;
        else hourlyRate = 80;
    } else if (serviceType === "deep") {
        if (squareFootage < 1000) basePrice = 200;
        else if (squareFootage <= 2000) basePrice = 250;
        else if (squareFootage <= 3000) basePrice = 350;
        else basePrice = 450;
        hourlyRate = 95;
    }
    // Add other service types...

    // Calculate add-on costs
    addons.forEach(addon => {
        switch (addon) {
            case "fridge": addonCost += 35; break;
            case "oven": addonCost += 45; break;
            case "laundry_fold": addonCost += 20; break;
            case "laundry_wash": addonCost += 30; break;
            // Add other add-ons...
        }
    });

    let totalPrice = basePrice + addonCost;
    document.getElementById("totalPrice").innerText = `$${totalPrice}`;
}
