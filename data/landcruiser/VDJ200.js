let captionLandCruiserVDJ200 = [
    {
        picture: './images/land cruiser/VDJ200.png',
        caption: "Land Cruiser VDJ200",
        "AFTER 2020": "5W-30",
        "2015 - 2020": "5W-30",
        "BEFORE 2015": "15W-40",
    }
]


let shopItemsLandCruiserVDJ200 = [
    {
        id:"engineOil1L15W40LandCruiserVDJ200",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083484",
        partsPrice:60.50,
        laborPrice:0,
        name:"TGMO 15W40(1L)",
    },
    {
        id:"engineOil4L15W40LandCruiserVDJ200",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083461",
        partsPrice:234.00,
        laborPrice:250,
        name:"TGMO 15W40(4L)",
    },
    {
        id:"engineOil5L15W40LandCruiserVDJ200",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888083513",
        partsPrice:370.00,
        laborPrice:250,
        name:"TGMO 15W40(5L)",
    },
    {
        id:"engineOil1L5W30LandCruiserVDJ200",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888085626",
        partsPrice:91.00,
        laborPrice:0,
        name:"TGMO 5W30(1L)",
    },
    {
        id:"engineOil4L5W30LandCruiserVDJ200",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888085625",
        partsPrice:325.00,
        laborPrice:250,
        name:"TGMO 5W30(4L)",
    },
    {
        id:"engineOil5L5W30LandCruiserVDJ200",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888085624",
        partsPrice:535.00,
        laborPrice:250,
        name:"TGMO 5W30(5L)",
    },
    {
        id:"sumpPlugWasherLandCruiserVDJ200",
        img:"../images/product pic/sump plug washer.jpg",
        partNumber:"TS 90430 12031",
        partsPrice:11.04,
        laborPrice:0,
        name:"Sump Plug Washer",
    },
    {
        id:"oilFilterLandCruiserVDJ200",
        img:"../images/product pic/oilfilter.jpg",
        partNumber:"TS 04152 YZZD4",
        partsPrice:194.27,
        laborPrice:0,
        name:"Engine Oil Filter", 
    },
    {
        id:"washerFluidLandCruiserVDJ200",
        img:"../images/product pic/washerfluid.jpg",
        partNumber:"TS SUJ16 D0036",
        partsPrice:25.21,
        laborPrice:0,
        name:"Washer Fluid",
    },
    {
        id:"fuelFilterMainLandCruiserVDJ200",
        img:"../images/product pic/fuelfilterMAIN.jpg",
        partNumber:"TS 23390 51070",
        partsPrice:311.59,
        laborPrice:25.50,
        name:"Fuel Filter MAIN", 
    },
    {
        id:"airFilterLandCruiserVDJ200",
        img:"../images/product pic/airelement.jpg",
        partNumber:"TS 17801 51020",
        partsPrice:420.64,
        laborPrice:25.50,
        name:"Air Element Filter", 
    },
    {
        id:"airConditionFilterLandCruiserVDJ200",
        img:"../images/product pic/air condition filter.jpg",
        partNumber:"TS 87139 YZZ25",
        partsPrice:432.85,
        laborPrice:15.50,
        name:"AC Air Filter", 
    },
    {
        id:"brakePadFrontLandCruiserVDJ200",
        img:"../images/product pic/brakepads.jpg",
        partNumber:"TS 04465 60350",
        partsPrice:810.39,
        laborPrice:50.50,
        name:"Front Brake Pad", 
    },
    {
        id:"rearBrakePadLandCruiserVDJ200",
        img:"../images/product pic/rearbrakepad.jpg",
        partNumber:"TS 04466 60160",
        partsPrice:722.30,
        laborPrice:70.50,
        name:"Rear Brake Pad", 
    },
    {
        id:"driveBeltLandCruiserVDJ200",
        img:"../images/product pic/drivebelt.jpg",
        partNumber:"TS 99369 K2250",
        partsPrice:156.03,
        laborPrice:35.50,
        name:"Drive Belt", 
    },
    {
        id:"frontWiper1LandCruiserVDJ200",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85222 42110",
        partsPrice:115.54,
        laborPrice:15.50,
        name:"Front Wiper Long", 
    },
    {
        id:"frontWiper2LandCruiserVDJ200",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85222 53071",
        partsPrice:145.04,
        laborPrice:15.50,
        name:"Front Wiper Short", 
    },
    {
        id:"rearWiperLandCruiserVDJ200",
        img:"../images/product pic/rearWiperBlade.jpg",
        partNumber:"TS 85242 42030",
        partsPrice:145.04,
        laborPrice:15.50,
        name:"Rear Wiper", 
    },
    {
        id:"engineCoolant1LLandCruiserVDJ200",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80089",
        partsPrice:105.68,
        laborPrice:0,
        name:"Engine Coolant(1L)", 
    },
    {
        id:"engineCoolant5LLandCruiserVDJ200",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80096",
        partsPrice:468.89,
        laborPrice:50.50,
        name:"Engine Coolant(5L)", 
    },
    {
        id:"gearOilLandCruiserVDJ200",
        img:"../images/product pic/gearoil.jpg",
        partNumber:"TS 90915 40002",
        partsPrice:350,
        laborPrice:25,
        name:"Gear Oil", 
    },
]


shopItemsLandCruiserVDJ200.map((obj)=>{

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

// console.log(shopItemsLandCruiserVDJ200);