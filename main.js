// podaci iz formi





var externalWizardForm =
{
    form2: {
        villas_goingTo: "",
        villas_fromDate: "",
        villas_toDate: "",
        villas_type: "",
        villas_travelers: "",
        villas_numberTravelers: "",
        villas_fromDateFormat: "",
        villas_toDateFormat: "",
    },

    form3: {
        cars_pickUp: "",
        cars_samePickUp: "",
        cars_fromDate: "",
        cars_toDate: "",
        cars_pickUpTime: "10:30",
        cars_dropOffTime: "10:30",
        cars_fromDateFormat: "",
        cars_toDateFormat: "",
        cars_catPickId: "",
        cars_catSameId: "",
    },

    form4: {
        transfers_departure: "",
        transfers_arrival: "",
        transfers_date: "",
        transfers_pickUpTime: "10:30",
        transfers_dateFormat: "",
    },

    form5: {
        thingsToDo_destinations: "",
        thingsToDo_destinationsID: "",
        thingsToDo_activities: "",
        thingsToDo_activitiesID: "",
    },
    form6: {
        charter_destination: "",
        charter_arrivalDate: "",
        charter_departureDate: "",
        charter_type: "",
        charter_guests: "",
    }
}


var testTabsListeners = {
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
    tab5: false,
    tab6: false,
}


var checkbox = document.querySelector('.checkbox');




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
            tab2Selected();
            break;
        case 'tab3':
            document.getElementById('tab3').classList.add('active');
            setActiveTabItem('tab3');
            carsTab()
            break;
        case 'tab4':
            document.getElementById('tab4').classList.add('active');
            setActiveTabItem('tab4');
            tab4Selected()
            break;
        case 'tab5':
            document.getElementById('tab5').classList.add('active');
            setActiveTabItem('tab5');
            tab5Selected()
            break;
        case 'tab6':
            document.getElementById('tab6').classList.add('active');
            setActiveTabItem('tab6');
            tab6Selected()
            break;
        default:
            console.log('Invalid tabId');
            break;
    }
}

function changeViewListener(e, id) {
    changeDisplayStatus(id)
    e.stopImmediatePropagation();
    //e.stopPropagation()
};


function setActiveTabItem(tabId) {
    var tabItems = document.querySelectorAll('.nav-item');
    tabItems.forEach(function (item) {
        item.classList.remove('active');
    });

    var activeTabItem = document.querySelector(`div [class="div-${tabId}"]`);
    if (activeTabItem) {
        activeTabItem.parentNode.classList.add('active');
    }
}






var tab2Selected = () => {

    const inputField = document.getElementById('dropdown-container');
    const dropdown = document.getElementById('myDropdown2');
    const links = dropdown.getElementsByTagName('a');
    var cityInput = document.getElementById("cityInput");
    var dropdownContent = document.getElementById("myDropdown1");
    const valueForTravelers = document.getElementById("valueForTravelers");
    const villasType = document.getElementById("villas-type");

    if (!testTabsListeners.tab2) {
        valueForTravelers.addEventListener("click", (e) => {
            changeDisplayStatus("myDropdown3")
            e.stopImmediatePropagation();
        })
        villasType.addEventListener("click", (e) => {
            changeDisplayStatus("myDropdown2")
            e.stopImmediatePropagation();
        })
    }
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
        // if (value === "") {
        //     dropdownContent.style.display = "none";
        // } else {
        //     dropdownContent.style.display = "block";
        // }
    });

    dropdownContent.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            var selectedCity = e.target.innerText;
            cityInput.value = selectedCity;
            externalWizardForm.form2.villas_goingTo = selectedCity;
            dropdownContent.style.display = "none";
        }
    });

    cityInput.addEventListener("click", function (e) {
        e.preventDefault()
        changeDisplayStatus("myDropdown1")
        this.value = "";
        e.stopImmediatePropagation()
    });




    inputField.addEventListener('click', function () {
        changeDisplayStatus("myDropdown2")
    });



    testTabsListeners.tab2 = true;
}



