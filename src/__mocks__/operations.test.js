const { getProducts } = require("../operations")
const { products } = require("../database")

describe("API functions", () => {
	describe("function getProducts", () => {
		it("return a list of products that match a query", () => {
			const testQuery = "bollar"
			const actual = getProducts(testQuery)
			const mockGetProducts = jest.fn(() => products)
			const arrayOfExpected = mockGetProducts()

			expect(arrayOfExpected).toContain(actual)
		})
	})
})
