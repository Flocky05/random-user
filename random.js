const $ = id => document.getElementById(id)
const loadQuote = async () => {
    const res = await fetch('https://randomuser.me/api/')
    const { results: data } = await res.json()
    const { dob: { age, date }, email, gender, name: { first, last }, phone, picture: { large }, login: { username }, location: { city, country } } = data[0]
    //fetch section
    function loadName() {

        $('headline').innerText = 'My Name is'
        $('description').innerText = `${first}  ${last}`
    }
    $('image').addEventListener('click', function (event) {
        event.preventDefault();
        location.reload();
    })

    loadName();
    $('image').setAttribute('src', large);
    $('icons').addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('fa-phone')) {
            $('headline').innerText = 'My phone number is'
            $('description').innerText = phone
        }
        if (e.target.classList.contains('fa-envelope')) {
            $('headline').innerText = 'My email is'
            $('description').innerText = email
        }

        if (e.target.classList.contains('fa-calendar-days')) {
            $('headline').innerText = 'My Birthdate is'
            $('description').innerText = date.slice(0, 10)
        }
        if (e.target.classList.contains('fa-map-location-dot')) {
            $('headline').innerText = 'My Address is'
            $('description').innerText = `${city} , ${country}`
        }
        if (e.target.classList.contains('fa-twitter')) {
            $('headline').innerText = 'My Twitter is'
            $('description').innerText = username
        }
        if (e.target.classList.contains('fa-user')) {
            loadName()
        }
    })
    $('twitter').addEventListener('click', function () {
        location.href = `https://twitter.com/${username}`;
    })
}



loadQuote()