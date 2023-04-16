let label=document.getElementById("empty-label");
let shoppingCart=document.getElementById("shopping-cart");
let clearCheckOut=document.getElementById("clearCheckOut");

let partsCalcAmount=document.getElementById("parts-Amount");
let laborCalcAmount=document.getElementById("labor-Amount");
let netCalcAmount=document.getElementById("net-Amount");
let leviesCalcAmount=document.getElementById("levies-Amount");
let subTotalCalcAmount=document.getElementById("sub-Total-Amount");
let VATCalcAmount=document.getElementById("VAT-Amount");
let TOTALCalcAmount=document.getElementById("TOTAL-Amount");


let basket = JSON.parse(localStorage.getItem("data")) || [];
let shopItemsData = JSON.parse(localStorage.getItem("shopItems")) || [];


let funcPartsAmount = ()=>{

    let partsAmount = basket.map((x)=>{
        let {item, id} = x;
        let search = shopItemsData.find((y)=>y.id===id) || [];
        return item * search.Retail;
    }).reduce((x,y)=>x+y,0);

    return partsAmount;
}

funcPartsAmount();


let funcLaborAmount = ()=>{

    let laborAmount = basket.map((x)=>{
        let {item, id} = x;
        let search = shopItemsData.find((y)=>y.id===id) || [];
        return (search.laborPrice);
    }).reduce((x,y)=>x+y,60);

    return laborAmount;
}

funcLaborAmount();


let calcAmounts = [funcPartsAmount, funcLaborAmount];


let calculation=()=>{

    let cartIcon=document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

};

calculation()

let generateCartItems = ()=>{
    if(basket.length!==0){

        clearCheckOut.innerHTML = `        
             <a href="index.html">
                <button class="checkout">Checkout</button>
            </a>
            <button onclick="clearCarton()" class="clearCart">Clear Cart</button>
        `;

       return (shoppingCart.innerHTML = basket.map((x)=>{
            let {id, item} = x;
            let search = shopItemsData.find((y)=>y.id===id) || [];
            
           return`
            <div class="cart-item">
                <img width="100" height="150" src="${search.img}"/>
                <div class="details">
                    <div class="partNumber">
                        <p>P/N</p>
                        <p>${search.partNumber}</p>
                    </div>

                    <div class="title-price-x">
                        <div class="title-price">
                            <h6>${search.name}</h6>
                            <h6 class="title-unit-price">Ghc ${search.Retail}</h6>
                        </div>
                        <i onclick="removeItem(${id})" class="fa-solid fa-xmark"></i>
                    </div>

                    <div class="buttons">
                        <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                        <div id="${id}" class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
                    </div>

                    <div class="cart-item-amount">
                        <p class="spare-parts-amount">Parts Ghc${item*search.Retail}</p>
                        <p class="labor-amount">Labor Ghc${search.laborPrice} </p>
                    </div>
                </div>
            </div>
            `;
            
        }).join("")); 
    }
    else{
        let tableContainer = document.getElementById('tableContainer');
        let wrapperContainer = document.getElementById('wrapper-container');

        tableContainer.innerHTML = ``;
        wrapperContainer.innerHTML = ``;
        clearCheckOut.innerHTML = ``;

        label.innerHTML = `
            <h3>Cart is Empty</h3>
            <a href="index.html">
                <button class="homeBtn">Back to Home</button>
            </a>
        `;
    };
}

generateCartItems();


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
 
    generateCartItems();
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

    generateCartItems(); 
    localStorage.setItem("data", JSON.stringify(basket));
};

let update =(id)=>{
    
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    funcTaxation(calcAmounts);

};

let removeItem=(selectedItem)=>{

    basket = basket.filter((x)=>x.id !== selectedItem.id);
    generateCartItems();
    funcTaxation(calcAmounts); 
    calculation()

    localStorage.setItem("data", JSON.stringify(basket)); 
    
};


let clearCarton = ()=>{
    basket=[];
    generateCartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
}


let funcTaxation = (calcAmounts)=>{
    if(basket.length !== 0){
        
        for (let i=0; calcAmounts.length>i; i++){

            let partsAmount = calcAmounts[0]();
            let laborAmount = calcAmounts[1]();

            // partsAmount = partsAmount.toFixed(2)

            let netAmount = Number(partsAmount + laborAmount);

            let leviesRate = 0.06;
            let leviesAmount = Number(leviesRate*netAmount);

            // console.log(typeof leviesAmount);

            let subTotalAmount = Number(netAmount + leviesAmount);

            let VATRate = 0.15;
            let VATAmount = Number(VATRate*subTotalAmount);

            let TOTALAmount = subTotalAmount + VATAmount;



            partsCalcAmount.innerHTML =`
            <span>Parts</span> <span>Ghc ${partsAmount.toFixed(2)}</span>
            `;

            laborCalcAmount.innerHTML =`
            <span>Labor & Sund(Ghc60)</span> <span>Ghc ${laborAmount.toFixed(2)}</span>
            `; 
        
            netCalcAmount.innerHTML =`
            <span>Net</span> <span>Ghc ${netAmount.toFixed(2)}</span>
            `;

            leviesCalcAmount.innerHTML =`
            <span>6% Levies</span> <span>Ghc ${leviesAmount.toFixed(2)}</span>
            `;

            subTotalCalcAmount.innerHTML =`
            <span>SubTotal</span> <span>Ghc ${subTotalAmount.toFixed(2)}</span>
            `; 

            VATCalcAmount.innerHTML =`
            <span>15% VAT</span> <span>Ghc ${VATAmount.toFixed(2)}</span>
            `;

            TOTALCalcAmount.innerHTML =`
            <span>TOTAL BILL</span> <span>Ghc ${TOTALAmount.toFixed(2)}</span>
            `;
        };
    }
    else return;
};

funcTaxation(calcAmounts);


function changeImageAndCaptionRefresh(){
    let imageCaption = JSON.parse(localStorage.getItem('caption')) || [];
    let img = document.querySelector('#bannerImage');
    let bannerCaption = document.querySelector('#modelCaptionTitle');
    img.setAttribute("src", imageCaption[0]['picture']);
    bannerCaption.innerText = imageCaption[0]['caption'];


    let tbl = document.getElementById('myTable');
    let tableBody = document.getElementById('tableBody');

    tableBody.innerHTML += `
        <tr class="tableRow">
            <td>${imageCaption[0]['BEFORE 2015']}</td>
            <td>${imageCaption[0]['2015 - 2020']}</td>
            <td>${imageCaption[0]['AFTER 2020']}</td>
        </tr>
    `;
}

changeImageAndCaptionRefresh();