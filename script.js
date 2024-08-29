function calculateQuote() {
    const jobType = document.getElementById('jobType').value;
    const houseSize = parseInt(document.getElementById('houseSize').value);
    const rooms = parseInt(document.getElementById('rooms').value);
    const bathrooms = parseInt(document.getElementById('bathrooms').value);
    const cleaners = parseInt(document.getElementById('cleaners').value);
    const extras = Array.from(document.getElementById('extras').selectedOptions).map(option => option.value);

    let baseRate = 0;
    let helperRate = 0;

    switch (jobType) {
        case 'standard':
            baseRate = 60;
            helperRate = 50;
            break;
        case 'deep':
            baseRate = 70;
            helperRate = 120;
            break;
        case 'moveInOut':
            baseRate = 120;
            break;
        case 'postConstruction':
            baseRate = 160;
            break;
        case 'airbnb':
            baseRate = 100 + (houseSize * 0.2);
            helperRate = 50;
            break;
    }

    let price = (baseRate * rooms) + (bathrooms * 15) + (houseSize * (jobType === 'standard' ? 0.3 : 0.5));

    // Add helper costs
    if (jobType === 'standard' || jobType === 'deep' || jobType === 'airbnb') {
        price += helperRate * cleaners;
    }

    // Add extras
    extras.forEach(extra => {
        switch (extra) {
            case 'ecoFriendly': price += 10; break;
            case 'pet': price += 5; break;
            case 'lowDirty': price += 10; break;
            case 'mediumDirty': price += 20; break;
            case 'highDirty': price += 30; break;
            case 'makeBed': price += rooms * 5; break;
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
            case 'windows': price += rooms * 5; break;
            case 'kitchenSmall': price += 12; break;
            case 'kitchenMedium': price += 20; break;
            case 'kitchenBig': price += 30; break;
            case 'gasStove': price += 5; break;
            case 'office': price += 10; break;
            case 'diningRoom': price += 10; break;
            case 'basement': price += 10; break;
            case 'bathroom': price += 15; break;
            case 'carpetHardFloor': price += 12; break;
            case 'onlyCarpet': price += 5; break;
        }
    });

    // Add automatic fees (gas, marketing, material)
    price += 20;

    //
