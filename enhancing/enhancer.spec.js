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
        expect(enhancer.success({
            name: "Bowl",
            enhancement: 200,
            durability: 68
        })).toEqual({
            name: "Bowl",
            enhancement: 200,
            durability: 68
        })
    })

    it("fails enhancement", () => {
        expect(enhancer.fail({
            name: "Bowl",
            enhancement: 14,
            durability: 68
        })).toEqual({
            name: "Bowl",
            enhancement: 14,
            durability: 63
        })
        expect(enhancer.fail({
            name: "Bowl",
            enhancement: 20,
            durability: 68
        })).toEqual({
            name: "Bowl",
            enhancement: 19,
            durability: 58
        })
        expect(enhancer.fail({
            name: "Bowl",
            enhancement: 16,
            durability: 68
        })).toEqual({
            name: "Bowl",
            enhancement: 16,
            durability: 58
        })
        expect(enhancer.fail({
            name: "Bowl",
            enhancement: 15,
            durability: 68
        })).toEqual({
            name: "Bowl",
            enhancement: 15,
            durability: 58
        })
    })

    it("Gets new item", () => {
        expect(enhancer.get({
            name: "Spoon",
            enhancement: 0,
            durability: 15
        })).toEqual({
            name: "Spoon",
            enhancement: 0,
            durability: 15
        })
        expect(enhancer.get({
            name: "Spoon",
            enhancement: 4,
            durability: 15
        }, 4)).toEqual({
            name: "[+4] Spoon",
            enhancement: 4,
            durability: 15
        })
    })
})
