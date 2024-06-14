// podaci iz formi

let form2 = {
    villas_goingTo: "",
    villas_fromDate: "",
    villas_toDate: "",
    villas_type: "",
    villas_travelers: "",
    villas_numberTravelers: "",
    villas_fromDateFormat: "",
    villas_toDateFormat: "",
};

let form3 = {
    cars_pickUp: "",
    cars_samePickUp: "",
    cars_fromDate: "",
    cars_toDate: "",
    cars_pickUpTime: "",
    cars_dropOffTime: "",
    cars_fromDateFormat: "",
    cars_toDateFormat: "",
    cars_catPickId: "",
    cars_samePickUp: "",
};

let form4 = {
    transfers_departure: "",
    transfers_arrival: "",
    transfers_date: "",
    transfers_pickUpTime: "",
    transfers_dateFormat: "",
};

let form5 = {
    thingsToDo_destinations: "",
    thingsToDo_destinationsID: "",
    thingsToDo_activities: "",
    thingsToDo_activitiesID: "",
};

let form6 = {
    charter_destination: "",
    charter_arrivalDate: "",
    charter_departureDate: "",
    charter_type: "",
    charter_guests: "",
};

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
            form2.villas_goingTo = selectedCity;
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

    if (type === 'Villa') {
        type = "1";
        form2.villas_type = type;
    }
    else if (type === 'Apartment') {
        type = "2";
        form2.villas_type = type;
    }
    else if (type === 'Hotel room') {
        type = "3";
        form2.villas_type = type;
    }
    else {
        type = "0";
    }

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
    form2.villas_numberTravelers = numberOfGuests;

    var formattedData = '&guests=' + numberOfGuests + '&adults=' + adultsCount +
        '&children=' + adultsSmallCount +
        '&infants=' + infantsCount +
        '&pets=' + petsAllowedNumber +
        '&bedrooms=' + bedroomsCount +
        '&bathrooms=' + bathroomsCount;


    form2.villas_travelers = formattedData;

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
            document.getElementById('valueForTravelers').value = form2.villas_numberTravelers;
        });
    });



    minusButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var travelerCountElement = this.parentElement.querySelector('span[id$="-count"]');
            var currentCount = parseInt(travelerCountElement.textContent);
            if (currentCount > 0) {
                travelerCountElement.textContent = currentCount - 1;
                console.log(formatData());
                document.getElementById('valueForTravelers').value = form2.villas_numberTravelers;
            }
        });
    });

    var checkbox = document.querySelector('.checkbox');
    checkbox.addEventListener('change', function () {
        console.log(formatData());
        document.getElementById('valueForTravelers').value = form2.villas_numberTravelers;
    });
};

