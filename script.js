// =============================== Step 2: Employee Role Access System ===============================

// Ask employee role using prompt
let role = prompt("Enter your role (admin / manager / developer / intern)").toLowerCase();

// Decide access level using switch
switch (role) {
    case "admin":
        alert("Full system access");
        break;
    case "manager":
        alert("Team management access");
        break;
    case "developer":
        alert("Code access");
        break;
    case "intern":
        alert("Limited access");
        break;
    default:
        alert("Role not recognized");
        break;
}

// Observations in comments
// User enters role → corresponding access shown via alert
// .toLowerCase() ensures input is case-insensitive



// =============================== Step 3: Online Payment Method Selection ===============================

// Ask user for payment method
let paymentMethod = prompt("Choose payment method (credit / debit / upi / cod)").toLowerCase();

// Decide message using switch
switch (paymentMethod) {
    case "credit":
        alert("You selected Credit Card. Proceed to payment.");
        break;
    case "debit":
        alert("You selected Debit Card. Proceed to payment.");
        break;
    case "upi":
        alert("You selected UPI. Proceed to payment.");
        break;
    case "cod":
        alert("You selected Cash on Delivery. Order will be collected on delivery.");
        break;
    default:
        alert("Invalid payment method. Please try again.");
        break;
}

// Observations in comments
// User input determines alert message
// .toLowerCase() ensures input works regardless of uppercase/lowercase


// =============================== Step 4: Order Status Checker ===============================

// Ask user for order status
let orderStatus = prompt("Enter order status (placed / packed / shipped / delivered / cancelled)").toLowerCase();

// Decide message using switch
switch (orderStatus) {
    case "placed":
        alert("Your order has been placed successfully.");
        break;
    case "packed":
        alert("Your order has been packed and is ready to ship.");
        break;
    case "shipped":
        alert("Your order has been shipped.");
        break;
    case "delivered":
        alert("Your order has been delivered.");
        break;
    case "cancelled":
        alert("Your order has been cancelled.");
        break;
    default:
        alert("Invalid order status. Please try again.");
        break;
}

// Observations in comments
// User input determines alert message
// .toLowerCase() ensures input works regardless of case


// =============================== Step 5: Office Working Day Checker ===============================

// Ask user for day name
let day = prompt("Enter day name (Monday – Sunday)").toLowerCase();

// Check day type using switch
switch (day) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        alert("Working day");
        break;
    case "friday":
        alert("Half day");
        break;
    case "saturday":
    case "sunday":
        alert("Holiday");
        break;
    default:
        alert("Invalid day name. Please try again.");
        break;
}

// Observations in comments
// Multiple cases can share the same output
// .toLowerCase() ensures input is case-insensitive