function setType(type) {
    document.getElementById('villas-type').value = type;

    if (type === 'Villa') {
        type = "1";
        externalWizardForm.form2.villas_type = type;
    }
    else if (type === 'Apartment') {
        type = "2";
        externalWizardForm.form2.villas_type = type;
    }
    else if (type === 'Hotel room') {
        type = "3";
        externalWizardForm.form2.villas_type = type;
    }
    else {
        type = "0";
    }
    changeDisplayStatus("myDropdown2")


}

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
    externalWizardForm.form2.villas_numberTravelers = numberOfGuests;

    var formattedData = '&guests=' + numberOfGuests + '&adults=' + adultsCount +
        '&children=' + adultsSmallCount +
        '&infants=' + infantsCount +
        '&pets=' + petsAllowedNumber +
        '&bedrooms=' + bedroomsCount +
        '&bathrooms=' + bathroomsCount;


    externalWizardForm.form2.villas_travelers = formattedData;

    return formattedData;
}

function handleDateChanges(tabId) {
    var startDateInput = document.getElementById('startDate-' + tabId);
    var endDateInput = document.getElementById('endDate-' + tabId);

    startDateInput.addEventListener('change', function () {
        var startDateValue = startDateInput.value; // Ovdje postavljamo vrijednost startDateValue
        console.log('Start date for tab ' + tabId + ':', startDateValue);

        if (tabId === 'tab2') {
            externalWizardForm.form2.villas_fromDate = startDateValue;
            var dataString = startDateValue;
            var parts = dataString.split("-");
            var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];

            externalWizardForm.form2.villas_fromDateFormat = newFormat;

        } else if (tabId === 'tab3') {
            externalWizardForm.form3.cars_fromDate = startDateValue;
            var dataString = startDateValue;
            var parts = dataString.split("-");
            var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];
            externalWizardForm.form3.cars_fromDateFormat = newFormat;
        } else if (tabId === 'tab4') {
            externalWizardForm.form4.transfers_date = startDateValue;
            var dataString = startDateValue;
            var parts = dataString.split("-");
            var newFormat = parts[2] + "-" + parts[1] + "-" + parts[0];
            externalWizardForm.form4.transfers_dateFormat = newFormat;
        } else if (tabId === 'tab6') {
            externalWizardForm.form6.charter_arrivalDate = startDateValue;
        } else {
            console.log("Nothing")
        }
    });

    if (endDateInput) {
        endDateInput.addEventListener('change', function () {
            var endDateValue = endDateInput.value; // Ovdje postavljamo vrijednost endDateValue
            console.log('End date for tab ' + tabId + ':', endDateValue);

            if (tabId === 'tab2') {
                externalWizardForm.form2.villas_toDate = endDateValue;
                var dataString = endDateValue;
                var parts = dataString.split("-");
                var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];
                externalWizardForm.form2.villas_toDateFormat = newFormat;
            } else if (tabId === 'tab3') {
                externalWizardForm.form3.cars_toDate = endDateValue;
                var dataString = endDateValue;
                var parts = dataString.split("-");
                var newFormat = parts[2] + "/" + parts[1] + "/" + parts[0];
                externalWizardForm.form3.cars_toDateFormat = newFormat;
            } else if (tabId === 'tab6') {
                externalWizardForm.form6.charter_departureDate = endDateValue;
            } else {
                console.log("Nothing")
            }
        });
    }
}

var tabIds = ['tab2', 'tab3', 'tab4', 'tab6'];
tabIds.forEach(function (tabId) {
    handleDateChanges(tabId);
});


// TAB 3

// pick up input