// kalendar
document.addEventListener('DOMContentLoaded', function () {
    function handleDateChanges(tabId) {
        var startDateInput = document.getElementById('startDate-' + tabId);
        var endDateInput = document.getElementById('endDate-' + tabId);

        if (tabId === 'tab3') {
            var now = new Date();
            var startDate = new Date(now);
            startDate.setDate(now.getDate() + 1);

            var endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 7); 

            var formattedStartDate = startDate.toISOString().split('T')[0];
            var formattedEndDate = endDate.toISOString().split('T')[0];

            startDateInput.value = formattedStartDate;
            endDateInput.value = formattedEndDate;

            // Set initial form3 values
            form3.cars_fromDate = formattedStartDate;
            form3.cars_fromDateFormat = startDate.toLocaleDateString('en-GB').replace(/\//g, '/');

            form3.cars_toDate = formattedEndDate;
            form3.cars_toDateFormat = endDate.toLocaleDateString('en-GB').replace(/\//g, '/');

        }

        if (tabId === 'tab4') {
            var now = new Date();
            var startDate = new Date(now);
            startDate.setDate(now.getDate());

            var formattedStartDate = startDate.toISOString().split('T')[0];

            startDateInput.value = formattedStartDate;
            form4.transfers_date = formattedStartDate;
            form4.transfers_dateFormat = startDate.toLocaleDateString('en-GB').replace(/\//g, '/');

        }

        startDateInput.addEventListener('change', function () {
            var startDateValue = startDateInput.value;
            console.log('Start date for tab ' + tabId + ':', startDateValue);

            if (tabId === 'tab2') {
                form2.villas_fromDate = startDateValue;
                var dataString = startDateValue;
                var parts = dataString.split("-");
                var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];
                form2.villas_fromDateFormat = newFormat;

            } else if (tabId === 'tab3') {
                form3.cars_fromDate = startDateValue;
                var dataString = startDateValue;
                var parts = dataString.split("-");
                var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];
                form3.cars_fromDateFormat = newFormat;
            } else if (tabId === 'tab4') {
                form4.transfers_date = startDateValue;
                var dataString = startDateValue;
                var parts = dataString.split("-");
                var newFormat = parts[2] + "-" + parts[1] + "-" + parts[0];
                form4.transfers_dateFormat = newFormat;
            } else if (tabId === 'tab6') {
                form6.charter_arrivalDate = startDateValue;
            } else {
                console.log("Nothing");
            }
        });

        if (endDateInput) {
            endDateInput.addEventListener('change', function () {
                var endDateValue = endDateInput.value;
                console.log('End date for tab ' + tabId + ':', endDateValue);

                if (tabId === 'tab2') {
                    form2.villas_toDate = endDateValue;
                    var dataString = endDateValue;
                    var parts = dataString.split("-");
                    var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];
                    form2.villas_toDateFormat = newFormat;
                } else if (tabId === 'tab3') {
                    form3.cars_toDate = endDateValue;
                    var dataString = endDateValue;
                    var parts = dataString.split("-");
                    var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];
                    form3.cars_toDateFormat = newFormat;
                } else if (tabId === 'tab6') {
                    form6.charter_departureDate = endDateValue;
                } else {
                    console.log("Nothing");
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

            var parentDiv = event.target.closest('div');
            if (parentDiv.id === "cat-tivatAirport") {
                form3.cars_catPickId = "224";
            }
            else if (parentDiv.id === "cat-budvaDowntown") {
                form3.cars_catPickId = "112";
            }
            else if (parentDiv.id === "cat-hercegNoviDowntown") {
                form3.cars_catPickId = "111";
            }
            else if (parentDiv.id === "cat-hyattRegencyKotor") {
                form3.cars_catPickId = "198";
            }
            else if (parentDiv.id === "cat-podgoricaDowntown") {
                form3.cars_catPickId = "109";
            }
            else {
                console.log("Odabrana lokacija nije unutar diva.");
            }

            if (selectedLocation === "Tivat Bus Station") {
                form3.cars_pickUp = "205";
            }
            else if (selectedLocation === "Porto Montenegro") {
                form3.cars_pickUp = "208";
            }
            else if (selectedLocation === "Nikki Beach Tivat") {
                form3.cars_pickUp = "211";
            }
            else if (selectedLocation === "Petrovac - Hotel Palas") {
                form3.cars_pickUp = "118";
            }
            else if (selectedLocation === "Becici") {
                form3.cars_pickUp = "180";
            }
            else if (selectedLocation === "Bip Hotel") {
                form3.cars_pickUp = "206";
            }
            else if (selectedLocation === "Iberostar Bellevue") {
                form3.cars_pickUp = "213";
            }
            else if (selectedLocation === "Portonovi Resort") {
                form3.cars_pickUp = "207";
            }
            else if (selectedLocation === "Iberostar") {
                form3.cars_pickUp = "218";
            }
            else if (selectedLocation === "Bijela") {
                form3.cars_pickUp = "220";
            }
            else if (selectedLocation === "Kotor Downtown") {
                form3.cars_pickUp = "181";
            }
            else if (selectedLocation === "Huma Kotor Bay Hotel & Villas") {
                form3.cars_pickUp = "212";
            }
            else if (selectedLocation === "Kotor Marina") {
                form3.cars_pickUp = "216";
            }
            else if (selectedLocation === "Prčanj") {
                form3.cars_pickUp = "223";
            }
            else if (selectedLocation === "Bar") {
                form3.cars_pickUp = "172";
            }
            else if (selectedLocation === "Kolasin") {
                form3.cars_pickUp = "173";
            }
            else if (selectedLocation === "Kolasin") {
                form3.cars_pickUp = "214";
            }
            else if (selectedLocation === "Hotel Lazaro") {
                form3.cars_pickUp = "215";
            }
            else if (selectedLocation === "Hotel Keto") {
                form3.cars_pickUp = "221";
            }
            else if (selectedLocation === "Hotel Hilton") {
                form3.cars_pickUp = "222";
            }

            else {
                console.log("Nothing")
            }

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

            var parentDiv = event.target.closest('div');
            if (parentDiv.id === "cat-tivatAirport") {
                form3.cars_catSameId = "224";
            }
            else if (parentDiv.id === "cat-budvaDowntown") {
                form3.cars_catSameId = "112";
            }
            else if (parentDiv.id === "cat-hercegNoviDowntown") {
                form3.cars_catSameId = "111";
            }
            else if (parentDiv.id === "cat-hyattRegencyKotor") {
                form3.cars_catSameId = "198";
            }
            else if (parentDiv.id === "cat-podgoricaDowntown") {
                form3.cars_catSameId = "109";
            }
            else {
                console.log("Odabrana lokacija nije unutar diva.");
            }

            if (selectedLocation === "Tivat Bus Station") {
                form3.cars_samePickUp = "205";
            }
            else if (selectedLocation === "Porto Montenegro") {
                form3.cars_samePickUp = "208";
            }
            else if (selectedLocation === "Nikki Beach Tivat") {
                form3.cars_samePickUp = "211";
            }
            else if (selectedLocation === "Petrovac - Hotel Palas") {
                form3.cars_samePickUp = "118";
            }
            else if (selectedLocation === "Becici") {
                form3.cars_samePickUp = "180";
            }
            else if (selectedLocation === "Bip Hotel") {
                form3.cars_samePickUp = "206";
            }
            else if (selectedLocation === "Iberostar Bellevue") {
                form3.cars_samePickUp = "213";
            }
            else if (selectedLocation === "Portonovi Resort") {
                form3.cars_samePickUp = "207";
            }
            else if (selectedLocation === "Iberostar") {
                form3.cars_samePickUp = "218";
            }
            else if (selectedLocation === "Bijela") {
                form3.cars_samePickUp = "220";
            }
            else if (selectedLocation === "Kotor Downtown") {
                form3.cars_samePickUp = "181";
            }
            else if (selectedLocation === "Huma Kotor Bay Hotel & Villas") {
                form3.cars_samePickUp = "212";
            }
            else if (selectedLocation === "Kotor Marina") {
                form3.cars_samePickUp = "216";
            }
            else if (selectedLocation === "Prčanj") {
                form3.cars_samePickUp = "223";
            }
            else if (selectedLocation === "Bar") {
                form3.cars_samePickUp = "172";
            }
            else if (selectedLocation === "Kolasin") {
                form3.cars_samePickUp = "173";
            }
            else if (selectedLocation === "Kolasin") {
                form3.cars_samePickUp = "214";
            }
            else if (selectedLocation === "Hotel Lazaro") {
                form3.cars_samePickUp = "215";
            }
            else if (selectedLocation === "Hotel Keto") {
                form3.cars_samePickUp = "221";
            }
            else if (selectedLocation === "Hotel Hilton") {
                form3.cars_samePickUp = "222";
            }
            else {
                console.log("Nothing")
            }

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

    function roundToNextHour(date) {
        var newDate = new Date(date);
        newDate.setHours(newDate.getHours() + 1);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);
        return newDate;
    }

    function formatTime(date) {
        var hours = date.getHours().toString().padStart(2, '0');
        var minutes = date.getMinutes().toString().padStart(2, '0');
        return hours + ':' + minutes;
    }

    function setDefaultTime(input, formVariable) {
        var now = new Date();
        var roundedTime = roundToNextHour(now);
        var formattedTime = formatTime(roundedTime);
        input.value = formattedTime;
        formVariable = formattedTime;
        return formattedTime;
    }

    function openDropdown(dropdown) {
        dropdown.style.display = "block";
    }

    function closeDropdown(dropdown) {
        dropdown.style.display = "none";
    }

    function setTime(input, time, formVariable) {
        input.value = time;
        formVariable = time;
        return time;
    }

    form3.cars_pickUpTime = setDefaultTime(pickTimeInput, form3.cars_pickUpTime);
    form3.cars_dropOffTime = setDefaultTime(dropTimeInput, form3.cars_dropOffTime);

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
            var selectedTime = event.target.textContent;
            form3.cars_pickUpTime = setTime(pickTimeInput, selectedTime, form3.cars_pickUpTime);
            closeDropdown(pickTimeDropdown);
        }
    });

    dropTimeDropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            var selectedTime = event.target.textContent;
            form3.cars_dropOffTime = setTime(dropTimeInput, selectedTime, form3.cars_dropOffTime);
            closeDropdown(dropTimeDropdown);
        }
    });
});



