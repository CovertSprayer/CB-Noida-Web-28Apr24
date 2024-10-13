const buyButton = document.getElementById("buy-now-btn");

buyButton.addEventListener("click", (e) => {
  e.preventDefault();

  const productId = buyButton.getAttribute("productId");
  const amount =
    buyButton.previousElementSibling.previousElementSibling.innerText
      .split(" ")
      .pop();
  if (productId) makePayment(productId, amount);
});

async function makePayment(productId, amount) {
  try {
    const res = await axios.post(
      `/products/${productId}/order`,
      {
        amount,
      },
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );
    
    const options = {
      key: "rzp_test_19b3EvYs3pUWmt", // Replace with your Razorpay key_id
      amount: res.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      order_id: res.data.order.orderId, // This is the order_id created in the backend
      callback_url: "/verify-payment", // Your success URL
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  } catch (error) {
    if (error.status == 401) {
      window.location.replace("/login");
    }
  }
}
