const { default: axios } = require("axios");

class Carts{
    #URL = "https://fakestoreapi.com/products";
    async findAll(){
        return await axios.get(this.#URL);
    }
    async gitOne(id){
        return await axios.get(`https://fakestoreapi.com/products/${id}`);
    }
}
module.exports = new Carts;