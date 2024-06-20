const { CarsController } = require('../../src/CarsController')

const carsController = new CarsController()

describe('Check Cars API', () => {
    beforeAll(async () => {
        await carsController.login()
    })

    afterAll(async () => {
        const carsResponse = await carsController.getCars()
        const carIds = carsResponse.data.data.map((c) => c.id)
        for (const carId of carIds) {
            const res = await carsController.deleteCarById(carId)
        }
    })

    test('User can create a variety of models and brands car', async () => {
        let carsModelsResponse = await carsController.getCarsModels()
        const carModelsList = [...carsModelsResponse.data.data]
        console.log(carModelsList.data);

        for (model of carModelsList) {
            let carNewResponse = await carsController.createCar(model.carBrandId, model.id, 100)
            expect(carNewResponse.status).toBe(201)
            expect(carNewResponse.data.data.carBrandId).toBe(model.carBrandId)
            expect(carNewResponse.data.data.carModelId).toBe(model.id)
        }
    })

    test('Negative - Brand is a required field upon Create a new car', async () => {
        let carNewWoBrandResponse = await carsController.createCar(undefined, 1, 100)
        expect(carNewWoBrandResponse.status).toBe(400)
         
    })

    test('Negative - Model is a required field upon Create a new car', async () => {
        let carNewWoModelResponse = await carsController.createCar(1, undefined, 100)
        expect(carNewWoModelResponse.status).toBe(400)
           
    })

    test('Negative - Get Brand by non-existed BrandID', async () => {
        let carNewWoBrandResponse = await carsController.getCarsBrandsByID(1245)
        expect(carNewWoBrandResponse.status).toBe(404)
        expect(carNewWoBrandResponse.data.message).toBe("No car brands found with this id")
         
    })

    test('Negative - Get Model by non-existed ModelID', async () => {
        let carNewWoModelResponse = await carsController.getCarsModelsByID(12450)
        expect(carNewWoModelResponse.status).toBe(404)
        expect(carNewWoModelResponse.data.message).toBe("No car models found with this id")
           
    })
})