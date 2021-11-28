import { partOne, partTwo, partThree, partFour } from './phrases';

function randomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}

function randomPhrase() {
    return `${partOne[randomIndex(partOne)]}${partTwo[randomIndex(partTwo)]}${partThree[randomIndex(partThree)]}${partFour[randomIndex(partFour)]}`
}

export { randomPhrase }