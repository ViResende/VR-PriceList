function calculateQuote() {
    const jobType = document.getElementById('jobType').value;
    const helpers = parseInt(document.getElementById('helpers').value) || 0;
    const houseSize = parseInt(document.getElementById('houseSize').value) || 0;
    const bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;
    const bathrooms = parseInt(document.getElementById('bathrooms').value) || 0;
    const beds = parseInt(document.getElementById('beds').value) || 0;
    const windows = parseInt(document.getElementById('windows').value) || 0;
    const extras = Array.from(document.querySelectorAll('#extras input:checked')).map(input => input.value);
    const flatRate = parseFloat(document.getElementById('flatRate').value) || 0;

    let price = flatRate || 0;

    if (!flatRate) {
        // Base rate calculations
        price += (bedrooms * 25) + (bathrooms * 20) + 30; // Bedrooms, Bathrooms, Kitchen

        // Calculate helper cost based on job type
        let helperCost = 0;
        if (jobType === 'standard' || jobType === 'oneTime' || jobType === 'weekly' || jobType === 'biweekly' || jobType === 'monthly') {
            helperCost = 50;
        } else if (jobType === 'deep') {
            helperCost = 120;
        }
        price += helperCost * helpers;

        // Add extras
        extras.forEach(extra => {
            switch (extra) {
                case 'kitchenClean': price += 30; break;
                case 'kitchenStove': price += 5; break;
                case 'office': price += 10; break;
                case 'livingRoomSmall': price += 10; break;
                case 'livingRoomMedium': price += 20; break;
                case 'basement': price += 15; break;
                case 'onlyCarpet': price += 5; break;
                case 'ecoFriendly': price += 10; break;
                case 'pet': price += 5; break;
                case 'lowDirty': price += 10; break;
                case 'mediumDirty': price += 20; break;
                case 'highDirty': price += 30; break;
                case 'fridge': price += 35; break;
                case 'oven': price += 40; break;
                case 'foldLaundry': price += 15; break;
                case 'washFoldLaundry': price += 25; break;
                case 'garageSmall': price += 50; break;
                case 'garageMedium': price += 90; break;
                case 'garageBig': price += 130; break;
                case 'porchSmall': price += 20; break;
                case 'porchMedium': price += 30; break;
                case 'porchBig': price += 40; break;
                case 'sunroomSmall': price += 30; break;
                case 'sunroomMedium': price += 45; break;
                case 'sunroomBig': price += 60; break;
                case 'dishes': price += 10; break;
                case 'windows': price += 5 * windows; break;
            }
        });

        // Add cost for changing bed sheets
        price += beds * 5;

        // Adjust for frequency
        if (jobType === "weekly") {
            // No change for weekly
        } else if (jobType === "biweekly") {
            price -=


