// Category Viewer
{
    var categories = [
        {
            name: "Toys",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
            srcset: "",
        },
        {
            name: "Mobiles",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
            srcset: "",
        },
        {
            name: "Fashion",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
            srcset: "",
        },
        {
            name: "Electronics",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
            srcset: "",
        },
        {
            name: "Appliances",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
            srcset: "",
        },
        {
            name: "Travel",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
            srcset: "",
        },
        {
            name: "Top Offers",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
            srcset: "",
        },
        {
            name: "Beauty, Toys & More",
            url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
            srcset: "",
        },
        {
            name: "Two Wheelers",
            url: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
            srcset: "",
        },
    ]

    var categoriesContent = "";

    categories.forEach(ele => {
        categoriesContent += `
            <div class="category-item">
                <div class="d-flex justify-content-center">
                    <img class="img-fluid"
                    src="${ele.url}" alt=""
                    width="64" />
                </div>
                <p class="text-center">${ele.name}</p>
            </div>
        `;  
    });
    document.getElementById("categories").innerHTML = categoriesContent;
}

// Products Viewer
{
    var products = [
        {
            name: "Top Mirrorless Cameras",
            url: "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 768w",
            starting_price: "9999",
            brand: "Canon, Sony, Fujifilm..."
        },
        {
            name: "Printers",
            url: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 768w",
            starting_price: "3999",
            brand: "HP"
        },
        {
            name: "Best of Shavers",
            url: "https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kactpjk0/shaver/m/6/z/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70 768w",
            starting_price: "1649",
            brand: "Philips & Havells"
        }, {
            name: "Monitor",
            url: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70 768w",
            starting_price: "8279",
            brand: "DELL"
        },
        {
            name: "Monitors",
            url: "https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70 768w",
            starting_price: "9999",
            brand: "SAMSUNG"
        },
        {
            name: "Premium PowerBanks",
            url: "https://rukminim1.flixcart.com/image/200/200/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kzhbfrk0/power-bank/h/2/4/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 768w",
            starting_price: "699",
            brand: "Mi, realme & more"
        }, 
        {
            name: "Monitors",
            url: "https://rukminim1.flixcart.com/image/200/200/kk76wsw0/monitor/u/p/k/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/kk76wsw0/monitor/u/p/k/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/kk76wsw0/monitor/u/p/k/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70 768w",
            starting_price: "6599",
            brand: "acer"
        },
        {
            name: "Monitors",
            url: "https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
            srcset: "https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 1024w, https://rukminim1.flixcart.com/image/150/150/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 768w",
            starting_price: "7949",
            brand: "LENOVO"
        }
    ]

    var electronics = "";

    products.forEach(ele => {
        electronics += `
            <div class="swiper-slide product-card">
                <div class="product-image">
                    <img class="img-fluid" src="${ele.url}" srcset="${ele.srcset}" alt="" width="auto" height="200px" sizes="(max-width: 768px) 720px, 1024px">
                </div>
                <p class="product-title mt-md-4 mt-sm-2 mb-0">${ele.name}</p>
                <p class="product-price mt-2 mb-0">From &#x20B9;$${ele.starting_price}</p>
                <p class="product-brand mt-2 mb-0">${ele.brand}</p>
            </div>
    `;
    });

    document.getElementById("electronic-products").innerHTML += electronics;
    document.getElementById("summer-products").innerHTML += electronics;
    document.getElementById("sport-products").innerHTML += electronics;
}

// Swiper script
{
    let swiper = new Swiper('.mySwiper', {
        // loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}