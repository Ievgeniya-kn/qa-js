async function getStarships() {
    let starShipsArray = []

    let starShipsArrayLinks = await fetch('https://swapi.dev/api/people/14');
    starShipsArrayLinks = (await starShipsArrayLinks.json()).starships;

    for (element of starShipsArrayLinks) {
        let urls = await fetch(element);
        starShipsArray.push((await urls.json()).name);
    }
    console.log(starShipsArray);
}
getStarships();


// Promise
let starShipsArray = []
let starShipsArrayLinks = []

fetch('https://swapi.dev/api/people/14')
    .then(result => result.json())
    .then(data => data.starships)
    .then(starships => Promise.all(starships.map(urls => fetch(urls))))
    .then(result => Promise.all(result.map(response => response.json())))
    .then(arrays => arrays.map(element => element.name))
    .then(arays => starShipsArray.push(...arays))
    .then(x => console.log(starShipsArray));


