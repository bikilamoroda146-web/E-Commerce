import cappuccino from"../assets/c.avif";
import caramelWithMocha from"../assets/ABC.jpg";
import mocha from"../assets/c.avif";
import americano from"../assets/CBA.jpg";
import blackcoffee from"../assets/c.avif";
import latte from"../assets/ABC.jpg";
import coffeechocolate from"../assets/CBA.jpg";

const products = [
    {
        id:1,
        name:"cappuccino",
        price:3.5,
        description:"Rich espresso with steamed milk foam",
        image:cappuccino,

    },
             {
        id:2,
        name:"Americano",
        price:4.2,
        description:"Strong and bold Americano shot.",
        image:americano,

    },
        {
        id:3,
        name:"Black Coffee",
        price:4.0,
        description:"Strong black coffee.",
        image:blackcoffee,

    },
        {
        id:4,
        name:"Caramel With Mocha",
        price:4.2,
        description:"Caramel white mocha iced coffee.",
        image:caramelWithMocha,

    },
        
            {
        id:5,
        name:"Coffee Chocolate",
        price:3.2,
        description:"Strong and bold Coffee Chocolate.",
        image:coffeechocolate,

    },
        {
        id:6,
        name:"Latte",
        price:4.0,
        description:"Rich latte with steaded milk foam.",
        image:latte,

    },
    
       {
        id:7,
        name:"Mocha",
        price:4.0,
        description:"Rich mocha with steamed milk foam",
        image:mocha,

    },
]
export default products