export default interface Product {
	productId: Number;
	productName: String;
	supplierId: Number;
	categoryId: Number;
	quantityPerUnit: String;
	unitPrice: Number;
	unitsInStock: Number;
	unitsOnOrder: Number;
	reorderLevel: Number;
	descontinued: Number; // false
}
