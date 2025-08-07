"use strict";
const calculateOrderTotal = (order) => {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
};
const printOrder = (order) => {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for (const item of order.items) {
        const name = item.product.name;
        const quantity = item.quantity;
        const totalPrice = item.product.price * quantity;
        console.log(`${quantity} cái ${name}, giá ${totalPrice} VND`);
    }
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total} VND`);
    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
};
const order = {
    orderId: "ORD001",
    customerName: "Trần Đăng Việt",
    items: [
        {
            product: { id: "T01", name: "Giày thể thao", price: 270000 },
            quantity: 2
        },
        {
            product: { id: "T02", name: "Máy chơi game", price: 500000 },
            quantity: 1
        }
    ],
    note: "Giao vào buổi chiều"
};
printOrder(order);
