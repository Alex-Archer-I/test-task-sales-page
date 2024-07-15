const values = {
    '1 неделя': 'week',
    '1 месяц': 'month',
    '3 месяца': 'three-month',
    'навсегда': 'forever',
}

const Radio = ({item, oldPrice, isLong, isCounter, salesValue, pricesValue, checkHandler}) => {
    let gridClass = '';
    let animationClass = '';

    let value = '';
    let isChecked = false;

    if (isLong) {gridClass = `radioset__field--long`};

    if (oldPrice && !isCounter) {animationClass = 'animation--fade-out'};

    if (salesValue) {
        value = `${values[item.name]}-sale`;
        isChecked = (salesValue === value);
    };
    
    if (pricesValue) {
        value = `${values[item.name]}-price`;
        isChecked = (pricesValue === value);
    };

    return (
        <div className={`radioset__field ${gridClass}`}>
            <input type="radio" name="sale" id={item.id} className="radioset__input" value={value} checked={isChecked} onChange={checkHandler}/>
            <label htmlFor={item.id} className="radioset__label">
                {oldPrice ? <p className={`radioset__sale ${animationClass}`}>{item.sale}</p> : null}
                <h2 className="radioset__title">{item.name}</h2>
                <p className={`radioset__price ${animationClass}`}><span className="radioset__price--new">{item.price}₽</span>{oldPrice ? <span className="radioset__price--old radioset__price--left">{oldPrice}₽</span>: null}</p>
                <p className="radioset__text">{item.text}</p>
            </label>
        </div>
    );
};

export default Radio;