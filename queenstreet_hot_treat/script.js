const beverages = {
    tea: [
        {
            shopName: "Bampot",
            shopPrice: "$$"
        },
        {
            shopName: "Simit & Chai",
            shopPrice: "$$"
        },
        {
            shopName: "David's Tea",
            shopPrice: "$"
        },
        {
            shopName: "Tenren's Tea",
            shopPrice: "$"
        }
    ],
    coffee : [
        {
            shopName: "StrangeLove",
            shopPrice: "$$"
        },
        {
            shopName: "Starbucks",
            shopPrice: "$$"
        },
        {
            shopName: "Shy Coffee",
            shopPrice: "$"
        },
        {
            shopName: "TimTim's",
            shopPrice: "$"
        }
    ]
}


// check whether our document is ready for JS:
$(document).ready(function() {


    // define a randomizer function
    const randomizer = function(array) {
        // use Math.random to generate a random integer which does not exceed the length of the array
        const randomArrayIndex = Math.floor(Math.random() * array.length);
        return array[randomArrayIndex];
    }


    // have an event listener on the form, which wil fire off instructions oce the form is submitted.

    $('form').on('submit', function(event) {
        //in here is where to write all of the code that we wish to fire ONCE the form is submitted
        // prevent the default behaviour of the form (the page refreshing on submit) (enter (event) in the function above as well!)
        event.preventDefault();

        //grab and store the user's drink choice + pricepoint choice
        // to get to the pecific chosen drinks data structure
        // using quatations around the name of the element also is valid as shown on the "price"
        const userDrinkChoice = $('input[name=beverage]:checked').val();
        const userPriceChoice = $('input[name="price"]:checked').val();
        console.log("user drink:", userDrinkChoice, "user pricepoint:", userPriceChoice);
        
        // determine which user choice corresponds to our beverage data structure
            //AKA isolate the beverage array which matches the user's choice
            const chosenDrinksArray = beverages[userDrinkChoice];
            console.log("array of drinks for the user", chosenDrinksArray);

            //create an empty array to hold the final options which match the use's selections
            const finalShopOptions = [];
            // loop through the chosen beverage array
            // conditions in for loops are separated by semicolons
            for (let i = 0; i < chosenDrinksArray.length; i++) {

                //logging out each individual shop object
                console.log(chosenDrinksArray[i]);
                //log out the pricepoint for each individual shop object
                console.log(chosenDrinksArray[i].shopPrice);
                // use a conditional to isolate the objects which match the user's chosen pricepoint

                if (chosenDrinksArray[i].shopPrice === userPriceChoice) {
                    console.log(chosenDrinksArray[i].shopName);

                    // STORE the shop that matches the user's beverage + pricepoint choice
                    finalShopOptions.push(chosenDrinksArray[i].shopName);

                }
                
        }
            
            console.log("array of all choices", finalShopOptions);
            // define a randomizer function above
            // after radomizer function is defined...: (line 46)
            // Choose a random coffee shop from the above using Math.random()
            console.log("Your Shop is:", randomizer(finalShopOptions) );
            const finalShopChoice = randomizer(finalShopOptions);

        // display the choice on the page

        $('.results').html(`<p class="choice">${finalShopChoice}</p>`)
        //smooth scroll to the result
        $('html').animate({
            scrollTop: $('.results').offset().top
        }, 1000);
    });

    


});