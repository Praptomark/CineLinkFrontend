<script>
    import { goto } from "$app/navigation";
    import { cartCounter } from "$lib/cart_counter";

    let cardNumber = "";
    let cardCVC = "";
    let cardExpDate = "";

    function getCookie(name) {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    const handleSubmit = async () => {
        const token = getCookie("jwt_token");

        const paymentData = {
            stripe_info: {
                card_number: cardNumber,
                card_cvc: cardCVC,
                card_exp_date: cardExpDate,
                amount: Number($cartCounter),
            },
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/api/payment/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${token}`,
                },
                body: JSON.stringify(paymentData),
            });

            if (response.ok) {
                // Payment successful, handle the success case
                goto("/corfirmationpage/forpayment")
                console.log("Payment successful!");
            } else {
                // Payment failed, handle the error case
                console.error("Payment failed.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
</script>

<div class="flex flex-col items-center justify-center py-20 gap-3">
    <h1 class="text-center font-opensans font-medium text-purple-500">Total Amount: {$cartCounter * 400}</h1>
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-5 bg-white text-purple-500 font-opensans p-5 rounded-md border-purple-500 border-2">
        <h1 class="text-center text-5xl font-titilliumweb font-bold text-violet-500">Stripe</h1>
        
        <label for="cardNumber" class="text-center">Visa Card Number:</label>
        <input type="text" id="cardNumber" class="rounded-md text-center border-purple-500 border-2" placeholder="4242 4242 4242 4242" bind:value={cardNumber} required />

        <div class="flex items-center gap-3">
            <label for="cardCVC">CVC:</label>
            <input type="text" id="cardCVC" class="rounded-md text-center border-purple-500 border-2" placeholder="1234" bind:value={cardCVC} required />
    
            <label for="cardExpDate">Expiration Date:</label>
            <input type="text" id="cardExpDate" class="rounded-md text-center border-purple-500 border-2" placeholder="12 / 30" bind:value={cardExpDate} required />
        </div>

        <button type="submit" class="bg-green-500 py-3 px-3 rounded-md active:bg-green-700 text-white">Proceed</button>
    </form>
</div>



