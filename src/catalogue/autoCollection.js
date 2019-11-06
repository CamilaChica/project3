import {autoCollection, collection} from "~/constants";

const autoCatalogue= [
    {
        name: autoCollection.NEWSPAPER,
        buyPrice: 15,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: .5
        }
    },
    {
        name: autoCollection.INTERN,
        buyPrice: 25,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 27
        }
    },
    {
        name: autoCollection.JUNIOR_AGENT,
        buyPrice: 40,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 50
        }
    },
    {
        name: autoCollection.AGENT,
        buyPrice: 70,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 90
        }
    },
    {
        name: autoCollection.AGENCY,
        buyPrice: 100,
        multiplier: 1.05,
        moneyReturn: {
            name: collection.FINANCES,
            rate: 150
        }
    },
]

export default autoCatalogue;