let carModels = document.querySelectorAll('.models');


let tooltips = Array.from(document.querySelectorAll('.sidebar .tooltip'));
let msgTimeout = null;


let shop = document.getElementById('shop');

let basket = JSON.parse(localStorage.getItem("data")) || [];
// localStorage.setItem("shopItems", JSON.stringify(shopItemsData));
// let generateShopItemsData = JSON.parse(localStorage.getItem("shopItems")) || [];


function generateShop(shopItemsData) {

    localStorage.clear();
    localStorage.setItem("shopItems", JSON.stringify(shopItemsData));
    let generateShopItemsData = JSON.parse(localStorage.getItem("shopItems")) || [];
    basket =[];

    // console.log(generateShopItemsData);

    calculation();

     return (shop.innerHTML = generateShopItemsData.map((x)=>{
        let{id, img, partNumber, partsPrice, laborPrice, name, Retail} = x;
        let search = basket.find((x)=>x.id===id) || [];
        return (`
            <div id="product-id-${id}" class="item">
                <img width="180" height="200" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${partNumber}</p>
                    <div class="price-quantity">
                        <h2>Ghc ${Retail}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                            <div id="${id}" class="quantity">${search.item===undefined? 0: search.item}</div>
                            <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
       `);
        }).join(""));

};

