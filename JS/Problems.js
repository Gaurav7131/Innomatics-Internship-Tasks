//1.A customer wants to withdraw money from an ATM.
//  Write a function atmWithdrawal(balance, amount, pin, enteredPin) that checks:

function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }

    balance -= amount;
    return 'Withdrawal successful. Remaining balance: ${balance}';
}
console.log(atmWithdrawal(5000, 1200, 1234, 1234));


//7.E-commerce Coupon Redemption
//Write a function applyCoupon(orderAmount, couponCode) that calculates the final price.
function applyCoupon(orderAmount, couponCode) {
    const discount = 500;
    const shipping = 200;
    let finalAmount = orderAmount;

    if (couponCode === "DISSPLC12" && orderAmount > discount) {
        finalAmount *= 0.90;
    } else if (couponCode === "FREESHIP" && orderAmount > shipping) {
        return 'Final price: $${finalAmount.toFixed(2)} with free shipping';
    }

    return 'Final price: $${finalAmount.toFixed(2)}';
}
//console.log(applyCoupon(500, "DISSPLC12")); 
//console.log(applyCoupon(230, "FREESHIP")); 
//console.log(applyCoupon(150, "DISSPLC12")); 
console.log(applyCoupon(700, "FREESHIP"));


//3.Electricity Bill Calculation with Peak Hours
//Write a function calculateElectricityBill(units, timeOfDay) that returns the total bill.

function calculateElectricityBill(units, timeOfDay) {
    let rate;
    if (units < 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }
    if (timeOfDay >= 20 || timeOfDay < 8) {
        rate *= 1.10;
    }

    return (units * rate).toFixed(2);
}
//console.log(calculateElectricityBill(50, 10)); 
//console.log(calculateElectricityBill(150, 21)); 
//console.log(calculateElectricityBill(350, 7)); 
console.log(calculateElectricityBill(250, 14));



//8.Fitness Membership Plan
//Write a function choosePlan(planType, wantsTrainer, wantsDietPlan) that suggests the best membership.
function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP" || (wantsTrainer && wantsDietPlan)) {
        return "VIP Plan: $80/month (Gym + Trainer + Diet Plan)";
    } else if (planType === "Premium" || wantsTrainer) {
        return "Premium Plan: $50/month (Gym + Personal Trainer)";
    } else {
        return "Basic Plan: $20/month (Gym Access Only)";
    }
}
console.log(choosePlan("Basic", false, false));
console.log(choosePlan("Premium", true, false));
console.log(choosePlan("VIP", true, true));
console.log(choosePlan("Basic", true, true));
console.log(choosePlan("Basic", false, true));


//10.Flight Ticket Booking System
//Write a function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) that returns the final price.

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300;
    let additionalCharge = 0;
    if (classType === "Business") {
        additionalCharge += 200;
    } else if (classType === "First") {
        additionalCharge += 500;
    }
    if (luggageWeight > 20) {
        additionalCharge += Math.ceil((luggageWeight - 20) / 10) * 50;
    }
    let totalFare = baseFare + additionalCharge;
    if (isStudent) {
        totalFare *= 0.85;
    } else if (isSenior) {
        totalFare *= 0.90;
    }

    return 'Final price: $${totalFare.toFixed(2)}';
}
//console.log(calculateFlightFare("Economy", 15, false, false));
//console.log(calculateFlightFare("Business", 25, false, false)); 
//console.log(calculateFlightFare("First", 35, true, false)); 



//2.Online Shopping Discount & Free Shipping.
//Write a function calculateFinalAmount(orderAmount) that returns the final payable amount after discount and applicable shipping charges.

function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;

    if (orderAmount > 1000) {
        discount = orderAmount * 0.20;
    }
    else if (orderAmount >= 500 && orderAmount <= 1000) {
        discount = orderAmount * 0.10;
    }
    else {
        discount = 0;
    }
    let amountAfterDiscount = orderAmount - discount;
    if (amountAfterDiscount > 50) {
        shipping = 0;
    }
    else {
        shipping = 10;
    }
    let finalAmount = amountAfterDiscount + shipping;
    return finalAmount;
}
console.log(calculateFinalAmount(2000));
console.log(calculateFinalAmount(200));



//3.Student Grading System with Extra Credit.
//Write a function calculateGrade(marks, attendance) that returns the student's final grade.

function calgrade(marks, attendance) {
    if (attendance > 90) {
        marks += 5;
    }

    if (marks >= 90) {
        return "A";

    }
    else if (marks >= 80) {
        return "B"

    }
    else if (marks >= 70) {
        return "C"

    }
    else if (marks > 60) {
        return "D"

    }
    else {
        return "F"

    }
}
console.log(calgrade(79, 93));


