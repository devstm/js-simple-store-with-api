const Carts = require('./controller');
function addToList(items) {
    items.forEach(element => {
            let cartItem = document.querySelector("#cardBody");
            cartItem.innerHTML += `
    <div class="card-header" >
    ${element.title}
  </div>
  <div class="card-body" >
    <img class="card-img-top" style="max-height:250px;  max-width: 60%;" src="${element.image}"  alt="Card image cap"> 
    <h5 class="card-title">${element.category}</h5>
    <p class="card-text">${element.description}</p>
    <button id="${element.id}" tybe="button" class="btn btn-primary">Add To Cart</button>
  </div>
  <div class="card-footer text-muted">
    ${element.price}$
  </div>

    `
        }
    );

}


function addToCart() {
    let btns = document.querySelectorAll('.btn-primary');
    btns.forEach(function (btn) {
        btn.addEventListener('click',function (e) {
            e.preventDefault();
            let id = e.target.getAttribute('id');
            Carts.gitOne(id).then(response=>{
                let product = response.data;
                let table = document.querySelector("tbody");
                console.log(table);
                table.innerHTML += `
        <tr>
        <th scope="row">${product.title}</th>
        <td>${product.price}$</td>
        <td>X</td>
      </tr>
        `
            });

        })

    });
}

Carts.findAll().then(response => {

    let items = response.data;
    addToList(items);
    addToCart();


});