function generateLocalStorageShop (){

    let generateShopItemsData = JSON.parse(localStorage.getItem("shopItems")) || [];
          
    return (shop.innerHTML = generateShopItemsData.map((x)=>{
        let{id, img, partNumber, partsPrice, laborPrice, name, Retail} = x;
        let search = basket.find((x)=>x.id===id) || [];
        return (`
            <div id="product-id-${id}" class="item">
                <img width="180" height="200" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${partNumber}</p>
                    <div class="price-quantity">
                        <h2>Ghc ${Retail}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                            <div id="${id}" class="quantity">${search.item===undefined? 0: search.item}</div>
                            <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }).join(""));

}

generateLocalStorageShop();


/**
 * ! Javascript for Buttons is here 
 **/ 

let increment =(selectedItem)=>{
    
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    }else{
        search.item += 1;
    };
 
    // console.log(basket);
    update(selectedItem.id);

    localStorage.setItem("data", JSON.stringify(basket));
};


let decrement =(selectedItem)=>{

    let search = basket.find((x) => x.id === selectedItem.id);
    if(search === undefined){
        return;
    }else if(search.item === 0){
        return;
    }else{
        search.item -= 1;
    };

    update(selectedItem.id);

    basket=basket.filter((x)=>x.item !== 0);

    // console.log(basket); 
    localStorage.setItem("data", JSON.stringify(basket));
};

let update =(id)=>{
    
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    
    calculation();
};

let calculation=()=>{

    let cartIcon=document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

};

calculation()

/**
 * !JAVASCRIPT FOR THE SIDEBAR
 **/

let showMenu = document.querySelector('.fa-bars');
let hideMenu = document.querySelector('#hide-menu');
// console.log(modelMenu);
showMenu.addEventListener('click', function(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('activate');
});

hideMenu.addEventListener('click', function(){
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('activate');  
});


carModels.forEach((model)=>{
    model.addEventListener('click', function(){

        let modelShow = model.querySelector('.model-details');
        let caretIcon = model.querySelector('a i');

        let modelDetailsLink = model.querySelectorAll(".model-details li");
        modelDetailsLink.forEach((link)=>{
            link.addEventListener('click', function(e){
                e.stopPropagation();
            })
        })

        if(model.classList.contains("active")){

            modelShow.classList.toggle('show');
            caretIcon.classList.toggle('rotate');

        }else{

            let activeModel = document.querySelector('.active');
            let activeModelCaret = document.querySelector('.active .fa-caret-down');

            activeModelCaret.classList.remove("rotate");
            activeModel.className = activeModel.className.replace("active", "");
    
            model.className+="active";
    
    
            let modelDetails = document.querySelectorAll(".model-details");
                modelDetails.forEach((detail)=>{
                    detail.classList.remove('show');
            })

            modelShow.classList.toggle('show');
            caretIcon.classList.toggle('rotate');
        };
    })
})


/**
 * ! JAVASCRIPT FOR TOOLTIP IS HERE
**/

tooltips.forEach(function(tooltip){

  let pin = tooltip.querySelector('.pin');
  let image = tooltip.querySelector('.img');
    
  pin.addEventListener('mouseenter', function(){
        let image = tooltip.querySelector('.img');

        msgTimeout = setTimeout(function(){
            image.classList.add("activeTooltip");
        }, 500);   
    }) 

  pin.addEventListener('mouseleave', function(){
    clearTimeout(msgTimeout);
    let image = tooltip.querySelector('.img');
    image.classList.remove("activeTooltip");
  })  
})

/**
 * !JAVASCRIPT FOR THE BANNER IMAGE & ENGINE OIL GRADE
 **/

function changeImageAndCaption(fileName){
    localStorage.setItem("caption", JSON.stringify(fileName));
    let imageCaption = JSON.parse(localStorage.getItem('caption')) || [];
    let img = document.querySelector('#bannerImage');
    let bannerCaption = document.querySelector('#modelCaptionTitle');
    img.setAttribute("src", imageCaption[0]['picture']);
    bannerCaption.innerText = imageCaption[0]['caption'];
    // console.log(imageCaption[0]['picture']);



    let tbl = document.getElementById('myTable');
    let tableBody = document.getElementById('tableBody');
    let tableRow = document.querySelector('.tableRow');

    if(tableRow){
        tableRow.remove();
    }

    tableBody.innerHTML += `
        <tr class="tableRow">
            <td>${imageCaption[0]['BEFORE 2015']}</td>
            <td>${imageCaption[0]['2015 - 2020']}</td>
            <td>${imageCaption[0]['AFTER 2020']}</td>
        </tr>
    `;

    // let row = tableBody.insertRow();
    // let cell1 = row.insertCell();
    // let cell2 = row.insertCell();
    // let cell3 = row.insertCell();

    // cell1.innerHTML = imageCaption[0]['BEFORE 2015'];
    // cell2.innerHTML = imageCaption[0]['2015 - 2020'];
    // cell3.innerHTML = imageCaption[0]['AFTER 2020'];
}


function changeImageAndCaptionRefresh(){
    // localStorage.setItem("caption", JSON.stringify(fileName));
    let imageCaption = JSON.parse(localStorage.getItem('caption')) || [];
    let img = document.querySelector('#bannerImage');
    let bannerCaption = document.querySelector('#modelCaptionTitle');
    img.setAttribute("src", imageCaption[0]['picture']);
    bannerCaption.innerText = imageCaption[0]['caption'];
    // console.log(imageCaption[0]['picture']);


    let tbl = document.getElementById('myTable');
    let tableBody = document.getElementById('tableBody');

    tableBody.innerHTML += `
        <tr class="tableRow">
            <td>${imageCaption[0]['BEFORE 2015']}</td>
            <td>${imageCaption[0]['2015 - 2020']}</td>
            <td>${imageCaption[0]['AFTER 2020']}</td>
        </tr>
    `;

    // let row = tableBody.insertRow();
    // let cell1 = row.insertCell();
    // let cell2 = row.insertCell();
    // let cell3 = row.insertCell();

    // cell1.innerHTML = imageCaption[0]['BEFORE 2015'];
    // cell2.innerHTML = imageCaption[0]['2015 - 2020'];
    // cell3.innerHTML = imageCaption[0]['AFTER 2020'];  
}

changeImageAndCaptionRefresh();

// console.log(captionHiluxLAN25)


// function createTableData(data){
//     let tbl = document.getElementById('myTable');
//     let tableBody = document.getElementById('tableBody');

//     let row = tableBody.insertRow();
//     let cell1 = row.insertCell();
//     let cell2 = row.insertCell();
//     let cell3 = row.insertCell();

//     cell1.innerHTML = data[0]['BEFORE 2015'];
//     cell2.innerHTML = data[0]['2015 - 2020'];
//     cell3.innerHTML = data[0]['AFTER 2020'];
// }