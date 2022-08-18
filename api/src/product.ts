import express from "express";

const product = express()

product.get('/mocks.ts:categoryId', (req, res) => {

    res.send("Categoria: " + req.params.categoryId)
    
});
export default product;