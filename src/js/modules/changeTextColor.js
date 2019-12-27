
const menu = document.querySelector('nav');
const container = document.querySelector('.container');


let intersect = (targetDiv) => {

    let pagePos = 0;
    let thresholds = []; // on stocke toutes les positions verticales des div.inner dans un tableau de seuils
    targetDiv.forEach((item, galofaro) => {
        let eltHeight = item.clientHeight;
        console.log(eltHeight);
        thresholds.push(item.offsetTop+eltHeight);
        item.classList.add(`item_${galofaro}_${item.offsetTop}`);
    });
    console.log(thresholds);


    window.addEventListener('scroll', () => {

        pagePos = window.pageYOffset;
        //console.log(pagePos);
  
        if (pagePos <= thresholds[0] 
            || pagePos > thresholds[1] && pagePos <= thresholds[2] 
            || pagePos > thresholds[3] && pagePos <= thresholds[4]
            || pagePos > thresholds[5] && pagePos <= thresholds[6] 
            || pagePos > thresholds[7] && pagePos <= thresholds[8]) {
            menu.classList.add('black');
            menu.classList.remove('white');
        }
        else if (pagePos > thresholds[0] && pagePos <= thresholds[1] 
            || pagePos > thresholds[2] && pagePos <= thresholds[3] 
            || pagePos > thresholds[4] && pagePos <= thresholds[5] 
            || pagePos > thresholds[6] && pagePos <= thresholds[7]
            || pagePos > thresholds[8] && pagePos <= thresholds[9]
            )
            
            {
            menu.classList.remove('black');
            menu.classList.add('white');
        }
    })
}
export { intersect };