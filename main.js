// Funkcionalnost - prikazivanje formi unutar tabova

function showTab(tabId) {
    var tabContainers = document.querySelectorAll('.container-for-tab');
    tabContainers.forEach(function (container) {
        container.classList.remove('active');
    });

    switch (tabId) {
        case 'tab1':
            document.getElementById('tab1').classList.add('active');
            setActiveTabItem('tab1');
            break;
        case 'tab2':
            document.getElementById('tab2').classList.add('active');
            setActiveTabItem('tab2');
            break;
        case 'tab3':
            document.getElementById('tab3').classList.add('active');
            setActiveTabItem('tab3');
            break;
        case 'tab4':
            document.getElementById('tab4').classList.add('active');
            setActiveTabItem('tab4');
            break;
        case 'tab5':
            document.getElementById('tab5').classList.add('active');
            setActiveTabItem('tab5');
            break;
        case 'tab6':
            document.getElementById('tab6').classList.add('active');
            setActiveTabItem('tab6');
            break;
        default:
            console.log('Invalid tabId');
            break;
    }
}

function setActiveTabItem(tabId) {
    var tabItems = document.querySelectorAll('.nav-item');
    tabItems.forEach(function (item) {
        item.classList.remove('active');
    });

    var activeTabItem = document.querySelector('a[href="#' + tabId + '"]');
    if (activeTabItem) {
        activeTabItem.parentNode.classList.add('active');
    }
}

// VILLAS TAB

const cities = ["Bay of Kotor", "Budva", "Tivat", "Kotor", "Herceg Novi", "Bar", "Petrovac", "Ulcinj", "Podgorica", "Montenegro Coastline", "Montenegro North", "Central Montenegro"];
const types = ["Villa", "Apartment", "Hotel room"];

const cityInput = document.getElementById('cityInput');
const typeInput = document.getElementById('villas-type');

const cityList = document.getElementById('myDropdown1');
const typeList = document.getElementById('myDropdown2');

let selectedCity = "";
let selectedType = "";

cityInput.addEventListener('input', function () {
    const inputValue = cityInput.value.toLowerCase();
    const filteredCities = cities.filter(city => city.toLowerCase().includes(inputValue));
    displayCities(filteredCities, cityList);
});

cityInput.addEventListener('focus', function () {
    displayCities(cities, cityList);
});

typeInput.addEventListener('input', function () {
    const inputValue = typeInput.value.toLowerCase();
    const filteredTypes = types.filter(type => type.toLowerCase().includes(inputValue));
    displayTypes(filteredTypes, typeList);
});

typeInput.addEventListener('focus', function () {
    displayTypes(types, typeList);
});

function displayCities(citiesArray, list) {
    list.innerHTML = "";
    citiesArray.forEach(city => {
        const listItem = document.createElement('a');
        listItem.textContent = city;
        listItem.addEventListener('click', function () {
            selectedCity = city;
            cityInput.value = city;
            list.innerHTML = "";
            updateUrlAndSubmit();
            console.log("Selected city:", selectedCity);
        });
        list.appendChild(listItem);
    });
}

function displayTypes(typesArray, list) {
    list.innerHTML = "";
    typesArray.forEach(type => {
        const listItem = document.createElement('a');
        listItem.textContent = type;
        listItem.addEventListener('click', function () {
            selectedType = type;
            typeInput.value = type;
            list.innerHTML = "";
            updateUrlAndSubmit();
            console.log("Selected type:", selectedType);
        });
        list.appendChild(listItem);
    });
}

function updateUrlAndSubmit() {
    var url = window.location.href.split('#')[0] + `#${selectedCity}-${selectedType}`;
    window.location.href = url;
}


// Travelers validacija


var dropdownContent = document.getElementById('myDropdown3');
var travelersCon = document.getElementById('valueForTravelers');
var fullDivTravelers = document.getElementById('main-travelers-div');

document.addEventListener('click', function(event) {
    var targetElement = event.target;

    var isClickInsideDropdown = dropdownContent.contains(targetElement) || targetElement === travelersCon || targetElement === fullDivTravelers;

    if (!isClickInsideDropdown) {
        dropdownContent.style.visibility = 'hidden';
    } else {
        dropdownContent.style.visibility = 'visible';
    }
});



function formatData() {
    var formattedData = '';
    var adultsCount = document.getElementById('adults-count').textContent;
    var adultsSmallCount = document.getElementById('adults-small-count').textContent;
    var infantsCount = document.getElementById('infants-count').textContent;
    var bedroomsCount = document.getElementById('bedrooms-count').textContent;
    var bathroomsCount = document.getElementById('bathrooms-count').textContent;
    var petsAllowed = document.querySelector('.checkbox').checked;

    formattedData = 'Adults: ' + adultsCount + ', ' +
                    'Adults (2-12 yo): ' + adultsSmallCount + ', ' +
                    'Infants: ' + infantsCount + ', ' +
                    'Bedrooms: ' + bedroomsCount + ', ' +
                    'Bathrooms: ' + bathroomsCount + ', ' +
                    'Pets Allowed: ' + petsAllowed;

    return formattedData;
}

window.onload = function() {
    var plusButtons = document.querySelectorAll('.button-plus');
    var minusButtons = document.querySelectorAll('.button-minus');

    plusButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var travelerCountElement = this.parentElement.querySelector('span[id$="-count"]');
            var currentCount = parseInt(travelerCountElement.textContent);
            travelerCountElement.textContent = currentCount + 1;
            console.log(formatData());
            document.getElementById('valueForTravelers').value = formatData();
        });
    });

    minusButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var travelerCountElement = this.parentElement.querySelector('span[id$="-count"]');
            var currentCount = parseInt(travelerCountElement.textContent);
            if (currentCount > 0) {
                travelerCountElement.textContent = currentCount - 1;
                console.log(formatData());
                document.getElementById('valueForTravelers').value = formatData();
            }
        });
    });

    var checkbox = document.querySelector('.checkbox');
    checkbox.addEventListener('change', function() {
        console.log(formatData());
        document.getElementById('valueForTravelers').value = formatData();
    });

    var applyButton = document.querySelector('.button-finTravelers button');
    applyButton.addEventListener('click', function() {
        console.log(formatData());
        document.getElementById('valueForTravelers').value = formatData();
    });
};