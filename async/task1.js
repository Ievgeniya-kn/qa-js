async function getPlanets() {
    let planetsArrays = []
    for (i = 1; i <= 10; i++) {
        const planetResponse = await fetch(`https://swapi.dev/api/planets/${i}`);
        planetsArrays.push((await planetResponse.json()).name); 
    }
    console.log(planetsArrays);
}

getPlanets();