var carsTab = () => {



    const dropdown = document.getElementById("myDropdown-pickUp");
    const dropdown2 = document.getElementById("myDropdown-samePickUp");
    const dropdown3 = document.getElementById("dropdown-for-cars-pickUpTime");
    const locations = dropdown.getElementsByTagName("a");
    const inputField = document.getElementById("same-pickUp");
    const inputField2 = document.getElementById("pickUp");
    const pickTimeInput = document.getElementById("input-for-time-pick");
    const dropTimeInput = document.getElementById("input-for-time-drop");

    pickTimeInput.addEventListener("click", (e) => {
        changeDisplayStatus("dropdown-for-cars-pickUpTime")
        e.stopImmediatePropagation()
    })
    dropTimeInput.addEventListener("click", (e) => {
        changeDisplayStatus("dropdown-for-cars-dropOffTime")
        e.stopImmediatePropagation()
    })

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


    inputField2.addEventListener("input", function () {
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


    // inputField.addEventListener("input", function () {
    //     var searchTerm = inputField.value.toLowerCase();
    //     for (var i = 0; i < locations.length; i++) {
    //         var location = locations[i].textContent.toLowerCase();
    //         if (location.includes(searchTerm)) {
    //             locations[i].style.display = "block";
    //         } else {
    //             locations[i].style.display = "none";
    //         }
    //     }
    //     if (inputField.value === "") {
    //         for (var i = 0; i < locations.length; i++) {
    //             locations[i].style.display = "block";
    //         }
    //         dropdown.style.display = "block";
    //     }
    // });


    const listinerFunc = (event, id) => {
        let inputKey = ""
        let inputField = null;
        if (id === "cars_pickUp") {
            inputKey = "cars_catPickId";
            inputField = document.getElementById("pickUp");
        } else if (id === "cars_samePickUp") {
            inputKey = "cars_catSameId";
            inputField = document.getElementById("same-pickUp");
        }
        if (event.target.tagName === "A") {
            var selectedLocation = event.target.textContent;
            inputField.value = selectedLocation;

            var parentDiv = event.target.closest('div');
            if (parentDiv.id === "cat-tivatAirport") {
                externalWizardForm.form3[inputKey] = "224";
            }
            else if (parentDiv.id === "cat-budvaDowntown") {
                externalWizardForm.form3[inputKey] = "112";
            }
            else if (parentDiv.id === "cat-hercegNoviDowntown") {
                externalWizardForm.form3[inputKey] = "111";
            }
            else if (parentDiv.id === "cat-hyattRegencyKotor") {
                externalWizardForm.form3[inputKey] = "198";
            }
            else if (parentDiv.id === "cat-podgoricaDowntown") {
                externalWizardForm.form3[inputKey] = "109";
            }
            else {
                console.log("Odabrana lokacija nije unutar diva.");
            }

            if (selectedLocation === "Tivat Bus Station") {
                externalWizardForm.form3[id] = "205";
            }
            else if (selectedLocation === "Porto Montenegro") {
                externalWizardForm.form3[id] = "208";
            }
            else if (selectedLocation === "Nikki Beach Tivat") {
                externalWizardForm.form3[id] = "211";
            }
            else if (selectedLocation === "Petrovac - Hotel Palas") {
                externalWizardForm.form3[id] = "118";
            }
            else if (selectedLocation === "Becici") {
                externalWizardForm.form3[id] = "180";
            }
            else if (selectedLocation === "Bip Hotel") {
                externalWizardForm.form3[id] = "206";
            }
            else if (selectedLocation === "Iberostar Bellevue") {
                externalWizardForm.form3[id] = "213";
            }
            else if (selectedLocation === "Portonovi Resort") {
                externalWizardForm.form3[id] = "207";
            }
            else if (selectedLocation === "Iberostar") {
                externalWizardForm.form3[id] = "218";
            }
            else if (selectedLocation === "Bijela") {
                externalWizardForm.form3[id] = "220";
            }
            else if (selectedLocation === "Kotor Downtown") {
                externalWizardForm.form3[id] = "181";
            }
            else if (selectedLocation === "Huma Kotor Bay Hotel & Villas") {
                externalWizardForm.form3[id] = "212";
            }
            else if (selectedLocation === "Kotor Marina") {
                externalWizardForm.form3[id] = "216";
            }
            else if (selectedLocation === "Prčanj") {
                externalWizardForm.form3[id] = "223";
            }
            else if (selectedLocation === "Bar") {
                externalWizardForm.form3[id] = "172";
            }
            else if (selectedLocation === "Kolasin") {
                externalWizardForm.form3[id] = "173";
            }
            else if (selectedLocation === "Kolasin") {
                externalWizardForm.form3[id] = "214";
            }
            else if (selectedLocation === "Hotel Lazaro") {
                externalWizardForm.form3[id] = "215";
            }
            else if (selectedLocation === "Hotel Keto") {
                externalWizardForm.form3[id] = "221";
            }
            else if (selectedLocation === "Hotel Hilton") {
                externalWizardForm.form3[id] = "222";
            }

            else {
                console.log("Nothing")
            }

            dropdown.style.display = "none";
            dropdown2.style.display = "none";
        }


    }


    dropdown.addEventListener("click", (e) => { listinerFunc(e, 'cars_pickUp') });
    dropdown2.addEventListener("click", (e) => { listinerFunc(e, 'cars_samePickUp') });


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
            //dropdown.style.display = "block";
        }
    });
}






