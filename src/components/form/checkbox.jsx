const Checkbox = ({isChecked, checkboxHandler, checkError}) => {
    let errorClass = '';

    if (checkError) {
        errorClass = 'check__box--error';
    };

    return (
        <label htmlFor="agreement" className="check">
            <input type="checkbox" id="agreement" className="check__input" name="agreement" checked={isChecked} onChange={checkboxHandler}/>
            <div className={`check__box ${errorClass}`}></div>
            <p className="check__text">Я соглашаюсь с <a href="#" target="_blanck" className="check__link">Правилами сервиса</a> и  условиями <a href="#" target="_blanck" className="check__link">Публичной оферты</a>.</p>
        </label>
    );
};

export default Checkbox;