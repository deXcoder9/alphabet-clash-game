// Play Button first Interface >>
function playTheGame(){
    hideTheSection('firstInterface')
    showTheSection('secondInterface')
    continueGameplay();
}
// at second phase continueing the gameplay
function continueGameplay(){
    displayTheRandomAlphabet();
    // removeBg('displayingAlphabet')
    
}
// hide The section FUnction
function hideTheSection(sectionId){
    const secId = document.getElementById(sectionId); 
    secId.classList.add('hidden')
}
// show The section FUnction
function showTheSection(sectionId){
    const secId = document.getElementById(sectionId);
    secId.classList.remove('hidden')
}
// random Alphabet GEnerator
function randomAlphabetGenerator(){
    const alphabet =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const index = Math.round(Math.random()*25)
    const randomlySetCurrentAlphabet = alphabet[index]
    return randomlySetCurrentAlphabet;
}
// disply the random Alphabet
function displayTheRandomAlphabet(){
    const displayID = document.getElementById('displayingAlphabet')
//    let displayText = displayID.innerText = randomAlphabetGenerator().toLocaleLowerCase();
    displayID.innerText = randomAlphabetGenerator();
    // console.log(displayID)
    showTheSameALphabetAsRandom('displayingAlphabet');
}
// console.log(displayTheRandomAlphabet())

// set The backGround color same as Displaying the current Element
function showTheSameALphabetAsRandom(eId){
    const alphabetIdinKey = document.getElementById(eId)
    let i = alphabetIdinKey.innerText.toLowerCase()
    

    const keyword = document.getElementById(i)
    keyword.classList.add('bg-[#CC8606]')
    
}
// third interface Score setting
function score(){
    const score = document.getElementById('score')
        let valuestr = score.innerHTML
        let value = parseInt(valuestr)
        // console.log(typeof value)
        let newScore = value +1
        score.innerHTML = newScore;
        return newScore
}
// what will happend/not if i click the same as display show    
function KeyPressByKeyboard(event){
    const userPressed = event.key;
    if(userPressed === 'Escape'){
        hideTheSection('secondInterface');
            showTheSection('thirdInterface');
    }
    console.log('user preseed' , userPressed)
    const expectPresskey = document.getElementById('displayingAlphabet')
    const exkey = expectPresskey.innerHTML.toLowerCase()
    console.log(exkey)
    if(userPressed === exkey){
        // console.log('You won')
        removeBg(exkey)
        score()
        continueGameplay();
    }
    else{
        // console.log('u losae')
        const life = document.getElementById('life')
        let valuestr = life.innerHTML
        let value = parseInt(valuestr)
        let newLife =value - 1
        life.innerText = newLife
        if(newLife === 0 ){
            hideTheSection('secondInterface');
            showTheSection('thirdInterface');
            const finalScore = document.getElementById('finalScore')
            let finalscorestr = finalScore.innerHTML
        let value = parseInt(finalScore)
        finalScore.innerText = score()
        }
    }

}
// remove the background of the key
function removeBg(elementId){
    const a= document.getElementById(elementId);
    a.classList.remove('bg-[#CC8606]');
    console.log(a)

}
document.addEventListener('keyup',KeyPressByKeyboard )

function PlagAgain(){
    const life = document.getElementById('life')
        let valuestr = life.innerHTML
        let value = parseInt(valuestr)
        let newLife = 3
        life.innerText = newLife
    let newlife = life.innerHTML
    const score = document.getElementById('score')
    let valustr = score.innerHTML
        let valu = parseInt(valustr)
        // console.log(typeof value)
        let newScore = 0
        score.innerHTML = newScore;

    hideTheSection('thirdInterface');
            showTheSection('secondInterface');
}

function escape(even){
    
}