var changeDisplayStatus = (id) => {
    const displayStatus = document.getElementById(id).style.display
    const showing = displayStatus === "none" || displayStatus === "" ? false : true;
    document.getElementById(id).style.display = showing ? "none" : "flex"
    document.getElementById(id).style.flexDirection = showing ? "none" : "column"
    document.getElementById(id).style.visibility = showing ? "hidden" : "visible"

}





// time - pick up i drop off


function generateTimeOptions(elementId) {
    var dropdown = document.getElementById(elementId);

    for (var hour = 0; hour <= 23; hour++) {
        for (var minutes = 0; minutes <= 30; minutes += 30) {
            var time = formatTime(hour) + ":" + formatTime(minutes);
            var option = document.createElement("a");
            option.setAttribute("href", "javascript:void(0)");
            option.textContent = time;
            dropdown.appendChild(option);
        }
    }
}

function formatTime(time) {
    return (time < 10 ? "0" : "") + time;
}



// funkcionalnosti za time - cars tab


var pickTimeDiv = document.getElementById("main-div-for-pickTime");
var dropTimeDiv = document.getElementById("main-div-for-dropTime");

var pickTimeInput = pickTimeDiv.querySelector(".input-for-time");
var pickTimeDropdown = document.getElementById("dropdown-for-cars-pickUpTime");
var dropTimeInput = dropTimeDiv.querySelector(".input-for-time");
var dropTimeDropdown = document.getElementById("dropdown-for-cars-dropOffTime");

var selectedTime;

function openDropdown(dropdown) {
    dropdown.style.display = "flex";
}

function closeDropdown(dropdown) {
    dropdown.style.display = "none";
}

function setTime(input, time) {
    input.value = time;
}



// pickTimeInput.addEventListener("click", function (event) {
//     event.stopPropagation();
//     openDropdown(pickTimeDropdown);
// });

// dropTimeInput.addEventListener("click", function (event) {
//     event.stopPropagation();
//     openDropdown(dropTimeDropdown);
// });

// document.addEventListener("click", function (event) {
//     if (event.target !== pickTimeInput && event.target !== dropTimeInput) {
//         closeDropdown(pickTimeDropdown);
//         closeDropdown(dropTimeDropdown);
//     }
// });

pickTimeDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        selectedTime = event.target.textContent;
        setTime(pickTimeInput, selectedTime);
        externalWizardForm.form3.cars_pickUpTime = selectedTime;
        closeDropdown(pickTimeDropdown);
    }
});

dropTimeDropdown.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
        selectedTime = event.target.textContent;
        setTime(dropTimeInput, selectedTime);
        externalWizardForm.form3.cars_dropOffTime = selectedTime;
        closeDropdown(dropTimeDropdown);
    }
});


// tab 4 - transfers tab

// departure


