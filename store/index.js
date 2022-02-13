import sneakers from '../static/shoes.json'

export const state = () => ({
    sneakers,
    gender: "any",
    price: "",
    checkedBrend: [],
    brandCount: 0,
    minPrice: 0,
    maxPrice: 100000,
})
export const mutations = {
    getBrand(state, checkedBrend) {
        state.checkedBrend = checkedBrend
    },
    getPrice(state, price) {
        state.price = price
    },
    getMinPrice(state, minPrice) {
        state.minPrice = minPrice
    },
    getMaxPrice(state, maxPrice) {
        state.maxPrice = maxPrice
    },
    getGender(state, gender) {
        state.gender = gender
    },
}