// tab 4 - transfers tab

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

            if (selectedLocation === "Tirana") {
                form4.transfers_departure = "13135";
            }
            else if (selectedLocation === "Airport Podgorica (TGD)") {
                form4.transfers_departure = "13114";
            }
            else if (selectedLocation === "Airport Tivat (TIV)") {
                form4.transfers_departure = "13077";
            }
            else if (selectedLocation === "Petrovac") {
                form4.transfers_departure = "13073";
            }
            else if (selectedLocation === "Kolašin") {
                form4.transfers_departure = "11864";
            }
            else if (selectedLocation === "Airport Dubrovnik (DBV)") {
                form4.transfers_departure = "13786";
            }
            else if (selectedLocation === "Dubrovnik") {
                form4.transfers_departure = "11846";
            }
            else if (selectedLocation === "Airport Tirana (TIA)") {
                form4.transfers_departure = "11845";
            }
            else if (selectedLocation === "Durmitor/Žabljak") {
                form4.transfers_departure = "11844";
            }
            else if (selectedLocation === "Monastery Ostrog") {
                form4.transfers_departure = "11842";
            }
            else if (selectedLocation === "Skadar Lake") {
                form4.transfers_departure = "11841";
            }
            else if (selectedLocation === "Bar") {
                form4.transfers_departure = "11840";
            }
            else if (selectedLocation === "Kotor") {
                form4.transfers_departure = "11838";
            }
            else if (selectedLocation === "Perast") {
                form4.transfers_departure = "11837";
            }
            else if (selectedLocation === "Cetinje") {
                form4.transfers_departure = "11836";
            }
            else if (selectedLocation === "Herceg Novi") {
                form4.transfers_departure = "11835";
            }
            else if (selectedLocation === "Tivat") {
                form4.transfers_departure = "11834";
            }
            else if (selectedLocation === "Ulcinj") {
                form4.transfers_departure = "11573";
            }
            else if (selectedLocation === "Budva") {
                form4.transfers_departure = "11752";
            }
            else if (selectedLocation === "Podgorica") {
                form4.transfers_departure = "11751";
            }
            else {
                console.log("Nothing")
            }

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

            if (selectedLocation === "Tirana") {
                form4.transfers_arrival = "13135";
            }
            else if (selectedLocation === "Airport Podgorica (TGD)") {
                form4.transfers_arrival = "13114";
            }
            else if (selectedLocation === "Airport Tivat (TIV)") {
                form4.transfers_arrival = "13077";
            }
            else if (selectedLocation === "Petrovac") {
                form4.transfers_arrival = "13073";
            }
            else if (selectedLocation === "Kolašin") {
                form4.transfers_arrival = "11864";
            }
            else if (selectedLocation === "Airport Dubrovnik (DBV)") {
                form4.transfers_arrival = "13786";
            }
            else if (selectedLocation === "Dubrovnik") {
                form4.transfers_arrival = "11846";
            }
            else if (selectedLocation === "Airport Tirana (TIA)") {
                form4.transfers_arrival = "11845";
            }
            else if (selectedLocation === "Durmitor/Žabljak") {
                form4.transfers_arrival = "11844";
            }
            else if (selectedLocation === "Monastery Ostrog") {
                form4.transfers_arrival = "11842";
            }
            else if (selectedLocation === "Skadar Lake") {
                form4.transfers_arrival = "11841";
            }
            else if (selectedLocation === "Bar") {
                form4.transfers_arrival = "11840";
            }
            else if (selectedLocation === "Kotor") {
                form4.transfers_arrival = "11838";
            }
            else if (selectedLocation === "Perast") {
                form4.transfers_arrival = "11837";
            }
            else if (selectedLocation === "Cetinje") {
                form4.transfers_arrival = "11836";
            }
            else if (selectedLocation === "Herceg Novi") {
                form4.transfers_arrival = "11835";
            }
            else if (selectedLocation === "Tivat") {
                form4.transfers_arrival = "11834";
            }
            else if (selectedLocation === "Ulcinj") {
                form4.transfers_arrival = "11573";
            }
            else if (selectedLocation === "Budva") {
                form4.transfers_arrival = "11752";
            }
            else if (selectedLocation === "Podgorica") {
                form4.transfers_arrival = "11751";
            }
            else {
                console.log("Nothing")
            }

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

    // Postavljanje defaultnog vremena
    var currentTime = new Date();
    var defaultHour = currentTime.getHours() + 1;
    defaultHour = (defaultHour < 10 ? "0" : "") + defaultHour;
    var defaultTime = defaultHour + ":00";
    input.value = defaultTime;
    form4.transfers_pickUpTime = input.value;

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
            form4.transfers_pickUpTime = input.value;
            dropdown.style.display = "none";
        }
    });
});