var tab4Selected = () => {
    const inputField = document.getElementById("departureTransfers");
    const dropdown = document.getElementById("departure-transfers");
    const locations = dropdown.getElementsByTagName("a");


    const inputFieldArrival = document.getElementById("arrivalTransefrs");
    const dropdownArrival = document.getElementById("arrival-transfers");
    const locationsArrival = dropdown.getElementsByTagName("a");
    const inputTime = document.getElementById("pick-time-input-transfers");
    var dropdownTime = document.getElementById("dropdown-for-transfers-pickUpTime");
    // inputTime.addEventListener("click", function (event) {
    //     changeDisplayStatus("dropdown-for-transfers-pickUpTime")
    //     event.stopImmediatePropagation();
    // });
    inputTime.addEventListener("click", (e) => { changeViewListener(e, "dropdown-for-transfers-pickUpTime") });
    dropdownTime.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            inputTime.value = event.target.textContent;
            externalWizardForm.form4.transfers_pickUpTime = inputTime.value;
            changeViewListener(event, 'dropdown-for-transfers-pickUpTime')
            //changeDisplayStatus('dropdown-for-transfers-pickUpTime');

        }
    });
    if (!testTabsListeners.tab4) {
    }


    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            const selectedLocation = event.target.textContent;
            inputField.value = selectedLocation;

            if (selectedLocation === "Tirana") {
                externalWizardForm.form4.transfers_departure = "13135";
            }
            else if (selectedLocation === "Airport Podgorica (TGD)") {
                externalWizardForm.form4.transfers_departure = "13114";
            }
            else if (selectedLocation === "Airport Tivat (TIV)") {
                externalWizardForm.form4.transfers_departure = "13077";
            }
            else if (selectedLocation === "Petrovac") {
                externalWizardForm.form4.transfers_departure = "13073";
            }
            else if (selectedLocation === "Kolašin") {
                externalWizardForm.form4.transfers_departure = "11864";
            }
            else if (selectedLocation === "Airport Dubrovnik (DBV)") {
                externalWizardForm.form4.transfers_departure = "13786";
            }
            else if (selectedLocation === "Dubrovnik") {
                externalWizardForm.form4.transfers_departure = "11846";
            }
            else if (selectedLocation === "Airport Tirana (TIA)") {
                externalWizardForm.form4.transfers_departure = "11845";
            }
            else if (selectedLocation === "Durmitor/Žabljak") {
                externalWizardForm.form4.transfers_departure = "11844";
            }
            else if (selectedLocation === "Monastery Ostrog") {
                externalWizardForm.form4.transfers_departure = "11842";
            }
            else if (selectedLocation === "Skadar Lake") {
                externalWizardForm.form4.transfers_departure = "11841";
            }
            else if (selectedLocation === "Bar") {
                externalWizardForm.form4.transfers_departure = "11840";
            }
            else if (selectedLocation === "Kotor") {
                externalWizardForm.form4.transfers_departure = "11838";
            }
            else if (selectedLocation === "Perast") {
                externalWizardForm.form4.transfers_departure = "11837";
            }
            else if (selectedLocation === "Cetinje") {
                externalWizardForm.form4.transfers_departure = "11836";
            }
            else if (selectedLocation === "Herceg Novi") {
                externalWizardForm.form4.transfers_departure = "11835";
            }
            else if (selectedLocation === "Tivat") {
                externalWizardForm.form4.transfers_departure = "11834";
            }
            else if (selectedLocation === "Ulcinj") {
                externalWizardForm.form4.transfers_departure = "11573";
            }
            else if (selectedLocation === "Budva") {
                externalWizardForm.form4.transfers_departure = "11752";
            }
            else if (selectedLocation === "Podgorica") {
                externalWizardForm.form4.transfers_departure = "11751";
            }
            else {
                console.log("Nothing")
            }

            inputField.value = selectedLocation;
            changeViewListener(event, "departure-transfers")
            //changeDisplayStatus("departure-transfers")
        }
    });

    dropdownArrival.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            const selectedLocation = event.target.textContent;
            inputFieldArrival.value = selectedLocation;

            if (selectedLocation === "Tirana") {
                externalWizardForm.form4.transfers_arrival = "13135";
            }
            else if (selectedLocation === "Airport Podgorica (TGD)") {
                externalWizardForm.form4.transfers_arrival = "13114";
            }
            else if (selectedLocation === "Airport Tivat (TIV)") {
                externalWizardForm.form4.transfers_arrival = "13077";
            }
            else if (selectedLocation === "Petrovac") {
                externalWizardForm.form4.transfers_arrival = "13073";
            }
            else if (selectedLocation === "Kolašin") {
                externalWizardForm.form4.transfers_arrival = "11864";
            }
            else if (selectedLocation === "Airport Dubrovnik (DBV)") {
                externalWizardForm.form4.transfers_arrival = "13786";
            }
            else if (selectedLocation === "Dubrovnik") {
                externalWizardForm.form4.transfers_arrival = "11846";
            }
            else if (selectedLocation === "Airport Tirana (TIA)") {
                externalWizardForm.form4.transfers_arrival = "11845";
            }
            else if (selectedLocation === "Durmitor/Žabljak") {
                externalWizardForm.form4.transfers_arrival = "11844";
            }
            else if (selectedLocation === "Monastery Ostrog") {
                externalWizardForm.form4.transfers_arrival = "11842";
            }
            else if (selectedLocation === "Skadar Lake") {
                externalWizardForm.form4.transfers_arrival = "11841";
            }
            else if (selectedLocation === "Bar") {
                externalWizardForm.form4.transfers_arrival = "11840";
            }
            else if (selectedLocation === "Kotor") {
                externalWizardForm.form4.transfers_arrival = "11838";
            }
            else if (selectedLocation === "Perast") {
                externalWizardForm.form4.transfers_arrival = "11837";
            }
            else if (selectedLocation === "Cetinje") {
                externalWizardForm.form4.transfers_arrival = "11836";
            }
            else if (selectedLocation === "Herceg Novi") {
                externalWizardForm.form4.transfers_arrival = "11835";
            }
            else if (selectedLocation === "Tivat") {
                externalWizardForm.form4.transfers_arrival = "11834";
            }
            else if (selectedLocation === "Ulcinj") {
                externalWizardForm.form4.transfers_arrival = "11573";
            }
            else if (selectedLocation === "Budva") {
                externalWizardForm.form4.transfers_arrival = "11752";
            }
            else if (selectedLocation === "Podgorica") {
                externalWizardForm.form4.transfers_arrival = "11751";
            }
            else {
                console.log("Nothing")
            }

            inputFieldArrival.value = selectedLocation;
            changeViewListener(event, "arrival-transfers")
            //changeDisplayStatus("arrival-transfers")
        }
    });

    testTabsListeners.tab4 = true;
}




