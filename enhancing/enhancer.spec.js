const enhancer = require('./enhancer.js');
describe("Enhancer unit tests", () => {
    it("repairs", () => {
        expect(enhancer.repair({
            name: "Bowl",
            enhancement: 20,
            durability: 7
        })).toEqual({
            name: "Bowl",
            enhancement: 20,
            durability: 100
        })
        expect(enhancer.repair({
            name: "Bowl",
            enhancement: 20,
            durability: '0'
        })).toEqual({
            name: "Bowl",
            enhancement: 20,
            durability: 100
        })
    })
})
