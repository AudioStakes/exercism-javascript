const gigasecond = require("./gigasecond")
// @ponicode
describe("gigasecond.gigasecond", () => {
    test("0", () => {
        let callFunction = () => {
            gigasecond.gigasecond({ getTime: () => 100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            gigasecond.gigasecond({ getTime: () => -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            gigasecond.gigasecond({ getTime: () => 0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            gigasecond.gigasecond({ getTime: () => 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            gigasecond.gigasecond({ getTime: () => -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            gigasecond.gigasecond({ getTime: () => Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})