// arrival






var tab5Selected = () => {



    const inputField = document.getElementById("inputForThingToDo");
    const dropdown = document.getElementById("myDropdownForThingToDo");
    let firstDiv_vrOne = "Lake Skadar";
    let secondDiv_vrTwo = "Fishing";
    const selectedValues = [];

    inputField.addEventListener("click", function (event) {
        changeViewListener(event, "myDropdownForThingToDo")
        //changeDisplayStatus("myDropdownForThingToDo")
    });



    dropdown.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            //            var selectedValue = event.target.textContent;
            // if (selectedValues.includes(selectedValue)) {
            //     var index = selectedValues.indexOf(selectedValue);
            //     selectedValues.splice(index, 1);
            // } else {
            //     selectedValues.push(selectedValue);
            // }

            var parentDiv = event.target.parentNode.id;
            if (parentDiv === "cat-thingsDestinations") {
                selectedValues[0] = event.target.textContent
                firstDiv_vrOne = selectedValues[0];
                externalWizardForm.form5.thingsToDo_destinations = firstDiv_vrOne;
            } else if (parentDiv === "cat-thingsActivities") {
                selectedValues[1] = event.target.textContent
                secondDiv_vrTwo = selectedValues[1];
                externalWizardForm.form5.thingsToDo_activities = secondDiv_vrTwo;
            }

            // for destinations - id

            if (firstDiv_vrOne === "Durmitor") {
                firstDiv_vrOne = "6";
                externalWizardForm.form5.thingsToDo_destinations = "Durmitor";
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

            externalWizardForm.form5.thingsToDo_destinationsID = firstDiv_vrOne;
            externalWizardForm.form5.thingsToDo_activitiesID = secondDiv_vrTwo;

            inputField.value = selectedValues.join(", ");
            if (selectedValues.length >= 2) {
                changeViewListener(event, "myDropdownForThingToDo")
                //changeDisplayStatus("myDropdownForThingToDo")
            }
        }
    });




}

var tab6Selected = () => {
    const inputField = document.getElementById('destinationInputCharter');
    const dropdown = document.getElementById('myDropdownCharter');

    var guestsCharter = document.getElementById("guestsCharter");
    var dropdownCapacity = document.getElementById("myDropdownGuestsCharter");
    var applyBtn = document.getElementById("applyBtn");

    guestsCharter.addEventListener("click", function (event) {
        changeViewListener(event, "myDropdownGuestsCharter")
        //changeDisplayStatus("myDropdownGuestsCharter")
    });



    var buttonsPlus = document.querySelectorAll(".button-plusCharter");
    var buttonsMinus = document.querySelectorAll(".button-minusCharter");
    var counts = document.querySelectorAll(".countCharter");

    buttonsPlus.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            var count = parseInt(counts[index].textContent);
            counts[index].textContent = count + 1;
        });
    });

    buttonsMinus.forEach(function (button, index) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            var count = parseInt(counts[index].textContent);
            if (count > 0) {
                counts[index].textContent = count - 1;
            }
        });
    });

    applyBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var data = [];
        counts.forEach(function (count, index) {
            data.push(count.textContent.trim());
        });

        var firstData = data[0];
        var secondData = data[1];
        var thirdData = data[2];

        externalWizardForm.form6.charter_guests = "&guests=" + firstData + "&adults=" + firstData + "&cabins=" + secondData + "&toilets=" + thirdData;

        guestsCharter.value = firstData;

        //changeDisplayStatus("myDropdownGuestsCharter")
        changeViewListener(event, "myDropdownGuestsCharter")
    });



    inputField.addEventListener('click', (e) => { changeViewListener(e, "myDropdownCharter") });



    dropdown.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName === 'A') {
            inputField.value = target.textContent;
            externalWizardForm.form6.charter_destination = inputField.value;
            changeViewListener(event, "myDropdownCharter")
            //changeDisplayStatus("myDropdownCharter")
        }
    });

}