// things to do

document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById("inputForThingToDo");
    var dropdown = document.getElementById("myDropdownForThingToDo");
    var firstDiv_vrOne = "Lake Skadar";
    var secondDiv_vrTwo = "Fishing";
    var selectedValues = [];

    inputField.addEventListener("click", function () {
        dropdown.style.display = "block";
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && event.target !== inputField) {
            dropdown.style.display = "none";
            inputField.value = selectedValues.join(", ");
        }
    });

    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            var selectedValue = event.target.textContent;
            if (selectedValues.includes(selectedValue)) {
                var index = selectedValues.indexOf(selectedValue);
                selectedValues.splice(index, 1);
            } else {
                selectedValues.push(selectedValue);
            }

            var parentDiv = event.target.parentNode.id;
            if (parentDiv === "cat-thingsDestinations") {
                firstDiv_vrOne = selectedValues[0];
                form5.thingsToDo_destinations = firstDiv_vrOne;
            } else if (parentDiv === "cat-thingsActivities") {
                secondDiv_vrTwo = selectedValues[1];
                form5.thingsToDo_activities = secondDiv_vrTwo;
            }

            // for destinations - id

            if (firstDiv_vrOne === "Durmitor") {
                firstDiv_vrOne = "6";
                form5.thingsToDo_destinations = "Durmitor";
            }
            else if (firstDiv_vrOne === "Kotor") {
                firstDiv_vrOne = "7";
            }
            else if (firstDiv_vrOne === "Budva") {
                firstDiv_vrOne = "18";
            }
            else if (firstDiv_vrOne === "Prokletije") {
                firstDiv_vrOne = "19";
            }
            else if (firstDiv_vrOne === "Lake Skadar") {
                firstDiv_vrOne = "20";
            }
            else if (firstDiv_vrOne === "Ada Bojana") {
                firstDiv_vrOne = "21";
            }
            else if (firstDiv_vrOne === "Tara river") {
                firstDiv_vrOne = "22";
            }
            else {
                console.log("/")
            }


            // for activities - id

            if (secondDiv_vrTwo === "Rafting") {
                secondDiv_vrTwo = "1";
            }
            else if (secondDiv_vrTwo === "Fishing") {
                secondDiv_vrTwo = "2";
            }
            else if (secondDiv_vrTwo === "Hiking") {
                secondDiv_vrTwo = "3";
            }
            else if (secondDiv_vrTwo === "Kayaking") {
                secondDiv_vrTwo = "4";
            }
            else if (secondDiv_vrTwo === "Birdwatching") {
                secondDiv_vrTwo = "5";
            }
            else {
                console.log("/")
            }

            form5.thingsToDo_destinationsID = firstDiv_vrOne;
            form5.thingsToDo_activitiesID = secondDiv_vrTwo;

            inputField.value = selectedValues.join(", ");
            if (selectedValues.length >= 2) {
                dropdown.style.display = "none";
            }
        }
    });
});


