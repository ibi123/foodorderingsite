document.querySelector(".container form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission (no redirect)

    // Hide the form
    document.querySelector(".container form").style.display = "none";

    // Show the "Thank You" message
    const thankYouMessage = document.createElement("div");
    thankYouMessage.id = "thank-you-message";
    thankYouMessage.innerText = "Thank you! Your order has been placed.";
    document.querySelector(".container").appendChild(thankYouMessage);

    // Send the email (this part still works)
    const orderDetails = document.getElementById("order-details-input").value;
    const orderData = new FormData(event.target);
    orderData.append("order-details", orderDetails);

    fetch("https://formsubmit.co/muifoods1@gmail.com", {
        method: "POST",
        body: orderData
    })
    .then(response => {
        if (response.ok) {
            console.log("Order submitted successfully");
        } else {
            console.error("Order submission failed");
        }
    })
    .catch(error => {
        console.error("Error submitting order", error);
    });
});
