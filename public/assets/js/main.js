// console.log('hello')

// let card1 = {
//     "c1Text": "Unresolved",
//     "c1Value": 60,
// }

// FETCH functionality
// fetch("../assets/data/content.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('error: ', error))

// async

// first card set content
async function firstcard(){
    try {
        // text items
        const c1T1 = document.getElementById('fc1');
        const c1T2 = document.getElementById('fc2');
        const c1T3 = document.getElementById('fc3');
        const c1T4 = document.getElementById('fc4');

        const temp = await fetch("../assets/data/content.json")
        const data = await temp.json();
        // console.log('data: ', data.card1Text);

        data.card1Text.forEach(textItem =>{
            // console.log(textItem);
            let firstcardText1 = document.createElement('p');
            firstcardText1.innerHTML = `${textItem.c1T1}`;
            c1T1.appendChild(firstcardText1);

            let firstcardText2 = document.createElement('p');
            firstcardText2.innerHTML = `${textItem.c1T2}`;
            c1T2.appendChild(firstcardText2);

            let firstcardText3 = document.createElement('p');
            firstcardText3.innerHTML = `${textItem.c1T3}`;
            c1T3.appendChild(firstcardText3);

            let firstcardText4 = document.createElement('p');
            firstcardText4.innerHTML = `${textItem.c1T4}`;
            c1T4.appendChild(firstcardText4);
        })

        // number values
        data.card1Value.forEach(textItem =>{
            // console.log(textItem);
            let firstcardValue1 = document.createElement('h2');
            firstcardValue1.innerHTML = `${textItem.c1V1}`;
            c1T1.appendChild(firstcardValue1);

            let firstcardValue2 = document.createElement('h2');
            firstcardValue2.innerHTML = `${textItem.c1V2}`;
            c1T2.appendChild(firstcardValue2);

            let firstcardValue3 = document.createElement('h2');
            firstcardValue3.innerHTML = `${textItem.c1V3}`;
            c1T3.appendChild(firstcardValue3);

            let firstcardValue4 = document.createElement('h2');
            firstcardValue4.innerHTML = `${textItem.c1V4}`;
            c1T4.appendChild(firstcardValue4);
        })

        
    } catch (error) {
        console.log('error: ', error)
    }
}

firstcard();

// second card set content
async function secondcard(){
    try {
        // text items
        const c2T1 = document.getElementById('sc1');
        const c2T2 = document.getElementById('sc2');
        const c2T3 = document.getElementById('sc3');
        const c2T4 = document.getElementById('sc4');
        const c2T5 = document.getElementById('sc5');

        const temp = await fetch("../assets/data/content.json")
        const data = await temp.json();
        // console.log('data: ', data.card1Text);

        data.card2Text.forEach(textItem =>{
            // console.log(textItem);
            let secondcardText1 = document.createElement('p');
            secondcardText1.innerHTML = `${textItem.c2T1}`;
            c2T1.appendChild(secondcardText1);

            let secondcardText2 = document.createElement('p');
            secondcardText2.innerHTML = `${textItem.c2T2}`;
            c2T2.appendChild(secondcardText2);

            let secondcardText3 = document.createElement('p');
            secondcardText3.innerHTML = `${textItem.c2T3}`;
            c2T3.appendChild(secondcardText3);

            let secondcardText4 = document.createElement('p');
            secondcardText4.innerHTML = `${textItem.c2T4}`;
            c2T4.appendChild(secondcardText4);

            let secondcardText5 = document.createElement('p');
            secondcardText5.innerHTML = `${textItem.c2T5}`;
            c2T5.appendChild(secondcardText5);

        })

        // number values
        data.card2Value.forEach(textItem =>{
            // console.log(textItem);
            let secondcardValue1 = document.createElement('h4');
            secondcardValue1.innerHTML = `${textItem.c2V1}`;
            c2T1.appendChild(secondcardValue1);

            let secondcardValue2 = document.createElement('h4');
            secondcardValue2.innerHTML = `${textItem.c2V2}`;
            c2T2.appendChild(secondcardValue2);

            let secondcardValue3 = document.createElement('h4');
            secondcardValue3.innerHTML = `${textItem.c2V3}`;
            c2T3.appendChild(secondcardValue3);

            let secondcardValue4 = document.createElement('h4');
            secondcardValue4.innerHTML = `${textItem.c2V4}`;
            c2T4.appendChild(secondcardValue4);
            
            let secondcardValue5 = document.createElement('h4');
            secondcardValue5.innerHTML = `${textItem.c2V5}`;
            c2T5.appendChild(secondcardValue5);
        })

        
    } catch (error) {
        console.log('error: ', error)
    }
}

secondcard();