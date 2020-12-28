function submitTickets(booking) {
    return new Promise(resolve => {
        let dest = document.getElementById("destination_city");
        let dep = document.getElementById("departure_city");
        let date = document.getElementById("departure_date");

        setTimeout(function () {
            booking.tickets.destination_city = dest.options[dest.selectedIndex].text;
            booking.tickets.departure_city = dep.options[dep.selectedIndex].text;
            booking.tickets.departure_date = date.value;

            tickets_form.style.display = "none";

            resolve(booking);
        }, 500);
    });
}

function prepareHotel(booking) {
    function submitHotel(booking) {
        return new Promise(resolve => {
            let type = document.getElementById("hotel_type");
            let date = document.getElementById("booking_date");

            setTimeout(function () {
                booking.hotel.hotel_type = type.options[type.selectedIndex].text;
                booking.hotel.booking_date = date.value;

                hotel_form.style.display = "none";

                resolve(booking);
            }, 500);
        });
    }

    let hotel_city = document.getElementById("hotel_city");
    let hotel_submit = document.getElementById("hotel_submit");

    hotel_city.innerHTML = booking.tickets.destination_city;
    loading_screen.style.display = "none";
    hotel_form.style.display = "flex";

    hotel_submit.addEventListener("click", (event) => {
        event.preventDefault();
        submitHotel(booking)
            .then(res => loading(res))
            .then(res => prepareVisa(res));
    }, {once: true});
}

function prepareVisa(booking) {
    function submitVisa(booking) {
        return new Promise(resolve => {
            let duration = document.getElementById("visa_duration");

            setTimeout(function () {
                booking.visa_duration = duration.options[duration.selectedIndex].text;

                visa_form.style.display = "none";

                resolve(booking);
            }, 500);
        });
    }

    let visa_country = document.getElementById("visa_country");
    let visa_date = document.getElementById("visa_date");
    let visa_submit = document.getElementById("visa_submit");

    visa_country.innerHTML = booking.tickets.destination_city.split(" ").pop();
    visa_date.innerHTML = booking.tickets.departure_date;

    loading_screen.style.display = "none";
    visa_form.style.display = "flex";

    visa_submit.addEventListener("click", (event) => {
        event.preventDefault();
        submitVisa(booking)
            .then(res => loading(res))
            .then(res => prepareBooking(res));
    }, {once: true});
}

function prepareBooking(booking) {
    let booking_info = document.getElementById("booking_info");
    let destination_city_info = document.getElementById("destination_city_info");
    let departure_city_info = document.getElementById("departure_city_info");
    let departure_date_info = document.getElementById("departure_date_info");
    let hotel_type_info = document.getElementById("hotel_type_info");
    let booking_date_info = document.getElementById("booking_date_info");
    let visa_duration_info = document.getElementById("visa_duration_info");

    loading_screen.style.display = "none";
    booking_info.style.display = "flex";

    destination_city_info.innerHTML = booking.tickets.destination_city;
    departure_city_info.innerHTML = booking.tickets.departure_city;
    departure_date_info.innerHTML = booking.tickets.departure_date;
    hotel_type_info.innerHTML = booking.hotel.hotel_type;
    booking_date_info.innerHTML = booking.hotel.booking_date;
    visa_duration_info.innerHTML = booking.visa_duration;

    return console.log(booking);
}

function loading(booking) {
    function loadingAnimationOne() {
        return new Promise(resolve => {
            setTimeout(function () {
                loading_screen.innerHTML = "Обработка данных.<br>\nПожалуйста, подождите.";

                resolve();
            }, 500);
        });
    }

    function loadingAnimationTwo() {
        return new Promise(resolve => {
            setTimeout(function () {
                loading_screen.innerHTML = "Обработка данных.<br>\nПожалуйста, подождите..";

                resolve();
            }, 500);
        });
    }

    function loadingAnimationThree() {
        return new Promise(resolve => {
            setTimeout(function () {
                loading_screen.innerHTML = "Обработка данных.<br>\nПожалуйста, подождите...";

                resolve();
            }, 500);
        });
    }

    let loading_screen = document.getElementById("loading");

    return new Promise(resolve => {
        loading_screen.style.display = "flex";

        loadingAnimationTwo()
            .then(loadingAnimationThree)
            .then(loadingAnimationOne)
            .then(loadingAnimationTwo)
            .then(loadingAnimationThree)

        setTimeout(function () {
            resolve(booking);
        }, 2500)

    });
}


let new_booking = {
    tickets: {
        destination_city: "",
        departure_city: "",
        departure_date: ""
    },
    hotel: {
        hotel_type: "",
        booking_date: "",
    },
    visa_duration: ""
};

let tickets_form = document.getElementById("tickets");
let hotel_form = document.getElementById("hotel");
let visa_form = document.getElementById("visa");
let loading_screen = document.getElementById("loading");

document.getElementById("tickets_submit").addEventListener("click", (event) => {
    event.preventDefault();
    submitTickets(new_booking)
        .then(res => loading(res))
        .then(res => prepareHotel(res));
}, {once: true});
