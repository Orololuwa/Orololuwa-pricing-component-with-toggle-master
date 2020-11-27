const elements = {
    toggleController: document.querySelector('.toggle__controller'),
    toggleButton: document.querySelector('.toggle__btn'),
    priceBasic: document.querySelector('.price--basic'),
    priceProfessional: document.querySelector('.price--professional'),
    priceMaster: document.querySelector('.price--master'),
    card: document.querySelector('.card')
};

const addMonthlyClass = () => {
    elements.toggleController.classList.toggle('toggle__controller--monthly');
    elements.toggleButton.classList.toggle('toggle__btn--monthly');
};

const addMonthlyValues = () => {
    elements.priceBasic.textContent = '$19.99';
    elements.priceProfessional.textContent = '$24.99';
    elements.priceMaster.textContent = '$39.99';
};

const addAnnualValues =  () => {
    elements.priceBasic.textContent = '$199.99';
    elements.priceProfessional.textContent = '$249.99';
    elements.priceMaster.textContent = '$399.99';
}

const alterPricePlan = () => {
    if (elements.toggleButton.classList.contains('toggle__btn--monthly')){
        addMonthlyValues();
    }else {
        addAnnualValues();
    }
};

elements.toggleButton.addEventListener('click', e => {
    if (e.target.matches('.toggle__btn')){
        addMonthlyClass();
        alterPricePlan();
    }
});

document.addEventListener('keydown', e => {
    if (e.which === 39 ){
        if(!elements.toggleController.classList.contains('toggle__controller--monthly')){
            elements.toggleController.classList.add('toggle__controller--monthly');
        }
        addMonthlyValues();
    } else if (e.which === 37){
        if(elements.toggleController.classList.contains('toggle__controller--monthly')){
            elements.toggleController.classList.remove('toggle__controller--monthly');
        }
        addAnnualValues();
    }
});
