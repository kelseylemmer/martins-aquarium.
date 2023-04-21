import { mostHolyFish, soldierFish, nonHolyFish} from './FishFilter.js'

export const FishList = () => {

const holyFish = mostHolyFish()
const soldier = soldierFish()
const normalFish = nonHolyFish()

let htmlString = '<article class="fishList">'

    for (const fish of holyFish) {

        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }

    for (const fish of soldier) {

    htmlString += `<section class="fish card">
        <div><img  class="fish__image image--card" src="${fish.image}" /></div>
        <div class="fish__name">${fish.name}</div>
        <div class="fish__species">${fish.species}</div>
        <div class="fish__length">${fish.length}</div>
        <div class="fish__location">${fish.location}</div>
        <div class="fish__diet">${fish.food}</div>
    </section>
    `
    }

    for (const fish of normalFish) {

        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
    `
    }
    
    htmlString += `</article>`

    return htmlString
}