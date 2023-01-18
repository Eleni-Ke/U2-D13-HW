const getBooks = async () => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/books");

    let books = await response.json();
    console.log(books);
    showBooks(books);
  } catch (error) {
    console.log("Error", error);
  }
};

window.onload = () => {
  getBooks();
};

const showBooks = (books) => {
  let cardRow = document.querySelector("#cardRow");
  let bookArray = books;
  bookArray.forEach((book) => {
    cardRow.innerHTML += `
    <div class="col-md-3" id= "asin${book.asin}">
        <div class="card mb-4 shadow-sm rounded text-center">
            <img
                src="${book.img}"
                alt="animal picture"
                class="card-img-top"
                width="100%"
                height="225"
                preserveAspectRatio="xMidYMid slice"
            />
            <div class="card-header">
                <h5>${book.title}</h5>
            </div>
            <div class="card-body">
                <p class="card-text">
                Category: ${book.category} <br>
                Price: ${book.price}
                </p>
                <div
                class="d-flex justify-content-between align-items-center"
                >
                    <div class="btn-group">
                        <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onclick="addToCart(${book.asin})"
                        >
                        Add to Cart
                        </button>
                        <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        >
                        Skip
                        </button>
                    </div>
                    <small class="text-muted">${book.asin}</small>
                </div>
            </div>
        </div>
    </div>`;
  });
};

const addToCart = (asin) => {
  console.log(asin);
  let cardRow = document.querySelector("#cardRow");
  let shoppingCart = document.querySelector("#shoppingCart");

  let cardToAdd = document.querySelector(`#asin${asin}`);
  cardRow.removeChild(cardToAdd);
  shoppingCart.appendChild(cardToAdd);
};
