jest.mock("./__mocks__/database.js")

const { getProducts } = require("./operations")
const { products } = require("./testData")

describe("API functions", () => {
	describe("function getProducts", () => {
		it("return a list of products that match a query", () => {
			const testQuery = "boll3"
			const expectedArray = products.filter((product) =>
				product.productName.includes(testQuery),
			)
			const actual = getProducts(testQuery)
			const mockGetProducts = jest.fn(() => products)

			expect(actual).toBe(expectedArray)
		})
	})
})
