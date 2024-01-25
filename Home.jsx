'use client'
import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai"
// import { words } from './data';
import Carousel from 'react-bootstrap/Carousel';

const heroData = [
    {
        id: 1,
        image: require("./images/island.jpg"),
        description: ' For your dream tour connect us',

    },
    {
        id: 2,
        image: require("./images/kerla.jpg"),
        description: 'For your dream tour connect us',

    },
    {
        id: 3,
        image: require("./images/waterfall.webp"),
        description: 'For your dream tour connect us',

    },
]

const words = [
    'mumbai',
    'kerla',
    'aasam',
    'manali',
    'africa',
    'dubai',
    "paris",
    'aisa',
    'ayodhya',
    'mahabaleshwar',
    'prem Mandir',
    'india Getway',
    'moonlight City',
    'new Zealand',
    'vaticancity',
    'kutubminar'
]


const Searchbar = () => {

    const [activeSearch, setActiveSearch] = useState([])
    const handleSearch = (e) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(w => w.includes(e.target.value)).slice(0, 8))
    }


    return (
        <>
            <form>
                <div className='relative'>
                    <input style={{ width: 1280, height: 40, marginTop: 3, marginLeft: 20 }} type='search' placeholder='Type Here....' onChange={(e) => handleSearch(e)} />
                    <button style={{ width: 40, height: 40, marginTop: 10 }}>
                        <AiOutlineSearch />
                    </button>
                </div>

                {
                    activeSearch.length > 0 && (
                        <div >
                            {
                                activeSearch.map(s => (
                                    <span> {s}</span>
                                ))
                            }
                        </div>
                    )
                }
            </form>


            <section id='home' className='hero-block'>
                <Carousel>
                    {
                        heroData.map(hero => {
                            return (
                                <Carousel.Item key={hero.id}>
                                    <img style={{ width: 1500, height: 500 }}
                                        src={hero.image}
                                        alt={"Slide" + hero.id}
                                    />
                                    <Carousel.Caption>
                                        <h1>Make Your Trip</h1>
                                        <h4>{hero.description}</h4>
                                        {/* <a className='btn btn-primary'>Learn More</a> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </section>



        </>
    )
}
export default Searchbar;

