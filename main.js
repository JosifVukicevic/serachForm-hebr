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

// tab going to

document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('villas-type');
    var dropdown = document.getElementById('myDropdown2');
    var links = dropdown.getElementsByTagName('a');

    inputField.addEventListener('click', function () {
        dropdown.style.display = 'block';
    });

    inputField.addEventListener('input', function () {
        var inputText = inputField.value.toLowerCase();

        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            var cityName = link.textContent.toLowerCase();

            if (cityName.indexOf(inputText) === -1) {
                link.style.display = 'none';
            } else {
                link.style.display = 'block';
            }
        }
    });

    inputField.addEventListener('blur', function () {
        for (var i = 0; i < links.length; i++) {
            links[i].style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var cityInput = document.getElementById("cityInput");
    var dropdownContent = document.getElementById("myDropdown1");

    cityInput.addEventListener("input", function () {
        var value = this.value.toLowerCase();
        var dropdownItems = dropdownContent.getElementsByTagName("a");
        for (var i = 0; i < dropdownItems.length; i++) {
            var cityName = dropdownItems[i].innerText.toLowerCase();
            if (cityName.indexOf(value) > -1) {
                dropdownItems[i].style.display = "";
            } else {
                dropdownItems[i].style.display = "none";
            }
        }
        if (value === "") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    dropdownContent.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            var selectedCity = e.target.innerText;
            cityInput.value = selectedCity;
            console.log(selectedCity);
            dropdownContent.style.display = "none";
        }
    });

    cityInput.addEventListener("click", function () {
        this.value = "";
    });
});

// Tip - tab 2

function setType(type) {
    document.getElementById('villas-type').value = type;
    document.getElementById('myDropdown2').style.display = 'none';
}

function toggleDropdown() {
    var dropdown = document.getElementById('myDropdown2');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

document.addEventListener('click', function (event) {
    var dropdownContainer = document.getElementById('dropdown-container');
    var targetElement = event.target;

    var isClickInsideDropdown = dropdownContainer.contains(targetElement) || targetElement.id === 'myDropdown2';

    if (!isClickInsideDropdown) {
        document.getElementById('myDropdown2').style.display = 'none';
    }
});

// Travelers validacija - tab 2

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

document.addEventListener('DOMContentLoaded', function () {
    function handleDateChanges(tabId) {
        var startDateInput = document.getElementById('startDate-' + tabId);
        var endDateInput = document.getElementById('endDate-' + tabId);

        startDateInput.addEventListener('change', function () {
            if (startDateInput.value) {
                var startDateValue = startDateInput.value;
                console.log('Start date for tab ' + tabId + ':', startDateValue);
            }
        });

        // Provjeravamo da li postoji endDateInput prije dodavanja event listenera
        if (endDateInput) {
            endDateInput.addEventListener('change', function () {
                if (endDateInput.value) {
                    var endDateValue = endDateInput.value;
                    console.log('End date for tab ' + tabId + ':', endDateValue);
                }
            });
        }
    }

    var tabIds = ['tab2', 'tab3', 'tab4', 'tab6'];
    tabIds.forEach(function (tabId) {
        handleDateChanges(tabId);
    });
});

// TAB 3

// pick up input

document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("pickUp");
    var dropdown = document.getElementById("myDropdown-pickUp");
    var locations = dropdown.getElementsByTagName("a");

    inputField.addEventListener("click", function () {
        dropdown.style.display = "block";
    });

    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            var selectedLocation = event.target.textContent;
            inputField.value = selectedLocation;
            dropdown.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target !== inputField && event.target.parentNode !== dropdown) {
            dropdown.style.display = "none";
        }
    });

    inputField.addEventListener("input", function () {
        var searchTerm = inputField.value.toLowerCase();
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i].textContent.toLowerCase();
            if (location.includes(searchTerm)) {
                locations[i].style.display = "block";
            } else {
                locations[i].style.display = "none";
            }
        }
        if (inputField.value === "") {
            for (var i = 0; i < locations.length; i++) {
                locations[i].style.display = "block";
            }
            dropdown.style.display = "block";
        }
    });
});

// same pick up input

document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("same-pickUp");
    var dropdown = document.getElementById("myDropdown-samePickUp");
    var locations = dropdown.getElementsByTagName("a");

    inputField.addEventListener("click", function () {
        dropdown.style.display = "block";
    });

    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            var selectedLocation = event.target.textContent;
            inputField.value = selectedLocation;
            dropdown.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target !== inputField && event.target.parentNode !== dropdown) {
            dropdown.style.display = "none";
        }
    });

    inputField.addEventListener("input", function () {
        var searchTerm = inputField.value.toLowerCase();
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i].textContent.toLowerCase();
            if (location.includes(searchTerm)) {
                locations[i].style.display = "block";
            } else {
                locations[i].style.display = "none";
            }
        }
        if (inputField.value === "") {
            for (var i = 0; i < locations.length; i++) {
                locations[i].style.display = "block";
            }
            dropdown.style.display = "block";
        }
    });
});

// time - pick up i drop off

