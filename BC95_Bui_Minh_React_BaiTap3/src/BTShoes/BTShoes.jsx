// rafc
import React, { useState } from "react";
import dataShoes from "./data.json";
import { ProductList } from "./ProductList";
import { ProductDetail } from "./ProductDetail";
import { ProductCart } from "./ProductCart";

export const BTShoes = () => {
  console.log({ dataShoes });
  const [prdDetail, setPrdDetail] = useState({
    sizes: [32, 33, 34, 35],
    id: 2,
    name: "vans old school",
    alias: "vans-old-school",
    price: 200,
    description:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    size: "[32,33,34,35]",
    shortDescription:
      "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    quantity: 200,
    deleted: false,
    categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
    relatedProducts: "[3,2,1]",
    feature: true,
    image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
    imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
  });

  // cart => #abcxyz
  const [cart, setCart] = useState([
    {
      sizes: [32, 33, 34, 35],
      id: 2,
      name: "vans old school",
      alias: "vans-old-school",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[3,2,1]",
      feature: true,
      image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
      imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
      cartQuantity: 1, // số lượng sản phẩm trong giỏ hàng
    },
  ]);

  console.log({ prdDetail });

  // newPrd: 1 object shoe
  const handlePrdDetail = (newPrd) => {
    setPrdDetail(newPrd);
  };

  const handleAddToCart = (prd) => {
    // 1. Thêm sản phẩm vào giỏ hàng
    // Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
    const index = cart.findIndex((item) => item.id === prd.id);

    if (index === -1) {
      // chưa có sp trong giỏ hàng => thêm mới
      prd.cartQuantity = 1; // số lượng mặc định khi thêm mới vào giỏ hàng
      setCart([...cart, prd]); // spread operator
    } else {
      // đã có sp trong giỏ hàng => tăng số lượng
      const newCart = [...cart]; // shallow copy
      newCart[index].cartQuantity += 1;
      setCart(newCart);
    }

    
  };

  //prdId: id của sản phẩm cần xóa khỏi giỏ hàng
  const handleDeleteCartItem = (prdId) => {
    setCart(cart.filter((item) => item.id !== prdId));
  };

  // tham trị  và tham chiếu

  // tham trị: value type (string, number, boolean, null, undefined)
  let a = 10;
  let b = a; // 10
  a = 20;
  console.log({ a, b });

  // tham chiếu: reference type (object, array, function)
  let c = {
    name: "abc",
    age: 18,
    address: {
      city: "HCM",
      district: "10",
    }, //#5555
  }; // #123456
  let d = c;
  let e = c;

  // copy nông (shallow copy)
  const c1 = { ...c, address: { ...c.address } }; // #123456789

  // copy sâu (deep copy)
  const c2 = JSON.parse(JSON.stringify(c)); // #987654321
  console.log({ c2 });

  c.name = "xyz";
  c.address.city = "HN";

  console.log({ c1 });
  console.log({ c, d, e });

  // var a1 = 10
  // var a1 = { name: 'abc' }
  // let x = 10
  // {
  //     let x = 10
  // }

  return (
    <div className="mt-10 container mx-auto">
      <div className="bg-red-500 text-white text-5xl p-10">
        Tailwind testing 
      </div>
      <h1 className="text-center text-2xl font-medium">BT Shoes</h1>

      <ProductDetail product={prdDetail} />

      <ProductCart cart={cart} handleDeleteCartItem={handleDeleteCartItem} />

      {/*  */}
      <button
        data-bs-toggle="modal"
        // id của modal muốn mở
        data-bs-target="#product-cart-modal"
        className="btn btn-success mb-5"
      >
        Cart
      </button>

      <ProductList
        data={dataShoes}
        handlePrdDetail={handlePrdDetail}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};
