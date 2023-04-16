let captionHiluxGUN125 = [
    {
        picture: './images/hilux/GUN125.126.jpg',
        caption: "IMV Hilux GUN125 & 126",
        "AFTER 2020": "5W-30",
        "2015 - 2020": "5W-30",
        "BEFORE 2015": "15W-40",
    }
]


let shopItemsHiluxGUN125 = [
    {
        id:"engineOil1L15W40HiluxGUN125",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083484",
        partsPrice:60.50,
        laborPrice:0,
        name:"TGMO 15W40(1L)",
    },
    {
        id:"engineOil4L15W40HiluxGUN125",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083461",
        partsPrice:234.00,
        laborPrice:250,
        name:"TGMO 15W40(4L)",
    },
    {
        id:"engineOil5L15W40HiluxGUN125",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888083513",
        partsPrice:370.00,
        laborPrice:250,
        name:"TGMO 15W40(5L)",
    },
    {
        id:"engineOil1L5W30HiluxGUN125",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888084131",
        partsPrice:54.00,
        laborPrice:0,
        name:"TGMO 5W30(1L)",
    },
    {
        id:"engineOil4L5W30HiluxGUN125",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888084132",
        partsPrice:277.00,
        laborPrice:250,
        name:"TGMO 5W30(4L)",
    },
    {
        id:"engineOil5L5W30HiluxGUN125",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888085624",
        partsPrice:452.00,
        laborPrice:250,
        name:"TGMO 5W30(5L)",
    },
    {
        id:"sumpPlugWasherHiluxGUN125",
        img:"../images/product pic/sump plug washer.jpg",
        partNumber:"TS 90430 12031",
        partsPrice:11.04,
        laborPrice:0,
        name:"Sump Plug Washer",
    },
    {
        id:"oilFilterHiluxGUN125",
        img:"../images/product pic/oilfilter.jpg",
        partNumber:"TS 90915 20005",
        partsPrice:194.27,
        laborPrice:0,
        name:"Engine Oil Filter", 
    },
    {
        id:"washerFluidHiluxGUN125",
        img:"../images/product pic/washerfluid.jpg",
        partNumber:"TS SUJ16 D0036",
        partsPrice:25.21,
        laborPrice:0,
        name:"Washer Fluid",
    },
    {
        id:"fuelFilterMainHiluxGUN125",
        img:"../images/product pic/fuelfilterMAIN.jpg",
        partNumber:"TS 23390 0L070",
        partsPrice:311.59,
        laborPrice:25.50,
        name:"Fuel Filter MAIN", 
    },
    {
        id:"airFilterHiluxGUN125",
        img:"../images/product pic/airelement.jpg",
        partNumber:"TS 17801 0L040",
        partsPrice:420.64,
        laborPrice:25.50,
        name:"Air Element Filter", 
    },
    {
        id:"airConditionFilterHiluxGUN125",
        img:"../images/product pic/air condition filter.jpg",
        partNumber:"TS 87139 YZZ25",
        partsPrice:432.85,
        laborPrice:15.50,
        name:"AC Air Filter", 
    },
    {
        id:"brakePadFrontHiluxGUN125",
        img:"../images/product pic/brakepads.jpg",
        partNumber:"TS 04465 0K360",
        partsPrice:810.39,
        laborPrice:50.50,
        name:"Front Brake Pad", 
    },
    {
        id:"brakeShoeHiluxGUN125",
        img:"../images/product pic/brakeshoe.jpg",
        partNumber:"TS 04495 0K160",
        partsPrice:722.30,
        laborPrice:70.50,
        name:"Brake Shoe", 
    },
    {
        id:"driveBeltHiluxGUN125",
        img:"../images/product pic/drivebelt.jpg",
        partNumber:"TS 90916 T2033",
        partsPrice:156.03,
        laborPrice:35.50,
        name:"Drive Belt", 
    },
    {
        id:"frontWiper1HiluxGUN125",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85212 42130",
        partsPrice:115.54,
        laborPrice:15.50,
        name:"Front Wiper Long", 
    },
    {
        id:"frontWiper2HiluxGUN125",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85222 71010",
        partsPrice:145.04,
        laborPrice:15.50,
        name:"Front Wiper Short", 
    },
    {
        id:"engineCoolant1LHiluxGUN125",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80089",
        partsPrice:105.68,
        laborPrice:0,
        name:"Engine Coolant(1L)", 
    },
    {
        id:"engineCoolant5LHiluxGUN125",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80096",
        partsPrice:468.89,
        laborPrice:50.50,
        name:"Engine Coolant(5L)", 
    },
    {
        id:"gearOilHiluxGUN125",
        img:"../images/product pic/gearoil.jpg",
        partNumber:"TS 90915 40002",
        partsPrice:350,
        laborPrice:25,
        name:"Gear Oil", 
    },
]


shopItemsHiluxGUN125.map((obj)=>{

    function partsMatchPrice(object){
        let search = com60.find((x)=>{
            if(x['Part number']==object.partNumber){
                return x;
            };
        });
        return(search);
    }


    Object.defineProperty(obj, "Retail", {
        enumerable:true,
        get(){
            let value = Object.entries(partsMatchPrice(obj));
            return value[3][1]

        }
    })
})

// console.log(shopItemsHiluxGUN125);