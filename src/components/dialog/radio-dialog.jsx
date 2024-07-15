const values = {
    '1 неделя': 'week',
    '1 месяц': 'month',
    '3 месяца': 'three-month',
    'навсегда': 'forever',
}

const RadioDialog = ({item, oldPrice, saleValue, radioHandler}) => {
    const value = `${values[item.name]}-dialog`;
    const isChecked = (value === saleValue);

    return (
        <div className="radioset__field">
            <input type="radio" name="sale-dialog" className="radioset__input" value={value} checked={isChecked} onChange={radioHandler} id={`${item.name}-dialog`}/>
            <label htmlFor={`${item.name}-dialog`} className="radioset__label radioset__label--dialog">
                <div className="radioset__flex radioset__flex--long">
                    <h3 className="radioset__title radioset__title--dialog">{item.name}</h3>
                    <div className="radioset__round"></div>
                </div>
                <p className="radioset__price--old radioset__price--old-dialog">{`${oldPrice}₽`}</p>
                <div className="radioset__line"></div>
                <div className="radioset__flex radioset__flex--price">
                    <p className="radioset__price--new">{item.price}₽</p>
                    <p className="radioset__sale radioset__sale--dialog">{item.sale}</p>
                </div>
            </label>
        </div>
    );
};

export default RadioDialog;