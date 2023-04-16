// let com60 = JSON.parse(com60Json);
// console.log(com60);

let captionPradoLJ150 = [
    {
        picture: './images/prado/TRJ150.png',
        caption: "Prado LJ150",
        "AFTER 2020": "5W-30",
        "2015 - 2020": "5W-30",
        "BEFORE 2015": "15W-40",
    }
]


let shopItemsPradoLJ150 = [
    {
        id:"engineOil1L15W40PradoLJ150",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083484",
        partsPrice:60.50,
        laborPrice:0,
        name:"TGMO 15W40(1L)",
    },
    {
        id:"engineOil4L15W40PradoLJ150",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083461",
        partsPrice:234.00,
        laborPrice:250,
        name:"TGMO 15W40(4L)",
    },
    {
        id:"engineOil5L15W40PradoLJ150",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888083513",
        partsPrice:370.00,
        laborPrice:250,
        name:"TGMO 15W40(5L)",
    },
    {
        id:"engineOil1L5W30PradoLJ150",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888084131",
        partsPrice:54.00,
        laborPrice:0,
        name:"TGMO 5W30(1L)",
    },
    {
        id:"engineOil4L5W30PradoLJ150",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888084132",
        partsPrice:277.00,
        laborPrice:250,
        name:"TGMO 5W30(4L)",
    },
    {
        id:"engineOil5L5W30PradoLJ150",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888085624",
        partsPrice:452.00,
        laborPrice:250,
        name:"TGMO 5W30(5L)",
    },
    {
        id:"sumpPlugWasherPradoLJ150",
        img:"../images/product pic/sump plug washer.jpg",
        partNumber:"TS 90430 12031",
        partsPrice:11.04,
        laborPrice:0,
        name:"Sump Plug Washer",
    },
    {
        id:"oilFilterPradoLJ150",
        img:"../images/product pic/oilfilter.jpg",
        partNumber:"TS 90915 40002",
        partsPrice:194.27,
        laborPrice:0,
        name:"Engine Oil Filter", 
    },
    {
        id:"washerFluidPradoLJ150",
        img:"../images/product pic/washerfluid.jpg",
        partNumber:"TS SUJ16 D0036",
        laborPrice:0,
        name:"Washer Fluid",
    },
    {
        id:"fuelFilterMainPradoLJ150",
        img:"../images/product pic/fuelfilterMAIN.jpg",
        partNumber:"TS 23390 30150",
        partsPrice:311.59,
        laborPrice:25.50,
        name:"Fuel Filter MAIN", 
    },
    {
        id:"airFilterPradoLJ150",
        img:"../images/product pic/airelement.jpg",
        partNumber:"TS 17801 30040",
        partsPrice:420.64,
        laborPrice:25.50,
        name:"Air Element Filter", 
    },
    {
        id:"airConditionFilterPradoLJ150",
        img:"../images/product pic/air condition filter.jpg",
        partNumber:"TS 87139 YZZ25",
        partsPrice:432.85,
        laborPrice:15.50,
        name:"AC Air Filter", 
    },
    {
        id:"brakePadFrontPradoLJ150",
        img:"../images/product pic/brakepads.jpg",
        partNumber:"TS 04465 60320",
        partsPrice:919.96,
        laborPrice:50.50,
        name:"Front Brake Pad", 
    },
    {
        id:"brakeShoePradoLJ150",
        img:"../images/product pic/brakeshoe.jpg",
        partNumber:"TS 04466 60140",
        partsPrice:830.46,
        laborPrice:70.50,
        name:"Rear Brake Pad", 
    },
    {
        id:"driveBeltPradoLJ150",
        img:"../images/product pic/drivebelt.jpg",
        partNumber:"TS 99332 11210",
        partsPrice:156.03,
        laborPrice:35.50,
        name:"Drive Belt", 
    },
    {
        id:"fanBeltPradoLJ150",
        img:"../images/product pic/drivebelt.jpg",
        partNumber:"TS 99332 00825",
        partsPrice:140.28,
        laborPrice:35.50,
        name:"Fan Belt", 
    },
    {
        id:"airConditionBeltPradoLJ150",
        img:"../images/product pic/drivebelt.jpg",
        partNumber:"TS 90916 02211",
        partsPrice:371.82,
        laborPrice:35.50,
        name:"Air Condition Belt", 
    },
    {
        id:"frontWiper1PradoLJ150",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85222 60260",
        partsPrice:115.54,
        laborPrice:15.50,
        name:"Front Wiper Long", 
    },
    {
        id:"frontWiper2PradoLJ150",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85212 53081",
        partsPrice:145.04,
        laborPrice:15.50,
        name:"Front Wiper Short", 
    },
    {
        id:"rearWiperPradoLJ150",
        img:"../images/product pic/rearWiperBlade.jpg",
        partNumber:"TS 85242 42030",
        partsPrice:145.04,
        laborPrice:15.50,
        name:"Rear Wiper", 
    },
    {
        id:"engineCoolant1LPradoLJ150",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80089",
        partsPrice:105.68,
        laborPrice:0,
        name:"Engine Coolant(1L)", 
    },
    {
        id:"engineCoolant5LPradoLJ150",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80096",
        partsPrice:468.89,
        laborPrice:50.50,
        name:"Engine Coolant(5L)", 
    },
    {
        id:"gearOilPradoLJ150",
        img:"../images/product pic/gearoil.jpg",
        partNumber:"TS 90915 40002",
        partsPrice:350,
        laborPrice:25,
        name:"Gear Oil", 
    },
]


shopItemsPradoLJ150.map((obj)=>{

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

// console.log(shopItemsPradoLJ150)