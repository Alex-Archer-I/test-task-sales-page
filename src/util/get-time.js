const getTime = (num) => {
    let seconds = (num % 60).toString();
    let minutes = Math.trunc(num / 60).toString();

    if (minutes.length < 2) {
        minutes = `0${minutes}`;
    };

    if (seconds.length < 2) {
        seconds = `0${seconds}`;
    };

    return {
        minutes: minutes,
        seconds: seconds,
    };
};

export default getTime;