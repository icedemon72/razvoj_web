const copyTheNumber = (num) => navigator.clipboard.writeText(num);

const changePick = (str) => {
    let img = document.getElementById('pick');
    let url = img.src.split('/images/')[0];
    img.src = (str === 'over') ? `${url}/images/guitar-pick_red.png` : `${url}/images/guitar-pick.png`;
    console.log(url);
};

const changeTheme = () => {
    let imgSrc = document.getElementById('themeImg').src;
    if (imgSrc.endsWith('night.png')) {
        let url = imgSrc.split('/images/night.png')[0];
        document.getElementById('themeImg').src = `${url}/images/day.png`;
    } else {
        let url = imgSrc.split('/images/day.png')[0];
        document.getElementById('themeImg').src = `${url}/images/night.png`;
    }
    
};

const changeDisplay = (elem) => {

}

const storeDropDown = (elem) => {
    let sign = elem.children[0],
        div = elem.nextElementSibling;
    if(sign.innerHTML === '＋') {
        sign.innerHTML = '－';
        div.style.display = 'block';
    } else {
        sign.innerHTML = '＋';
        div.style.display = 'none';
    }
}

let el = document.getElementById('scrollToTop');

window.onscroll = () => {
    el.style.display = (document.body.scrollTop > 244 || document.documentElement.scrollTop > 244) ?  'block' : 'none';
};