function toggleDropdownCharterType() {
    changeDisplayStatus("dropdownTypeCharter")
}



function selectType(type) {
    var input = document.getElementById("typeInputCharter");
    input.value = type;
    externalWizardForm.form6.charter_type = type;
    changeDisplayStatus("dropdownTypeCharter")
}

// guests charter



function functionForButton2(event) {
    event.preventDefault()
    const text = "אתם מוזמנים לבצע את ההזמנה באתר מקומי במונטנגרו המתמחה בווילות במונטנגרו:";
    const link = "https://montenegrovillas.com/en";
    const image = "/static/montenegro-wizard/logos/Picture4.png"

    var base_url = 'https://montenegrovillas.com/en/villas';
    var query_parameters = '?q=' + externalWizardForm.form2.villas_goingTo + '&from=' + externalWizardForm.form2.villas_fromDate + '&to=' + externalWizardForm.form2.villas_toDate + `&dates=${externalWizardForm.form2.villas_fromDateFormat} to ${externalWizardForm.form2.villas_toDateFormat}` + externalWizardForm.form2.villas_toDate + '&type=' + externalWizardForm.form2.villas_type;
    url = base_url + query_parameters + externalWizardForm.form2.villas_travelers;
    console.log(url);
    //window.open(url)
    fakeLoader(url, text, link, image);
}

function functionForButton3(event) {
    event.preventDefault();
    const text = "אתם מוזמנים לבצע את ההזמנה באתר מקומי במונטנגרו המתמחה בהשכרת רכב במונטנגרו:";
    const link = "https://www.montenegrocar.me";
    const image = "/static/montenegro-wizard/logos/Picture1.png"

    var base_url = 'https://www.montenegrocar.me/en/reservation/vehicles/';
    var query_parameters = '?' + 'poslovnica_od=' + externalWizardForm.form3.cars_catPickId + '%7C' + externalWizardForm.form3.cars_pickUp + '&poslovnica_do=' + externalWizardForm.form3.cars_catSameId + '%7C' + externalWizardForm.form3.cars_samePickUp + '&date_from=' + externalWizardForm.form3.cars_fromDateFormat + '&time_from=' + externalWizardForm.form3.cars_pickUpTime + '&date_to=' + externalWizardForm.form3.cars_toDateFormat + '&time_to=' + externalWizardForm.form3.cars_dropOffTime;
    url = base_url + query_parameters;
    console.log(url);
    fakeLoader(url, text, link, image);
}

function functionForButton4(event) {
    event.preventDefault();
    const text = "אתם מוזמנים לבצע את ההזמנה באתר מקומי במונטנגרו המתמחה בהעברות במונטנגרו:";
    const link = "https://transfermontenegro.me/";
    const image = "/static/montenegro-wizard/logos/Picture5.png"
    var base_url = 'https://transfermontenegro.me/booking';
    var query_parameters = '?' + 'service_type_id=1' + '&pickup_date=' + externalWizardForm.form4.transfers_dateFormat + '&pickup_time=' + externalWizardForm.form4.transfers_pickUpTime + '&fixed_location_pickup_id=' + externalWizardForm.form4.transfers_departure + '&fixed_location_dropoff_id=' + externalWizardForm.form4.transfers_arrival;
    url = base_url + query_parameters;
    console.log(url);
    fakeLoader(url, text, link, image);
}


function functionForButton5(event) {
    event.preventDefault();
    const text = "אתם מוזמנים לבצע את ההזמנה באתר מקומי במונטנגרו המתמחה בסיורים במונטנגרו:";
    const link = "https://montenegrotour.me";
    const image = "/static/montenegro-wizard/logos/Picture3.png"
    var base_url = 'https://montenegrotour.me/en/tours';
    var query_parameters = '?' + 'q=' + externalWizardForm.form5.thingsToDo_destinations + '%2C+' + externalWizardForm.form5.thingsToDo_activities + '&locations%5B' + externalWizardForm.form5.thingsToDo_destinationsID + '%5D=' + externalWizardForm.form5.thingsToDo_destinationsID + '&themes%5B' + externalWizardForm.form5.thingsToDo_activitiesID + '%5D=' + externalWizardForm.form5.thingsToDo_activitiesID;
    url = base_url + query_parameters;
    console.log(url);
    fakeLoader(url, text, link, image);
}

