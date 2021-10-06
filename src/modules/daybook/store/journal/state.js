

export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //24526476
            date: new Date().toDateString(),  // jueves, 21 Marzo
            text: 'Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip ipsum dolor sit amet',
            picture: null, //https
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'En una lugar de la mancha de cuyo nombre no quiero acordarme. Erase una vez one mariposita fly fly in to the garden for the bosque. And the repent, Flasss ostia contra de flowers!',
            picture: null, //https
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'One day, one mariposita fly fly in to the garden for the bosque. And the repent, Flasss ostia contra de flowers!',
            picture: null, //https
        },
    ],
})