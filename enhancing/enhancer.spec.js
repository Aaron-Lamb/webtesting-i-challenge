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

    it("Succeeds enhancement", () => {
        expect(enhancer.success({
            name: "Bowl",
            enhancement: 20,
            durability: 68
        })).toEqual({
            name: "Bowl",
            enhancement: 20,
            durability: 68
        })
        expect(enhancer.success({
            name: "Bowl",
            enhancement: 17,
            durability: 68
        })).toEqual({
            name: "Bowl",
            enhancement: 18,
            durability: 68
        })
    })
})
