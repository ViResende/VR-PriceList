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

    let price = 0;

    if (jobType === 'standard' || jobType === 'deep') {
        price = (baseRate * rooms) + (bathrooms * 15) + (houseSize * (jobType === 'standard' ? 0.3 : 0.5));
    } else if (jobType === 'moveInOut') {
        price = (houseSize * 0.3) + helperRate;
    } else if (jobType === 'postConstruction') {
        price = (houseSize * 0.5) + helperRate;
    }

    // Adding cleaners' rate
    price += cleanerRate * cleaners;

    if (extras.includes('ecoFriendly')) price += 10;
    if (extras.includes('pet')) price += 5;

    if (extras.includes('lowDirty')) price += 10;
    if (extras.includes('mediumDirty')) price += 20;
    if (extras.includes('highDirty')) price += 30;

    if (extras.includes('makeBed')) price += rooms * 5;
    if (extras.includes('fridge')) price += 35;
    if (extras.includes('oven')) price += 40;

    if (extras.includes('foldLaundry')) price += 15;
    if (extras.includes('washFoldLaundry')) price += 25;

    if (extras.includes('garage')) {
        price += houseSize < 1000 ? 50 : houseSize < 2000 ? 90 : 130;
    }
    if (extras.includes('porch')) {
        price += houseSize < 1000 ? 20 : houseSize < 2000 ? 30 : 40;
    }
    if (extras.includes('sunroom')) {
        price += houseSize < 1000 ? 30 : houseSize < 2000 ? 45 : 60;
    }
    if (extras.includes('dishes')) price += 10;
    if (extras.includes('windows')) price += 5 * rooms;

    if (extras.includes('office')) price += 10;
    if (extras.includes('diningRoom')) price += 10;
    if (extras.includes('basement')) price += 10;

    if (extras.includes('carpetHardFloor')) price += 12;
    if (extras.includes('onlyCarpet')) price += 5;

    if (extras.includes('kitchenSmall')) price += 12;
    if (extras.includes('kitchenMedium')) price += 20;
    if (extras.includes('kitchenBig')) price += 30;

    if (extras.includes('nonEcoMaterial')) price += 5;
    if (extras.includes('marketing')) price += 5;

    // Adding gas fee
    price += 10;

    // Show pricing options
    const discount5 = (price * 0.95).toFixed(2);
    const discount10 = (price * 0.90).toFixed(2);
    const discount15 = (price * 0.85).toFixed(2);

    document.getElement
