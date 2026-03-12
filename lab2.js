//theme idea: reality TV shows
//characteristics: name, location, startingdate, streamingplatform, rating

const { createApp } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();

const App = {
    setup() {
    const collection = [
        {
            name: "Couple to Throuple",
            startDate: "2024",
            location: "Filmed in Panama",
            streamingPlatform: "Stream now on Peacock!",
            rating: "IMDb rating: 5.7/10",
            image: "images/Couple to Throuple.jpg"
        },
        {
            name: "Queer Eye",
            startDate: "2018",
            location: "Filmed in Washington",
            streamingPlatform: "Netflix", 
            rating: "IMDb rating: 8.5/10",
            image: "images/queer eye.jpeg"
        },
        {
            name: "The Ultimatum: Queer Love",
            startDate: "2023",
            location: "San Diego, California",
            streamingPlatform: "Netflix",
            rating: "IMDb rating: 6.6/10",
            image: "images/the queer ultimatum.jpg"
        },
        {
            name: "Love on the Spectrum",
            startDate: "2022",
            location: "Sydney, Australia",
            streamingPlatform: "Netflix",
            rating: "IMDb rating: 8.4/10",
            image: "images/love on the spectrum.jpg"
        }
    ]
    return {
        collection
        }
    }
    
}


createApp(App).use(vuetify).mount('#app');
