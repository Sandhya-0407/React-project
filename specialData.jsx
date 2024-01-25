import ayodhya from './special_images/ayodhya.jpg'
import indian_getway from './special_images/indian_getway.jpg'
import mahabaleshwar from './special_images/mahabaleshwar.jpg'
import prem_mandir from './special_images/prem_mandir.jpg'

const specialtour = [
    {
        id: 1,
    place:"Ayodhya",
        price: "70,000",
        specification: {
            stay: " Hotel - ",
            duration: "3 day 2 night",
            destination:" ",
            high_light:"7 places"

        },
        image:ayodhya


    },

    {
        id: 2,
    place:"Indian Getway",
        price: "70,000",
        specification: {
            stay: "hotel - taj ",
            duration: "6 day 5 night",
            destination:" Mumbai",
            high_light:"1 places"
        },
        image:indian_getway

    },

    {
        id: 3,
    place:"mahabaleshwar",
        price: "1,40,000",
        specification: {
            stay: "hotel - taj hotel",
            duration: "4 day 3 night",
            destination:" Guwahati,Dibrugarh,Tezpur",
            high_light:"3 places"

        },
        image:mahabaleshwar

    },

    {
        id: 4,
    place:"Prem Mandir",
        price: "43,000",
        specification: {
            stay: "hotel - The Peninsula Paris",
            duration: "4 day 2 night",
            destination:"Nariman point,Kanheri caves,Elephant caves Colaba ",
            high_light:"5 places"

        },
        image:prem_mandir

    },

]

export default specialtour;