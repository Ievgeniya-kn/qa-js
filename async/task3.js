async function getResidents() {
    let planetsResidentsFinally = [];
    let planetsUrls = [];

    planetsUrls = await fetch('https://swapi.dev/api/films/3/');
    planetsUrls = (await planetsUrls.json()).planets;

    for (element of planetsUrls) {
        let urls = await fetch(element);
        let residentsArray = [];
        responsePlanets = await urls.json();
        let urlsResidents = responsePlanets.residents;

        for (element of urlsResidents) {
            let residents = await fetch(element);
            let responseResidents = await residents.json();
            residentsArray.push(responseResidents.name);
        }

        let planetsResidents = {
            planet: responsePlanets.name, 
            residents: residentsArray,
        }

        planetsResidentsFinally.push(planetsResidents);
    }
    console.log(planetsResidentsFinally);
}
getResidents();

