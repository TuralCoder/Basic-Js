//local ve session storage
// localStorage.setItem('ad','emre');
// localStorage.setItem('yas', '32');

// // sessionStorage.setItem('il', 'Ankara');

// console.log(localStorage.getItem('yas'));

// localStorage.clear();

const ulListesi = document.querySelector('.liste');
const isimDizisi = JSON.parse(localStorage.getItem('isimListesi'));

if (isimDizisi != null) {
    isimDizisi.forEach(function (isim) {
        const yeniLi = document.createElement('li');
        yeniLi.textContent = isim;
        ulListesi.appendChild(yeniLi);
    }); 
}


document.querySelector('#form').addEventListener('submit', function (e) {
    const yeniIsim = document.querySelector('.isim').value;
    let isimDizisi;

    if (localStorage.getItem('isimListesi') === null) {
        isimDizisi = [];
    } else {
        isimDizisi = JSON.parse(localStorage.getItem('isimListesi'))
    }

    isimDizisi.push(yeniIsim);

    localStorage.setItem('isimListesi', JSON.stringify(isimDizisi));
    const yeniLi = document.createElement('li');
    yeniLi.textContent = yeniIsim;
    ulListesi.appendChild(yeniLi);


    e.preventDefault();
});
