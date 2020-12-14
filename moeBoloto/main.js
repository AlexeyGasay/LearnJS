    
 var catalog = {
    a10: {
        quantity: 2,
    },
    
    
    a20: {
        quantity: 9,
    },
    
    a30: {
        quantity: 20,
    },
     
     a40: {
        quantity: 0,
    },
    
};


var specifications =  ["Супер экран. Батарея огонь", "Супер пупер экран. Батарея пушка", "Экран просто ппц какой крутой. Атомная батарея, подзаряжать будет внуки"];


var yourChoice = document.getElementById("yourChoice");


function choiceModel(model) {
    if(model == 'a10' & catalog.a10.quantity > 0) {
        yourChoice.innerHTML = specifications[0];
    }
    
    else if (model == 'a20' & catalog.a20.quantity > 0) {
        yourChoice.innerHTML = specifications[1];
    }
    
    else if (model == 'a30' & catalog.a30.quantity > 0) {
        yourChoice.innerHTML = specifications[2];
    }
    
    else {
        yourChoice.innerHTML = "Увы эта модель кончилась((((((((((((((((((((((((((((((((((((((";
    }
    
}







































