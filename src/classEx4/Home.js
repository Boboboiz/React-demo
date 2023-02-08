import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";
import ShowInfo from "./ShowInfo";

export default class Home extends Component {
  product = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];
  state = {
    product: null,
    cart: [], // mảng
  };
  setSelectedProduct = (val) => {
    this.setState({
      product: val,
    });
  };
  addToCart = (item) => {
    const cartItem = { product: item, quantity: 1 };
    const cloneCart = [...this.state.cart]; //clone arr
    // const cartItem - {product, quantity}
    const foundItem = cloneCart.find((cartItem) => {
      return cartItem.product.id === item.id;
    });
    if (foundItem) {
      // tăng số lượng
      foundItem.quantity += 1;
    } else {
      // thêm cartItem mới vào cart
      cloneCart.push(cartItem);
    }
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  }; // state là mảng hay object muốn sử dụng thì clone 1 object/arr r làm sau đó gán lại
  deleteItem = (id) => {
    const cloneCart = [...this.state.cart];
    const indexItem = cloneCart.findIndex((cartItem) => {
      return cartItem.product.id === id;
    });
    if (indexItem === -1) return;
    cloneCart.splice(indexItem, 1);
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };
  // deleteItem2() {
  //   const taskIndex = this.state.cart.children[0].innerText;
  //   arr.splice(arr.indexOf(taskIndex), 1);
  //   this.setState(
  //     {
  //       cart: arr,
  //     },
  //     () => {
  //       console.log(this.state.cart);
  //     }
  //   );
  // }
  // increase quant
  increaseQuant = (id) => {
    const cloneCart = [...this.state.cart];
    const item = cloneCart.find((cartItem) => {
      return cartItem.product.id === id;
    });
    if (!item) return;
    if (item.product.quantity > item.quantity) {
      item.quantity += 1;
    } 
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };
  decreaseQuant = (id) => {
    const cloneCart = [...this.state.cart];
    const item = cloneCart.find((cartItem) => {
      return cartItem.product.id === id;
    });
    if (!item) return;
    if (item.quantity === 1) {
      const text = "Bạn có muốn xóa sản phẩm hem?";
      if (window.confirm(text) === true) return this.deleteItem(id);
    } else if (item.quantity > 0) {
      item.quantity -= 1;
    }
    this.setState(
      {
        cart: cloneCart,
      },
      () => {
        console.log(this.state.cart);
      }
    );
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shoe Shop</h1>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          Giỏ hàng (0)
        </button>
        <ProductList
          product={this.product}
          setSelectedProduct={this.setSelectedProduct}
          addToCart={this.addToCart}
        />
        {this.state.product && (
          <ShowInfo setSelectedProduct={this.state.product} />
        )}

        {this.state.cart && (
          <Cart
            cart={this.state.cart}
            deleteItem={this.deleteItem}
            increaseQuant={this.increaseQuant}
            decreaseQuant={this.decreaseQuant}
          />
        )}
      </div>
    );
  }
}
