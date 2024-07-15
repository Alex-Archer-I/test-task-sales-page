import {useState, useEffect, useRef} from 'react';

import Radio from './radio';
import Checkbox from './checkbox';

const Form = ({sales, prices, isCounter}) => {
    const [isSales, setIsSales] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [salesValue, setSalesValue] = useState('week-sale');
    const [pricesValue, setPricesValue] = useState('week-price');
    const [checkError, setCheckError] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {
        if (!isCounter) {
            setTimeout(() => {
                setIsSales(false);
            }, 2000);
        };
    }, [isCounter]);

    const checkboxHandler = (event) => {
        setCheckError(false);
        setIsChecked(event.target.checked);
    };

    const salesRadioHandler = (event) => {
        setSalesValue(event.target.value);
    };

    const pricesRadioHandler = (event) => {
        setPricesValue(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!isChecked) {
            setCheckError(true);
            return;
        };

        const data = new FormData(formRef.current);

        console.log(data.get('sale'));
        console.log(data.get('agreement'));
    };

    let radioButtons = null;

    if (isSales) {
        radioButtons = sales.map((item, index) => {
            let isLong = false;
    
            if (index === 3) {isLong = true};
    
            return <Radio 
                item={item}
                oldPrice={prices[index].price}
                isLong={isLong}
                isCounter={isCounter}
                salesValue={salesValue}
                pricesValue={null}
                checkHandler={salesRadioHandler}
                key={item.id}/>
        });
    } else {
        radioButtons = prices.map((item, index) => {
            let isLong = false;
    
            if (index === 3) {isLong = true};
    
            return <Radio 
                item={item}
                oldPrice={null}
                isLong={isLong}
                salesValue={null}
                pricesValue={pricesValue}
                checkHandler={pricesRadioHandler}
                key={item.id}/>
        });
    };

    return (
        <form action="" className="form form--width" ref={formRef} onSubmit={submitHandler}>
            <fieldset className="radioset">
                {radioButtons}
            </fieldset>
            <p className="form__text">Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц</p>
            <Checkbox isChecked={isChecked} checkboxHandler={checkboxHandler} checkError={checkError}/>
            <button className="form__button">Купить</button>
            <p className="form__text form__text--fine">Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте.</p>
        </form>
    );
};

export default Form;