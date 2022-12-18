const  Product  = require('../models/product');

async function getProducts(){
    return await Product.findAll();
}

async function createProduct(product){
    await Product.create(product);
}

async function getProduct(id){
    return await Product.findByPk(id);
}

async function updateProduct(product, id){
    console.log(product)
    await Product.update({
        xsSize: product.xsSize,
        sSize: product.sSize,
        mSize: product.mSize,
        lSize: product.lSize,
        xlSize: product.xlSize,
        pName: product.pName,
        price: product.price
    }, {
        where: {id: id}
    });
}

async function deleteProduct(id){
    await Product.destroy({
        where: {id: id}
    })
}
module.exports = {getProducts, createProduct, getProduct, updateProduct, deleteProduct}