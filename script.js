function calculatePrice() {
    let serviceType = document.getElementById("serviceType").value;
    let squareFootage = parseInt(document.getElementById("squareFootage").value);
    let frequency = document.getElementById("frequency").value;
    let helpers = parseInt(document.getElementById("helpers").value); // Number of helpers
    let estimatedHours = parseFloat(document.getElementById("estimatedHours").value); // Estimated hours to complete the job
    let addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(el => el.value);

    let basePrice = 0;
    let hourlyRate = 0;
    let addonCost = 0;
    let helperCost = 0;

    // Calculate base price based on service type and square footage
    if (serviceType === "standard") {
        if (squareFootage < 1000) basePrice = 130;
        else if (squareFootage <= 2000) basePrice = 150;
        else if (squareFootage <= 3000) basePrice = 200;
        else basePrice = 250;

        if (frequency === "biweekly") hourlyRate = 60;
        else if (frequency === "monthly") hourlyRate = 70;
        else hourlyRate = 80;

        // Calculate helpers' cost
        helperCost = helpers * 60; // Helpers are paid $60 per house for standard cleaning
    } else if (serviceType === "deep") {
        if (squareFootage < 1000) basePrice = 200;
        else if (squareFootage <= 2000) basePrice = 250;
        else if (squareFootage <= 3000) basePrice = 350;
        else basePrice = 450;

        hourlyRate = 95;

        // Calculate helpers' cost
        helperCost = helpers * 120; // Helpers are paid $120 per house for deep cleaning
    }
    // Add other service types...

    // Calculate add-on costs
    addons.forEach(addon => {
        switch (addon) {
            case "fridge": addonCost += 35; break
