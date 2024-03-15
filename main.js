// podaci iz formi

let form2 = {
    villas_goingTo: "",
    villas_fromDate: "",
    villas_toDate: "",
    villas_type: "",
    villas_travelers: "",
    villas_numberTravelers: "",
};

let form3 = {
    cars_pickUp: "",
    cars_samePickUp: "",
    cars_fromDate: "",
    cars_toDate: "",
    cars_pickUpTime: "",
    cars_dropOffTime: "",
};

let form4 = {
    transfers_departure: "",
    transfers_arrival: "",
    transfers_date: "",
    transfers_pickUpTime: "",
};

let form5 = {
    thingsToDo_goingTo: "",
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
    else if (type === 'Hotel room'){
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
    /*
    var dropdownContent = document.getElementById('myDropdown3');
    var applyButton = document.querySelector('.button-finTravelers button');

    applyButton.addEventListener('click', function () {
        console.log("pronadjeno")
        dropdownContent.style.visibility = "hidden";
    });
    */
};

// kalendar

document.addEventListener('DOMContentLoaded', function () {
    var startDateValue, endDateValue;

    function handleDateChanges(tabId) {
        var startDateInput = document.getElementById('startDate-' + tabId);
        var endDateInput = document.getElementById('endDate-' + tabId);

        startDateInput.addEventListener('change', function () {
            if (startDateInput.value) {
                startDateValue = startDateInput.value;
                console.log('Start date for tab ' + tabId + ':', startDateValue);

                if (tabId === 'tab2') {
                    form2.villas_fromDate = startDateValue;
                } else if (tabId === 'tab3') {
                    form3.cars_pickUpTime = startDateValue;
                } else if (tabId === 'tab4') {
                    form4.transfers_date = startDateValue;
                } else if (tabId === 'tab6') {
                    form6.charter_arrivalDate = startDateValue;
                } else {
                    console.log("Nista")
                }
            }
        });

        if (endDateInput) {
            endDateInput.addEventListener('change', function () {
                if (endDateInput.value) {
                    endDateValue = endDateInput.value; // vrijednost varijable endDateValue
                    console.log('End date for tab ' + tabId + ':', endDateValue);

                    if (tabId === 'tab2') {
                        form2.villas_toDate = endDateValue;
                    } else if (tabId === 'tab3') {
                        form3.cars_dropOffTime = endDateValue;
                    } else if (tabId === 'tab6') {
                        form6.charter_departureDate = endDateValue;
                    } else {
                        console.log("Nothing")
                    }
                }
            });
        }
    }

    var tabIds = ['tab2', 'tab3', 'tab4', 'tab6'];
    tabIds.forEach(function (tabId) {
        handleDateChanges(tabId);

        if (tabId === 'tab2') {
            form2.villas_fromDate = startDateValue;
            form2.villas_toDate = endDateValue;
        } else if (tabId === 'tab3') {
            form3.cars_pickUpTime = startDateValue;
            form3.cars_dropOffTime = endDateValue;
        } else if (tabId === 'tab4') {
            form4.transfers_date = startDateValue;
        } else if (tabId === 'tab6') {
            form6.charter_arrivalDate = startDateValue;
            form6.charter_departureDate = endDateValue;
        } else {
            console.log("Nista")
        }
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

            if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_pickUp = "";
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
            
            if (selectedLocation === "Tivat Bus Station"){
                form3.cars_samePickUp = "205";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
            }
            else if (selectedLocation === ""){
                form3.cars_samePickUp = "";
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
            form3.cars_pickUpTime = selectedTime;
            closeDropdown(pickTimeDropdown);
        }
    });

    dropTimeDropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            selectedTime = event.target.textContent;
            setTime(dropTimeInput, selectedTime);
            form3.cars_dropOffTime = selectedTime;
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
            form4.transfers_departure = selectedLocation;
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
            form4.transfers_arrival = selectedLocation;
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
            form4.transfers_pickUpTime = input.value;
            dropdown.style.display = "none";
        }
    });
});