document.addEventListener("DOMContentLoaded", function () {
    generateTimeOptions("dropdown-for-cars-pickUpTime");
    generateTimeOptions("dropdown-for-cars-dropOffTime");
    generateTimeOptions("dropdown-for-transfers-pickUpTime");

    function generateTimeOptions(elementId) {
        var dropdown = document.getElementById(elementId);

        for (var hour = 0; hour <= 23; hour++) {
            for (var minutes = 0; minutes <= 30; minutes += 30) {
                var time = formatTime(hour) + ":" + formatTime(minutes);
                var option = document.createElement("a");
                option.setAttribute("href", "#");
                option.textContent = time;
                dropdown.appendChild(option);
            }
        }
    }

    function formatTime(time) {
        return (time < 10 ? "0" : "") + time;
    }
});


// funkcionalnosti za time - cars tab

document.addEventListener("DOMContentLoaded", function () {
    var pickTimeDiv = document.getElementById("main-div-for-pickTime");
    var dropTimeDiv = document.getElementById("main-div-for-dropTime");

    var pickTimeInput = pickTimeDiv.querySelector(".input-for-time");
    var pickTimeDropdown = document.getElementById("dropdown-for-cars-pickUpTime");
    var dropTimeInput = dropTimeDiv.querySelector(".input-for-time");
    var dropTimeDropdown = document.getElementById("dropdown-for-cars-dropOffTime");

    var selectedTime;

    function openDropdown(dropdown) {
        dropdown.style.display = "block";
    }

    function closeDropdown(dropdown) {
        dropdown.style.display = "none";
    }

    function setTime(input, time) {
        input.value = time;
    }

    pickTimeDiv.addEventListener("click", function () {
        openDropdown(pickTimeDropdown);
    });

    dropTimeDiv.addEventListener("click", function () {
        openDropdown(dropTimeDropdown);
    });

    pickTimeInput.addEventListener("click", function (event) {
        event.stopPropagation();
        openDropdown(pickTimeDropdown);
    });

    dropTimeInput.addEventListener("click", function (event) {
        event.stopPropagation();
        openDropdown(dropTimeDropdown);
    });

    document.addEventListener("click", function (event) {
        if (event.target !== pickTimeInput && event.target !== dropTimeInput) {
            closeDropdown(pickTimeDropdown);
            closeDropdown(dropTimeDropdown);
        }
    });

    pickTimeDropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectedTime = event.target.textContent;
            setTime(pickTimeInput, selectedTime);
            closeDropdown(pickTimeDropdown);
        }
    });

    dropTimeDropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectedTime = event.target.textContent;
            setTime(dropTimeInput, selectedTime);
            closeDropdown(dropTimeDropdown);
        }
    });
});

// transfers tab

// departure

document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("departureTransfers");
    var dropdown = document.getElementById("departure-transfers");
    var locations = dropdown.getElementsByTagName("a");

    inputField.addEventListener("click", function () {
        dropdown.style.display = "block";
    });

    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            var selectedLocation = event.target.textContent;
            inputField.value = selectedLocation;
            dropdown.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target !== inputField && event.target.parentNode !== dropdown) {
            dropdown.style.display = "none";
        }
    });

    inputField.addEventListener("input", function () {
        var searchTerm = inputField.value.toLowerCase();
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i].textContent.toLowerCase();
            if (location.includes(searchTerm)) {
                locations[i].style.display = "block";
            } else {
                locations[i].style.display = "none";
            }
        }
        if (inputField.value === "") {
            for (var i = 0; i < locations.length; i++) {
                locations[i].style.display = "block";
            }
            dropdown.style.display = "block";
        }
    });
});

// arrival

document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("arrivalTransefrs");
    var dropdown = document.getElementById("arrival-transfers");
    var locations = dropdown.getElementsByTagName("a");

    inputField.addEventListener("click", function () {
        dropdown.style.display = "block";
    });

    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            var selectedLocation = event.target.textContent;
            inputField.value = selectedLocation;
            dropdown.style.display = "none";
        }
    });

    document.addEventListener("click", function (event) {
        if (event.target !== inputField && event.target.parentNode !== dropdown) {
            dropdown.style.display = "none";
        }
    });

    inputField.addEventListener("input", function () {
        var searchTerm = inputField.value.toLowerCase();
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i].textContent.toLowerCase();
            if (location.includes(searchTerm)) {
                locations[i].style.display = "block";
            } else {
                locations[i].style.display = "none";
            }
        }
        if (inputField.value === "") {
            for (var i = 0; i < locations.length; i++) {
                locations[i].style.display = "block";
            }
            dropdown.style.display = "block";
        }
    });
});

// pick up time

document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("pick-time-input-transfers");
    var dropdown = document.getElementById("dropdown-for-transfers-pickUpTime");

    input.addEventListener("click", function (event) {
        dropdown.style.display = "block";
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && event.target !== input) {
            dropdown.style.display = "none";
        }
    });

    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            input.value = event.target.textContent;
            dropdown.style.display = "none";
        }
    });
});


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

                var query_parameters = '?q=' + location + '&from=' + fromDate + '&to=' + toDate + '&type=' + numberOfType;
                url = base_url + query_parameters + data;

                break;
            case '#tab3':
                var base_url = 'www.montenegrocars.com/en/';
                var query_parameters = '?';

                var locationNumber;

                if (location === "Tivat Bus Station") {
                    locationNumber = "205";
                } else if (location === "Porto Montenegro") {
                    locationNumber = "208";
                } else {
                    location = location
                }

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

