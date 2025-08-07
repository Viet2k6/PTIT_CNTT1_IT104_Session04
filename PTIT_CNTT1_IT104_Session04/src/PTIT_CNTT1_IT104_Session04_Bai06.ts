type Category = {
  id: string;
  name: string;
};

type Product1 = {
  id: string;
  name: string;
  price: number;
  category: Category;
  discount?: number;
};

const listProduct: Product1[] = [
  {
    id: "T001",
    name: "Máy chơi game PS5",
    price: 500000,
    category: {
      id: "t101",
      name: "Đồ điện tử",
    },
    discount: 20000,
  },
  {
    id: "T002",
    name: "Máy tính xách tay Dell",
    price: 100000,
    category: {
      id: "t101",
      name: "Đồ điện tử",
    },
  },
  {
    id: "T003",
    name: "Giày thể thao",
    price: 200000,
    category: {
      id: "t102",
      name: "Thời trang",
    },
    discount: 100000,
  },
];

const getFinalPrice = (product: Product1): number => {
  if (typeof product.discount === "number") {
    return product.price - product.discount;
  }
  return product.price;
};

const printProductInfo = (product: Product1): void => {
  console.log(`Tên: ${product.name}`);
  console.log(`Giá gốc: ${product.price} VND`);
  if (typeof product.discount === "number") {
    const finalPrice = getFinalPrice(product);
    console.log(`Giá sau giảm: ${finalPrice} VND`);
  }
  console.log(`Danh mục: ${product.category.name}`);
};
listProduct.forEach(printProductInfo);

