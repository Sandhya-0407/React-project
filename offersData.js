import moonlight from './offers_images/moonlight.jpg'
import new_zealand from './offers_images/new_zaeland.jpg'
import vaticancity from './offers_images/vaticancity.jpg'
import kutubminar from './offers_images/kutubminar.jpg'


const offertour = [
    {
        id: 1,
    place:"Moonlight City",
        price: "1,20,000",
        specification: {
            stay: " Hotel - city ",
            duration: "3 day 2 night",
            destination:" Moonlight City",
            high_light:"1 places"

        },
        image:moonlight


    },

    {
        id: 2,
    place:"New Zealand",
        price: "70,000",
        specification: {
            stay: "hotel - cape town",
            duration: "6 day 5 night",
            destination:" New Zealand City",
            high_light:"5 places"
        },
        image:new_zealand

    },

    {
        id: 3,
    place:"Vaticancity",
        price: "1,40,000",
        specification: {
            stay: "hotel - 5 start hotel",
            duration: "4 day 3 night",
            destination:" Vaticancity",
            high_light:"3 places"

        },
        image:vaticancity

    },

    {
        id: 4,
    place:"kutubminar",
        price: "43,000",
        specification: {
            stay: "hotel - The Peninsula city",
            duration: "4 day 2 night",
            destination:"Delhi ",
            high_light:"5 places"

        },
        image:kutubminar

    },

]

export default offertour;