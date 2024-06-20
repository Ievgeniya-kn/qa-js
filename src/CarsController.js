const { BaseController } = require('./BaseController')

class CarsController extends BaseController {
    constructor() {
        super()
        this.API_CARS = '/cars'
        this.API_CARS_ID = '/cars/{id}'
        this.API_CARS_MODELS = '/cars/models'
        this.API_CARS_MODELS_ID = '/cars/models/{id}'
        this.API_CARS_BRANDS = '/cars/brands'
        this.API_CARS_BRANDS_ID = '/cars/brands/{id}'
    }

    async getCarsModels() {
        return this.get(this.API_CARS_MODELS)
    }

    async getCarsModelsByID(id) {
        return this.get(this.API_CARS_MODELS_ID.replace('{id}', id))
    }

    async getCarsBrands() {
        return this.get(this.API_CARS_BRANDS)
    }

    async getCarsBrandsByID(id) {
        return this.get(this.API_CARS_BRANDS_ID.replace('{id}', id))
    }

    async getCars() {
        return this.get(this.API_CARS)
    }

    async createCar(carBrandId, carModelId, mileage) {
        return this.post(this.API_CARS, {
            carBrandId,
            carModelId,
            mileage,
        })
    }

    async deleteCarById(id) {
        return this.delete(this.API_CARS_ID.replace('{id}', id))
    }
}

module.exports.CarsController = CarsController