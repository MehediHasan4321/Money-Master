// Global Referance ....




// EventLestersne......


document.getElementById("calculate-btn").addEventListener("click",()=>{
    const netIncome = getValueFromInp("income-inp");
    const foodCost = getValueFromInp("food-inp");
    const rentCost = getValueFromInp("rent-inp");
    const clothCost = getValueFromInp("cloth-inp")

    const totalCost = foodCost + rentCost + clothCost
    const balance = netIncome - totalCost

    setInnerText("total-expenses",totalCost)
    setInnerText("balance",balance)
})

document.getElementById("save-btn").addEventListener("click",()=>{
    const netIncome = getValueFromInp("income-inp");
    const parcentes = getValueFromInp("save-parcentes");
    const saveAmount = netIncome * parcentes /100
    const remainder = netIncome - saveAmount;
    console.log( saveAmount)

    setInnerText("saving-amount",saveAmount);
    setInnerText("remaining-amount",remainder)

})
// Root Functions.....

function strToNum(str){
    const num = parseFloat(str);

    return num;
}

function setInnerText(id,value){
    const elementId = document.getElementById(id)
    elementId.innerText = value;
}

function getValueFromInp(id){
    const elementId = document.getElementById(id)
    const elementValue =elementId.value;
    const value = strToNum(elementValue);

    return value;
}