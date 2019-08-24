if(localStorage.getItem('color')){
    plan.classList.add("table");
}
change.addEventListener('click', () => {
       if(localStorage.getItem('color') !== "true"){
        plan.classList.add("table");
        localStorage.setItem('color', 'true');
    }
    else {
        plan.classList.remove("table");
        localStorage.clear('color');
    }
});