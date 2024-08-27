function calculatePrice() {
    const serviceType = document.getElementById('serviceType').value;
    const squareFootage = parseInt(document.getElementById('squareFootage').value);
    const frequency = document.getElementById('frequency').value;
    const helpers = parseInt(document.getElementById('helpers').value);
    const estimatedHours = parseFloat(document.getElementById('estimatedHours').value);
    
    let basePrice = 0;
    let ownerRate = 0;
    const helperRatePerJob = 50; // Fixed rate per job for helpers

    // Determine base price and owner rate based on service type
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
            break;

        default:
            basePrice = 0;
            ownerRate = 0;
            break;
    }

    // Calculate additional cost for helpers (fixed rate per job)
    const helperCost = helpers * helperRatePerJob;

    // Calculate the owner's cost based on hours worked
    const ownerCost = ownerRate * estimatedHours;

    // Add-ons cost calculation
    let addonsCost = 0;
    const addons = document.querySelectorAll('input[name="addons"]:checked');
    addons.forEach(addon => {
        switch (addon.value) {
            case 'fridge':
                addonsCost += 35;
                break;
            case 'oven':
                addonsCost += 45;
                break;
            case 'laundry_fold':
                addonsCost += 20;
                break;
            case 'laundry_wash':
                addonsCost += 35;
                break;
            case 'garage':
                addonsCost += 50; // Adjust as needed if different
                break;
            case 'porch':
                addonsCost += 20;
                break;
            case 'sunroom':
                addonsCost += 50;
                break;
            case 'dishes':
                addonsCost += 20;
                break;
            case 'windows':
                addonsCost += 5;
                break;
            case 'restocking':
                addonsCost += 20;
                break;
        }
    });

    // Calculate the total price
    const totalPrice = basePrice + helperCost + ownerCost + addonsCost;

    // Display the total price
    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