// things to do

document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById("inputForThingToDo");
    var dropdown = document.getElementById("myDropdownForThingToDo");

    inputField.addEventListener("click", function() {
        dropdown.style.display = "block";
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && event.target !== inputField) {
            dropdown.style.display = "none";
        }
    });

    dropdown.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            var selectedValue = event.target.textContent;
            inputField.value = selectedValue;
            form5.thingsToDo_goingTo = selectedValue;
            dropdown.style.display = "none";
        }
    });
});

// charter

// choose destination

document.addEventListener("DOMContentLoaded", function() {
    var inputField = document.getElementById('destinationInputCharter');
    var dropdown = document.getElementById('myDropdownCharter');

    function showDropdown() {
        dropdown.style.display = 'block';
    }

    function hideDropdown() {
        dropdown.style.display = 'none';
    }

    inputField.addEventListener('click', function(event) {
        event.stopPropagation();
        showDropdown();
    });

    document.addEventListener('click', function(event) {
        var targetElement = event.target;
        var isClickInside = dropdown.contains(targetElement);

        if (!isClickInside) {
            hideDropdown();
        }
    });

    dropdown.addEventListener('click', function(event) {
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

document.addEventListener("DOMContentLoaded", function() {
    var guestsCharter = document.getElementById("guestsCharter");
    var dropdown = document.getElementById("myDropdownGuestsCharter");
    var applyBtn = document.getElementById("applyBtn");

    guestsCharter.addEventListener("click", function(event) {
        dropdown.style.display = "block";
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && event.target !== guestsCharter) {
            dropdown.style.display = "none";
        }
    });

    var buttonsPlus = document.querySelectorAll(".button-plusCharter");
    var buttonsMinus = document.querySelectorAll(".button-minusCharter");
    var counts = document.querySelectorAll(".countCharter");

    buttonsPlus.forEach(function(button, index) {
        button.addEventListener("click", function() {
            var count = parseInt(counts[index].textContent);
            counts[index].textContent = count + 1;
        });
    });

    buttonsMinus.forEach(function(button, index) {
        button.addEventListener("click", function() {
            var count = parseInt(counts[index].textContent);
            if (count > 0) {
                counts[index].textContent = count - 1;
            }
        });
    });

    applyBtn.addEventListener("click", function() {
        var data = [];
        counts.forEach(function(count, index) {
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

function functionForButton2(){
    var base_url = 'https://montenegrovillas.com/en/villas';
    var query_parameters = '?q=' + form2.villas_goingTo + '&from=' + form2.villas_fromDate + '&to=' + form2.villas_toDate + '&type=' + form2.villas_type;
    url = base_url + query_parameters + form2.villas_travelers;
    console.log(url)
    window.location.href = url
}

function functionForButton3(){
    var base_url = 'www.montenegrocars.me/en/reservation/vehicles/';
    var query_parameters = '?' + 'poslovnica_od=' + form3.cars_pickUp + '&poslovnica_do' + form3.cars_samePickUp + '&date_from' + form3.cars_fromDate + '&time_from' + form3.cars_pickUpTime + '&date_to' + form3.cars_toDate + '&time_to' + form3.cars_dropOffTime + '#vehicles-list';
    url = base_url + query_parameters;
    console.log(url)
    window.location.href = url
}

function functionForButton4(){
    var base_url = 'https://transfermontenegro.me/booking';
    // pitanje za service_type_id=1
    var query_parameters = '?' + '&pickup_date=' + form4.transfers_date + '&pickup_time=' + form4.transfers_pickUpTime +  ;
    url = base_url + query_parameters;
    console.log(url)
    window.location.href = url
}

function functionForButton5(){
    var base_url = 'https://montenegrotour.me/en';
    var query_parameters
    url = base_url + query_parameters;
    console.log(url)
    window.location.href = url
}

function functionForButton6(){
    var base_url = 'https://charter.me/en';
    var query_parameters
    url = base_url + query_parameters;
    console.log(url)
    window.location.href = url
}