// charter

// choose destination

document.addEventListener("DOMContentLoaded", function () {
    var inputField = document.getElementById('destinationInputCharter');
    var dropdown = document.getElementById('myDropdownCharter');

    function showDropdown() {
        dropdown.style.display = 'block';
    }

    function hideDropdown() {
        dropdown.style.display = 'none';
    }

    inputField.addEventListener('click', function (event) {
        event.stopPropagation();
        showDropdown();
    });

    document.addEventListener('click', function (event) {
        var targetElement = event.target;
        var isClickInside = dropdown.contains(targetElement);

        if (!isClickInside) {
            hideDropdown();
        }
    });

    dropdown.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'A') {
            inputField.value = target.textContent;
            form6.charter_destination = inputField.value;
            hideDropdown();
        }
    });
});

// type

function toggleDropdownCharterType() {
    var dropdown = document.getElementById("dropdownTypeCharter");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
        document.addEventListener('click', closeDropdownOutside);
    } else {
        dropdown.style.display = "none";
        document.removeEventListener('click', closeDropdownOutside);
    }
}

function closeDropdownOutside(event) {
    var dropdown = document.getElementById("dropdownTypeCharter");
    var input = document.getElementById("typeInputCharter");
    if (!dropdown.contains(event.target) && event.target !== input) {
        dropdown.style.display = "none";
        document.removeEventListener('click', closeDropdownOutside);
    }
}

