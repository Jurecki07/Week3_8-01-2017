
for (let i = 0; i < customers.results.length; i++) {
    const content = `
<div class="content">
    <img src=${customers.results[i].picture.large} alt="Picture1">
    <p class="fullName"> <strong>${customers.results[i].name.first} ${customers.results[i].name.last}</strong> </p>
    <p class="mail"> ${customers.results[i].email} </p>
    <p class="adde"> ${customers.results[i].location.street}${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}<br> South Valley Missouri, 99356 </br> <br> (385)-917-9080 </br>
    <p class="adde">${customers.results[i].cell}
</div>
`

    document.querySelector('.grid').innerHTML += content;
}