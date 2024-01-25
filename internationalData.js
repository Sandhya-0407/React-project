
import dubai from './international_images/dubaimage().jpg'
import africa from './international_images/africa.jpg'
import asia from './international_images/asia.jpg'
import paris from './international_images/paris.jpg'


const internationaltour = [
    {
        id: 1,
    place:"Dubai",
        price: "50,000",
        specification: {
            stay: " Hotel - Park Hyatt Dubai",
            duration: "3 day 2 night",
            destination:"Desert safari,Dhow cruise,Dhow cruise marina,Abu dhabi city,Miracle garden ",
            high_light:"8 places"
        },
        image:dubai


    },

    {
        id: 2,
    place:"Africa",
        price: "70,000",
        specification: {
            stay: "hotel - taj cape town",
            duration: "6 day 5 night",
            destination:"cape town ,mara,masai mara,nairobi, lake nakuru",
            high_light:"12 places  ", 

        },
        image:africa

    },

    {
        id: 3,
    place:"Asia",
        price: "1,40,000",
        specification: {
            stay: "hotel - taj hotel",
            duration: "15 day 14 night",
            destination:" India,Nepal,Bhutan, Indonesia",
            high_light:"10 places",
            area:" 4 country"

        },
        image:asia

    },

    {
        id: 4,
    place:"Paris",
        price: "1,43,000",
        specification: {
            stay: "hotel - The Peninsula Paris",
            duration: "4 day 2 night",
            destination:" Eiffel tower,Louvre museum,Disneyland,Rodin Museum",
            high_light:"7 places"


        },
        image:paris

    },








]

export default internationaltour;