export const SelectTravelerOptions = [
    {
        id: 0,
        title: "Just me",
        desc: 'A sole travels in exploration',
        icon: '🕴️',
        people: '1 person'
    },
    {
        id: 1,
        title: "A couple",
        desc: 'Two travels in tandom',
        icon: '🥂',
        people: '2 people'
    },
    {
        id: 2,
        title: "Family",
        desc: 'A group of fun loving people',
        icon: '🏡',
        people: '3 to 5 people'
    },
    {
        id: 3,
        title: "Friends",
        desc: 'A bunch of thrill seekers',
        icon: '🍾',
        people: '5 to 10 people'
    },
]

export const BudgetOptions = [
    {
        id: 0,
        title: 'Economical',
        icon: '💸',
        desc: 'Affordable and budget-friendly.',
    },
    {
        id: 1,
        title: 'Moderate',
        icon: '💰',
        desc: 'Keep cost on the average side.',
    },
    {
        id: 2,
        title: 'Luxury',
        icon: '💎',
        desc: 'Don’t worry about cost.',
    },
];


export const Prompt = "Generate Travel Plan for Location: {location}, for {totalDays} day and {totalNight} night for {TravelerOption} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotel options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, ratings, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days and {totalNight} night with each day plan with best time to visit in JSON";