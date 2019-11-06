import {houses, collection} from "~/constants";

const housesCatalogue= [
    {
        name: houses.PLOT,
        buyPrice: 10,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: .5
        }
    },
    {
        name: houses.HOUSE_l1,
        buyPrice: 20,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 5
        }
    },
    {
        name: houses.HOUSE_l2,
        buyPrice: 30,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 10
        }
    },
    {
        name: houses.BOOGALOO,
        buyPrice: 50,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 20
        }
    },
    {
        name: houses.CONDOMINIUM,
        buyPrice: 100,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 40
        }
    },
    {
        name: houses.BUILDING,
        buyPrice: 150,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 60
        }
    },
    {
        name: houses.MANSION,
        buyPrice: 200,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 80
        }
    },
]

export default housesCatalogue;