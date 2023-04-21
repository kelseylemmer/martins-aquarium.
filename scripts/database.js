
const database = {
    fish: [
        {
            id: 1,
            image: "https://adventures.everybodyshops.com/wp-content/uploads/growing-fish-largemouth-bass.jpg",
            name: "jake gyllenhaal",
            species: "large mouth bass",
            length: 100,
            location: "Los Angeles, California",
            food: "kale"
        } ,
        {
            id: 2,
            image:"https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F44f728c2-4d2a-11ec-9043-2aa4c0c21cd8.jpg?crop=2667%2C1500%2C0%2C0&resize=360",
            name: "Jason Momoa",
            species: "Beta",
            length: 9,
            location: "Honolulu, Hawaii",
            food: "Apple pie",
        },
        {
            id: 3,
            image: "https://www.fantaseaaquariums.com/wp-content/uploads/2021/07/clownfish-1-602x405.jpg",
            name: "Danny DeVito",
            species: "Clown Fish",
            length: 50,
            location: "Neptune Township, New Jersey",
            food: "egg"
        },
        {
            id: 4,
            image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/MSNBC/Components/Photo/_new/moray-eel-100415-02.jpg",
            name: "Chris Hemsworth",
            species: "eel",
            length: 12,
            location: "Melbourne, Australia",
            food: "pizza"
        },
        {
            id: 5,
            image: "https://www.gannett-cdn.com/-mm-/67c0735e39c74cdd4a918b9936d9b82d0f54d660/c=0-102-2000-1227/local/-/media/FortMyers/2014/10/08/lionfish4.jpg?width=2000&height=1125&fit=crop&format=pjpg&auto=webp",
            name: "James Earl Jones",
            species: "Lion Fish",
            length: 156,
            location: "Arkabutla, Mississippi",
            food: "avocado"
        },
        {
            id: 6,
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Female_Rainbow_Trout_in_hand.JPG",
            name: "Jeff Probst",
            species: "Rainbow Troutting",
            length: 101,
            location: "Wichita, Kansas",
            food: "rice"
        },
        {
            id: 7,
            image: "https://oceanconservancy.org/wp-content/uploads/2022/03/swordfish_shutterstock_779803462.jpg",
            name: "Ryan Gosling",
            species: "Sword Fish",
            length: 170,
            location: "London, Canada",
            food: "Arroz Con Leche"
        },  
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}