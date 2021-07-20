// we want to sort the scores
// we want to create a scores object

var scores = [20, 40, 60, 80, 100]
var k = 4

const numPlayers = (rankCutOff, scoresArr) => {
    var scoreObj = {}
    var sortedScores = scoresArr.sort((a,b) => b - a)
    var sortedScoreObj = Object.keys(scoreObj).sort().reduce(
        (obj, key) => {
            obj[key] = scoreObj[key];
            return obj
        }
    )

    for (let i = 0; i < sortedScores.length; i++) {
        score = sortedScores[i]
        console.log(score)
        scoreObj[score] = scoreObj[score] ? + 1 : 1;
    }

    console.log(sortedScoreObj)
}

numPlayers(k, scores)