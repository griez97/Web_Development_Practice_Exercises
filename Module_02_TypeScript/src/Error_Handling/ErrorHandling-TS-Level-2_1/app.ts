function generateLottoNumber(): number | undefined {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    try {
        if (randomNumber > 49) {
            throw new Error("Number is bigger than 49");
        }
        return randomNumber;
    } catch (error) {
        console.error(error);
    }
}

generateLottoNumber();

const lottoResult: number[] = [];

/* for (let i = 0; i < 7; i++) {
    const lottoNumber = generateLottoNumber;
    if (lottoNumber && !lottoResult.includes(lottoNumber)) {
        lottoResult.push(lottoNumber);
    }
} */

while (lottoResult.length < 7) {
    const lottoNumber = generateLottoNumber();
    if (lottoNumber && !lottoResult.includes(lottoNumber)) {
        lottoResult.push(lottoNumber);
    }
}

console.log(lottoResult);
