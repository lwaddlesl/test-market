import sneakers from '../static/shoes.json'

export const state = () => ({
    sneakers,
    gender: "any",
    price: "",
    checkedBrend: [],
    size: [],
    model: [],
    brandCount: 0,
    prices: [0, 100_000],
    sortValue: "popular",

})
export const mutations = {
    getBrand(state, checkedBrend) {
        state.checkedBrend = checkedBrend
    },
    getPrice(state, price) {
        state.price = price
    },
    getPrices(state, prices) {
        state.Prices = prices
    },
    getGender(state, gender) {
        state.gender = gender
    },
    getSortValue(state, sortValue) {
        state.sortValue = sortValue
    },
    getSize(state, size) {
        state.size = size
    },
    getModel(state, model) {
        state.model = model
    },
}