function selectType(type) {
    var input = document.getElementById("typeInputCharter");
    input.value = type;
    form6.charter_type = type;
    document.getElementById("dropdownTypeCharter").style.display = "none";
}

// guests charter

document.addEventListener("DOMContentLoaded", function () {
    var guestsCharter = document.getElementById("guestsCharter");
    var dropdown = document.getElementById("myDropdownGuestsCharter");
    var applyBtn = document.getElementById("applyBtn");

    guestsCharter.addEventListener("click", function (event) {
        dropdown.style.display = "block";
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target) && event.target !== guestsCharter) {
            dropdown.style.display = "none";
        }
    });

    var buttonsPlus = document.querySelectorAll(".button-plusCharter");
    var buttonsMinus = document.querySelectorAll(".button-minusCharter");
    var counts = document.querySelectorAll(".countCharter");

    buttonsPlus.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var count = parseInt(counts[index].textContent);
            counts[index].textContent = count + 1;
        });
    });

    buttonsMinus.forEach(function (button, index) {
        button.addEventListener("click", function () {
            var count = parseInt(counts[index].textContent);
            if (count > 0) {
                counts[index].textContent = count - 1;
            }
        });
    });

    applyBtn.addEventListener("click", function () {
        var data = [];
        counts.forEach(function (count, index) {
            data.push(count.textContent.trim());
        });

        var firstData = data[0];
        var secondData = data[1];
        var thirdData = data[2];

        form6.charter_guests = "&guests=" + firstData + "&adults=" + firstData + "&cabins" + secondData + "&toilets" + thirdData;

        guestsCharter.value = firstData;

        dropdown.style.display = "none";
    });
});


