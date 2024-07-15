const info = [
    {
        text: 'Чтобы просто начать 👍🏻',
        sale: '-30%',
    },
    {
        text: 'Привести тело впорядок 💪🏻',
        sale: '-40%',
    },
    {
        text: 'Изменить образ жизни 🔥',
        sale: '-50%',
    },
    {
        text: 'Всегда быть в форме и поддерживать своё здоровье ⭐️',
        sale: '-70%',
    },
];

const infoDialog = ['-40%', '-50%', '-60%'];

const getPriceObj = (prices) => {
    const priceObj = {
        sales: [],
        salesDialog: [],
        prices: [],
    };

    prices.forEach(price => {
        const newPrice = {
            name: price.name,
            price: price.price,
            id: price.id,
        };
        
        if (price.isPopular) {
            newPrice['text'] = info[priceObj.sales.length].text;
            newPrice['sale'] = info[priceObj.sales.length].sale;

            priceObj.sales.push(newPrice);

        } else if (price.isDiscount) {
            newPrice['sale'] = infoDialog[priceObj.salesDialog.length];

            priceObj.salesDialog.push(newPrice);
        } else {
            newPrice['text'] = info[priceObj.prices.length].text;
            newPrice['sale'] = info[priceObj.prices.length].sale;

            priceObj.prices.push(newPrice);
        };
    });

    return priceObj;
};

export default getPriceObj;