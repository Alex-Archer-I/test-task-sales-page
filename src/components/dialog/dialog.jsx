import {useState, useRef} from 'react';

import RadioDialog from './radio-dialog';

const Dialog = ({sales, prices, dialogCloseHandler}) => {
    const [saleValue, setSaleValue] = useState('week-dialog');

    const formRef = useRef(null);

    const radioHandler = (event) => {
        setSaleValue(event.target.value);
    };

    const content = sales.map((item, index) => {
        return <RadioDialog 
            item={item}
            oldPrice={prices[index].price}
            saleValue={saleValue}
            radioHandler={radioHandler}
            key={index}/>
    });

    const submitHandler= (event) => {
        event.preventDefault();

        const data = new FormData(formRef);

        console.log(data.get('sale-dialog'));
        dialogCloseHandler();
    };

    return (
        <div className="dialog">
            <p className="dialog__sticker" id="dialog-sticker">горящее предложение</p>
            <button className="dialog__close" autoFocus onClick={dialogCloseHandler} aria-label="Закрыть окно"></button>
            <h2 className="dialog__title">Не упусти свой <span className="dialog__text--azure">последний шанс</span></h2>
            <p className="dialog__text">Мы знаем, как трудно начать.. <span className="dialog__text--bold">Поэтому!</span></p>
            <p className="dialog__text dialog__text--bold dialog__text--bordered">Дарим скидку для <span className="dialog__text--azure">лёгкого старта</span> 🏃‍♂️</p>
            <p className="dialog__text dialog__text--bold">Посмотри, что мы для тебя приготовили 🔥</p>
            <form className="form form--dialog" ref={formRef} onSubmit={submitHandler}>
                <fieldset className="radioset radioset--dialog" aria-labeledby="dialog-sticker">
                    {content}
                </fieldset>
                <button className="form__button form__button--dialog">Начать тренироваться</button>
            </form>
        </div>
    );
};

export default Dialog;