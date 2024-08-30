function calculateQuote() {
    const jobType = document.getElementById('jobType').value;
    const helper = document.getElementById('helper').value === "yes" ? 1 : 0;
    const houseSize = parseInt(document.getElementById('houseSize').value) || 0;
    const bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;
    const bathrooms = parseInt(document.getElementById('bathrooms').value) || 0;
    const beds = parseInt(document.getElementById('beds').value) || 0;
    const extras = Array.from(document.querySelectorAll('#extras input:checked')).map(input => input.value);
    const flatRate = parseFloat(document.getElementById('flatRate').value) || 0;

    let price = flatRate || 0;

    if (!flatRate) {
        // Base rate calculations
        price += (bedrooms * 25) + (bathrooms * 20) + 30; // Bedrooms, Bathrooms, Kitchen
        price += helper * 50; // Helper cost

        // Add extras
        extras.forEach(extra => {
            switch (extra) {
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
                case 'windows': price += 5 * bedrooms; break;
            }
        });

        // Add cost for changing bed sheets
        price += beds * 5;

        // Adjust for frequency
        if (jobType === "weekly") {
            // No change for weekly
        } else if (jobType === "biweekly") {
            price -= 10; // $10 discount for biweekly
        } else if (jobType === "monthly") {
            price *= 1.2; // 20% increase for monthly
        } else if (jobType === "deep") {
            price *= 2; // Double the price for deep cleaning
        }
    }

    // Calculate competitive prices
    const discount5 = (price * 0.95).toFixed(2);
    const discount10 = (price * 0.90).toFixed(2);
    const discount15 = (price * 0.85).toFixed(2);

    // Display the result
    document.getElementById('result').innerHTML = `
        <p><strong>Final Price: $${price.toFixed(2)}</strong></p>
        <p><strong>Negotiation Options:</strong></p>
        <ul>
            <li>Option 1 (



