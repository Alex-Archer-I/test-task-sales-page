import {useState, useEffect, useRef} from 'react';
 
import Form from './components/form/form';
import Counter from './components/counter/counter';
import Dialog from './components/dialog/dialog';
import LoadingMesaage from './components/form-messages/loading-message';
import ErrorMessage from './components/form-messages/error-message';

import toggleDialog from './util/toggle-dialog';
import getPriceObj from './util/get-price-obj';

import pricePlaceholder from './assets/data/price-placeholder';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [priceData, setPriceData] = useState(pricePlaceholder);
    const [isCounter, setIsCounter] = useState(true);
    const [dialogOpenClass, setdialogOpenClass] = useState('');

    const dialogRef = useRef(null);

    useEffect(() => {
        fetch('https://t-pay.iqfit.app/subscribe/list-test')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Сервер не отвечает.`)
                };

                return res.json();
            })
            .then(data => {
                setPriceData(getPriceObj(data));
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            });
    }, []);

    useEffect(() => {

        if (!isCounter) {
            toggleDialog(dialogRef);

            setTimeout(() => {
                setdialogOpenClass('main__dialog--open');
            }, 3000);
        };
    }, [isCounter]);

    const counterHandler = () => {
        setIsCounter(false);
    };

    const dialogCloseHandler = () => {
        toggleDialog(dialogRef);
    };

    let content = <LoadingMesaage/>;

    if (!isLoading && !isError) {
        content = <Form sales={priceData.sales} prices={priceData.prices} isCounter={isCounter}/>;
    };

    if (!isLoading && isError) {
        content = <ErrorMessage/>
    };

    return (
        <main className="main">
            <Counter counterHandler={counterHandler}/>
            <h1 className="main__title" id="main-title">Выберите подходящий тарифный план</h1>
            <div className="main__content">
                <img src="./images/illustration.png" alt="" width="434" height="715" className="main__img"/>
                {content}
            </div>
            <dialog ref={dialogRef} className={`main__dialog ${dialogOpenClass}`}><Dialog sales={priceData.salesDialog} prices={priceData.prices} isCounter={isCounter} dialogCloseHandler={dialogCloseHandler}/></dialog>
        </main>
    );
};

export default App;