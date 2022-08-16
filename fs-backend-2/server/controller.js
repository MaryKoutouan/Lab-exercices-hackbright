const houses = require('./db.json');
let globalID = 4;

module.exports = {
    getHouses:(req, res) => res.status(200).send(houses),
    deleteHouse: (req, res) => {
            const id = Number(req.params.id);
            const index = houses.findIndex(elem => elem.id === id); 
            houses.splice(index, 1);
            res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;
        const NewHouse = {
            id: globalID,
            address,
            price,
            imageURL
        }
        houses.push(NewHouse);
        res.status(200).send(houses);
        globalID++;
    },
    updateHouse: (req, res) => {
        let {id} = req.params;
        id = Number(id);
        const {type} = req.body;
        const index = houses.findIndex(elem => elem.id === id);

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses);
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}
