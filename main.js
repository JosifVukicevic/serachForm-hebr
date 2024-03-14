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
/*
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
*/


// Travelers validacija

var dropdownContent = document.getElementById('myDropdown3');
var travelersCon = document.getElementById('valueForTravelers');
var fullDivTravelers = document.getElementById('main-travelers-div');
var icondropDown = document.getElementById('icon-drop');

document.addEventListener('click', function (event) {
    var targetElement = event.target;

    var isClickInsideDropdown = dropdownContent.contains(targetElement) || targetElement === travelersCon || targetElement === fullDivTravelers || targetElement === icondropDown;

    if (!isClickInsideDropdown) {
        dropdownContent.style.visibility = 'hidden';
    } else {
        dropdownContent.style.visibility = 'visible';
    }
});


function formatData() {
    var adultsCount = document.getElementById('adults-count').textContent;
    var adultsSmallCount = document.getElementById('adults-small-count').textContent;
    var infantsCount = document.getElementById('infants-count').textContent;
    var bedroomsCount = document.getElementById('bedrooms-count').textContent;
    var bathroomsCount = document.getElementById('bathrooms-count').textContent;
    var petsAllowed = document.querySelector('.checkbox').checked;
    var petsAllowedNumber;

    if (petsAllowed) {
        petsAllowedNumber = 1;
    } else {
        petsAllowedNumber = 0;
    }

    var numberOfGuests = parseInt(adultsCount) + parseInt(adultsSmallCount) + parseInt(infantsCount);

    var formattedData = '&guests=' + numberOfGuests + '&adults=' + adultsCount +
        '&children=' + adultsSmallCount +
        '&infants=' + infantsCount +
        '&bedrooms=' + bedroomsCount +
        '&bathrooms=' + bathroomsCount +
        '&pets=' + petsAllowedNumber;

    return formattedData;
}

window.onload = function () {
    var plusButtons = document.querySelectorAll('.button-plus');
    var minusButtons = document.querySelectorAll('.button-minus');

    plusButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var travelerCountElement = this.parentElement.querySelector('span[id$="-count"]');
            var currentCount = parseInt(travelerCountElement.textContent);
            travelerCountElement.textContent = currentCount + 1;
            console.log(formatData());
            document.getElementById('valueForTravelers').value = formatData();
        });
    });

    minusButtons.forEach(function (button) {
        button.addEventListener('click', function () {
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
    checkbox.addEventListener('change', function () {
        console.log(formatData());
        document.getElementById('valueForTravelers').value = formatData();
    });
    var dropdownContent = document.getElementById('myDropdown3');
    var applyButton = document.querySelector('.button-finTravelers button');
    applyButton.addEventListener('click', function () {
        console.log("pronadjeno")
        dropdownContent.style.visibility = "hidden";
    });
};

// kalendar

var data = formatData();
console.log(data)



// Search dugme - funkcija za prosljedjivanje na odgovarajuci url

function updateUrlAndSubmit() {
    var activeTab = document.querySelector('.nav-item.active');

    if (activeTab) {
        var tabId = activeTab.getAttribute('href');
        var data = formatData();
        var url;

        switch (tabId) {
            case '#tab1':
                console.log("hotels")
                break;
            case '#tab2':
                var base_url = 'https://montenegrovillas.com/en';
                window.location.href = base_url;
                console.log("usao")
                
                var query_parameters = '?q='+ location + '&from=' + fromDate + '&to=' + toDate + '&type=' + numberOfType;
                url = base_url + query_parameters + data;
                
                break;
            case '#tab3':
                var base_url = 'www.montenegrocars.com/en/';
                var query_parameters = '?';
                url = 'www.montenegrocars.com/en/?goingTo=Tivat&type=Car';
                break;
            case '#tab4':
                var base_url = 'www.montenegrotransfers.com/en/';
                var query_parameters = '?';
                url = 'www.montenegrotansfers.com/en/?goingTo=Tivat&type=Transfer';
                break;
            case '#tab5':
                var base_url = 'www.montenegroactivities.com/en/';
                var query_parameters = '?';
                url = 'www.montenegroactivities.com/en/?goingTo=Tivat&type=Activity';
                break;
            case '#tab6':
                var base_url = 'www.montenegrocharter.com/en/';
                var query_parameters = '?';
                url = 'www.montenegrocharter.com/en/?goingTo=Tivat&type=Boat';
                break;
            default:
                return;
        }
    }
}

/*
        var allFieldsFilled = true;
        var inputFields = activeTab.querySelectorAll('input[type="text"], select');
        inputFields.forEach(function(input) {
            if (!input.value) {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            window.location.href = url;
        } else {
            console.log('Molimo Vas da popunite sva polja.');
        }
    }
}
*/