function functionForButton6(event) {
    event.preventDefault();
    const text = "אתם מוזמנים לבצע את ההזמנה באתר מקומי במונטנגרו המתמחה בהשכרת יאכטות במונטנגרו:";
    const link = "https://charter.me";
    const image = "/static/montenegro-wizard/logos/Picture2.png"
    var base_url = 'https://charter.me/en/charter';
    var query_parameters = '?' + 'l=' + externalWizardForm.form6.charter_destination + '&from=' + externalWizardForm.form6.charter_arrivalDate + '&to=' + externalWizardForm.form6.charter_departureDate + '&type_name=' + externalWizardForm.form6.charter_type + externalWizardForm.form6.charter_guests
    url = base_url + query_parameters;
    console.log(url);
    fakeLoader(url, text, link, image);
}

var initExternalWizard = () => {
    var dropdown = document.getElementById("myDropdown-pickUp");
    var dropdown2 = document.getElementById("myDropdown-pickUp");
    var dropdown2 = document.getElementById("myDropdown-pickUp");
    var dropdown3 = document.getElementById("departure-transfers");
    var dropdown4 = document.getElementById("arrival-transfers");
    var dropdown5 = document.getElementById("dropdown-for-transfers-pickUpTime");
    var dropdown6 = document.getElementById("myDropdown-samePickUp");
    var dropdown7 = document.getElementById("myDropdownForThingToDo");
    var dropdown8 = document.getElementById("myDropdownCharter");
    var dropdown9 = document.getElementById("dropdownTypeCharter");
    var dropdown10 = document.getElementById("myDropdownGuestsCharter");
    var dropdown11 = document.getElementById("dropdown-for-cars-pickUpTime");
    var dropdown12 = document.getElementById("dropdown-for-cars-dropOffTime");

    dropdown.style.display = "none"
    dropdown2.style.display = "none"
    dropdown3.style.display = "none"
    dropdown4.style.display = "none"
    dropdown5.style.display = "none"
    dropdown6.style.display = "none"
    dropdown7.style.display = "none"
    dropdown8.style.display = "none"
    dropdown9.style.display = "none"
    dropdown10.style.display = "none"
    dropdown11.style.display = "none"
    dropdown12.style.display = "none"
    generateTimeOptions("dropdown-for-cars-pickUpTime");
    generateTimeOptions("dropdown-for-cars-dropOffTime");
    generateTimeOptions("dropdown-for-transfers-pickUpTime");
    var plusButtons = document.querySelectorAll('.button-plus');
    var minusButtons = document.querySelectorAll('.button-minus');
    plusButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var travelerCountElement = this.parentElement.querySelector('span[id$="-count"]');
            var currentCount = parseInt(travelerCountElement.textContent);
            travelerCountElement.textContent = currentCount + 1;
            console.log(formatData());
            document.getElementById('valueForTravelers').value = externalWizardForm.form2.villas_numberTravelers;
        });
    });

    minusButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var travelerCountElement = this.parentElement.querySelector('span[id$="-count"]');
            var currentCount = parseInt(travelerCountElement.textContent);
            if (currentCount > 0) {
                travelerCountElement.textContent = currentCount - 1;
                console.log(formatData());
                document.getElementById('valueForTravelers').value = externalWizardForm.form2.villas_numberTravelers;
            }
        });
    });


    checkbox.addEventListener('change', function () {
        console.log(formatData());
        document.getElementById('valueForTravelers').value = externalWizardForm.form2.villas_numberTravelers;
    });
    formatData()
    tab2Selected()
}


var fakeLoader = (path, text, link, image, sec = 3) => {

    const fakeLoaderCont = document.getElementById("fake-loader")
    const fakeLoaderText = document.getElementById("fake-loader-text")
    fakeLoaderText.innerHTML = text;
    const fakeLoaderImage = document.getElementById("fake-loader-image")
    fakeLoaderImage.setAttribute("src", image)
    const fakeLoaderLink = document.getElementById("fake-loader-link")
    fakeLoaderLink.innerHTML = link;
    fakeLoaderCont.style.display = "block"
    setTimeout(() => {

        window.open(path);
        fakeLoaderCont.style.display = "none"

    }, sec * 1000)



}

initExternalWizard()