// Search dugme - funkcija za prosljedjivanje na odgovarajuci url

function functionForButton2() {
    var base_url = 'https://montenegrovillas.com/en/villas';
    var query_parameters = '?q=' + form2.villas_goingTo + '&from=' + form2.villas_fromDate + '&to=' + form2.villas_toDate + `&dates=${form2.villas_fromDateFormat} to ${form2.villas_toDateFormat}` + form2.villas_toDate + '&type=' + form2.villas_type;
    url = base_url + query_parameters + form2.villas_travelers;
    console.log(url);
    window.open(url);
}

function functionForButton3() {
    var inputFieldPickUp = document.getElementById("pickUp");
    var inputFieldSamePickUp = document.getElementById("same-pickUp");
    var requiredTextFirst = document.getElementById("requiredText-first");
    var requiredTextSecond = document.getElementById("requiredText-second");
    var mainDivFields1 = document.getElementById("checkin-required");
    var mainDivFields2 = document.getElementById("checkout-required");

    var valid = true;

    // Provera Pick Up polja
    if (inputFieldPickUp.value.trim() === "") {
        requiredTextFirst.style.visibility = "visible";
        mainDivFields1.style.border = "2px solid red";
        valid = false;
    } else {
        requiredTextFirst.style.visibility = "hidden";
        mainDivFields1.style.border = "none";
    }

    // Provera Drop Off polja
    if (inputFieldSamePickUp.value.trim() === "") {
        requiredTextSecond.style.visibility = "visible";
        mainDivFields2.style.border = "2px solid red";
        valid = false;
    } else {
        requiredTextSecond.style.visibility = "hidden";
        mainDivFields2.style.border = "none";
    }

    if (valid) {
        var base_url = 'https://www.montenegrocar.me/en/reservation/vehicles/';
        var query_parameters = '?' + 'poslovnica_od=' + form3.cars_catPickId + '%7C' + form3.cars_pickUp + '&poslovnica_do=' + form3.cars_catSameId + '%7C' + form3.cars_samePickUp + '&date_from=' + form3.cars_fromDateFormat + '&time_from=' + form3.cars_pickUpTime + '&date_to=' + form3.cars_toDateFormat + '&time_to=' + form3.cars_dropOffTime;
        var url = base_url + query_parameters;
        console.log(url);
        window.open(url);
    }
}



