document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate-btn").addEventListener("click", function () {
        var principal = parseFloat(document.getElementById("principal").value);
        var rate = parseFloat(document.getElementById("rate").value);
        var time = parseFloat(document.getElementById("time").value);
        var timeUnit = document.getElementById("time-unit").value;

        if (!isNaN(principal) && !isNaN(rate) && !isNaN(time)) {
            if (timeUnit === "days") {
                time = time / 365;
            } else if (timeUnit === "months") {
                time = time / 12;
            }

            var interest = principal * (Math.pow((1 + rate / 100), time)) - principal;
            var totalAmount = principal + interest;
            document.getElementById("result").textContent = "Total Amount: $" + totalAmount.toFixed(2) + " (Interest: $" + interest.toFixed(2) + ")";
        } else {
            document.getElementById("result").textContent = "Please enter valid values for Principal, Rate, and Time.";
        }
    });
});