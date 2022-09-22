function vacation(number, type, day) {
    let totalSum = 0;
    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    totalSum = number * 8.45;
                    break;
                case "Saturday":
                    totalSum = number * 9.80;
                    break;
                case "Sunday":
                    totalSum = number * 10.46;
                    break;
            }
            if (number >= 30) {
                totalSum *= 0.85;

            }
            break;
        case "Business":
            if (number >= 100) {
                switch (day) {
                    case "Friday":
                        totalSum = (number - 10) * 10.90;
                        break;
                    case "Saturday":
                        totalSum = (number - 10) * 15.60;
                        break;
                    case "Sunday":
                        totalSum = (number - 10) * 16;
                        break;

                }
            } else {
                switch (day) {
                    case "Friday":
                        totalSum = number * 10.90;
                        break;
                    case "Saturday":
                        totalSum = number * 15.60;
                        break;
                    case "Sunday":
                        totalSum = number * 16;
                        break;


                }
            }

            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    totalSum = number * 15;
                    break;
                case "Saturday":
                    totalSum = number * 20;
                    break;
                case "Sunday":
                    totalSum = number * 22.50;
                    break;


            }
            if (number >= 10 && number <= 20) {
                totalSum *= 0.95;
            }
            break;

    }
    console.log(`Total price: ${totalSum.toFixed(2)}`);
}
vacation(30,

    "Students",

    "Sunday")