function functionForButton4() {
    var inputFieldPickUp = document.getElementById("departureTransfers");
    var inputFieldSamePickUp = document.getElementById("arrivalTransefrs");
    var requiredTextThird = document.getElementById("requiredText-third");
    var requiredTextFourth = document.getElementById("requiredText-fourth");
    var requiredTextFifth = document.getElementById("requiredText-fifth");
    var inputDateTransf = document.getElementById("startDate-tab4");
    var mainDivFields1 = document.getElementById("departure-mainDiv");
    var mainDivFields2 = document.getElementById("arrival-mainDiv");
    var mainDIvFields3 = document.getElementById("dateTransfer-mainDiv");

    var valid = true;

    // Provera Pick Up polja
    if (inputFieldPickUp.value.trim() === "") {
        requiredTextThird.style.visibility = "visible";
        mainDivFields1.style.border = "2px solid red";
        valid = false;
    } else if (!inputDateTransf.value) {
        requiredTextFifth.style.visibility = "visible";
        mainDIvFields3.style.border = "2px solid red";
        valid = false;
    } else {
        requiredTextThird.style.visibility = "hidden";
        mainDivFields1.style.border = "none";
    }

    // Provera Drop Off polja
    if (inputFieldSamePickUp.value.trim() === "") {
        requiredTextFourth.style.visibility = "visible";
        mainDivFields2.style.border = "2px solid red";
        valid = false;
    } else {
        requiredTextFourth.style.visibility = "hidden";
        mainDivFields2.style.border = "none";
    }


    if (valid) {
        var base_url = 'https://transfermontenegro.me/booking';
        var query_parameters = '?' + 'service_type_id=1' + '&pickup_date=' + form4.transfers_dateFormat + '&pickup_time=' + form4.transfers_pickUpTime + '&fixed_location_pickup_id=' + form4.transfers_departure + '&fixed_location_dropoff_id=' + form4.transfers_arrival;
        url = base_url + query_parameters;
        console.log(url);
        window.open(url);
    }
}


function functionForButton5() {
    var base_url = 'https://montenegrotour.me/en/tours';
    var query_parameters = '?' + 'q=' + form5.thingsToDo_destinations + '%2C+' + form5.thingsToDo_activities + '&locations%5B' + form5.thingsToDo_destinationsID + '%5D=' + form5.thingsToDo_destinationsID + '&themes%5B' + form5.thingsToDo_activitiesID + '%5D=' + form5.thingsToDo_activitiesID;
    url = base_url + query_parameters;
    console.log(url);
    window.open(url);
}

function functionForButton6() {

    var inputFieldPickUpYacht = document.getElementById("destinationInputCharter");
    var charterLocationMainDiv = document.getElementById("charterLocation");
    var requiredTextSixth = document.getElementById("requiredText-sixth");

    var valid = true;

    if (inputFieldPickUpYacht.value.trim() === "") {
        requiredTextSixth.style.visibility = "visible";
        charterLocationMainDiv.style.border = "2px solid red";
        valid = false;
    } else {
        requiredTextSixth.style.visibility = "hidden";
        charterLocationMainDiv.style.border = "none";
    }


    if (valid){

        // ID za destinacije

        if (form6.charter_destination === "Porto Montenegro") {
            form6.param_a = "131";
        } else if (form6.charter_destination === "Marina Kotor") {
            form6.param_a = "333";
        } else if (form6.charter_destination === "Marina Solila") {
            form6.param_a = "859";
        } else if (form6.charter_destination === "Marina Lazure") {
            form6.param_a = "1531";
        } else {
            console.log("Destinacija nema odgovarajuci ID.");
        }

        // ID za tip jahti

        if (form6.charter_type === "Sailing yacht") {
            form6.type_id = "15";
        } else if (form6.charter_type === "Motoryacht") {
            form6.type_id = "20";
        } else if (form6.charter_type === "Catamaran") {
            form6.type_id = "1";
        } else if (form6.charter_type === "Power catamaran") {
            form6.type_id = "13";
        } else if (form6.charter_type === "Motor boat") {
            form6.type_id = "10";
        } else {
            form6.type_id = "15";
            console.log("Default tip.");
        }


        // Sort parametar

        form6.sort = "sort_order desc";

        var base_url = 'https://charter.me/en/charter';
        var query_parameters = '?' + 'l=' + form6.charter_destination + '&r=' + '&a=' + form6.param_a + '&from=' + form6.charter_arrivalDate + '&to=' + form6.charter_departureDate + '&type_name=' + form6.charter_type + '&type=' + form6.type_id + form6.charter_guests + '&sort=' + form6.sort
        url = base_url + query_parameters;
        console.log(url);
        window.open(url);

        //  + '&dates=' + form6.date1 + '-' + form6.date2
    }
    
}