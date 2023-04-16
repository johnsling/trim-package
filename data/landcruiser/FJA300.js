let captionLandCruiserFJA300 = [
    {
        picture: './images/land cruiser/FJA300.jpg',
        caption: "Land Cruiser FJA300",
        "AFTER 2020": "5W-30",
        "2015 - 2020": "5W-30",
        "BEFORE 2015": "15W-40",
    }
]


let shopItemsLandCruiserFJA300 = [
    {
        id:"engineOil1L15W40LandCruiserFJA300",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083484",
        partsPrice:60.50,
        laborPrice:0,
        name:"TGMO 15W40(1L)",
    },
    {
        id:"engineOil4L15W40LandCruiserFJA300",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888083461",
        partsPrice:234.00,
        laborPrice:250,
        name:"TGMO 15W40(4L)",
    },
    {
        id:"engineOil5L15W40LandCruiserFJA300",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888083513",
        partsPrice:370.00,
        laborPrice:250,
        name:"TGMO 15W40(5L)",
    },
    {
        id:"engineOil1L5W30LandCruiserFJA300",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888085626",
        partsPrice:91.00,
        laborPrice:0,
        name:"TGMO 5W30(1L)",
    },
    {
        id:"engineOil4L5W30LandCruiserFJA300",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"TW0888085625",
        partsPrice:325.00,
        laborPrice:250,
        name:"TGMO 5W30(4L)",
    },
    {
        id:"engineOil5L5W30LandCruiserFJA300",
        img:"../images/product pic/engineoil.jpg",
        partNumber:"ZO 0888085624",
        partsPrice:535.00,
        laborPrice:250,
        name:"TGMO 5W30(5L)",
    },
    {
        id:"sumpPlugWasherLandCruiserFJA300",
        img:"../images/product pic/sump plug washer.jpg",
        partNumber:"TS 90430 12031",
        partsPrice:11.04,
        laborPrice:0,
        name:"Sump Plug Washer",
    },
    {
        id:"oilFilterLandCruiserFJA300",
        img:"../images/product pic/oilfilter.jpg",
        partNumber:"TS 90915 10010",
        partsPrice:194.27,
        laborPrice:0,
        name:"Engine Oil Filter", 
    },
    {
        id:"washerFluidLandCruiserFJA300",
        img:"../images/product pic/washerfluid.jpg",
        partNumber:"TS SUJ16 D0036",
        partsPrice:25.21,
        laborPrice:0,
        name:"Washer Fluid",
    },
    {
        id:"fuelFilterMainLandCruiserFJA300",
        img:"../images/product pic/fuelfilterMAIN.jpg",
        partNumber:"TS 23390 52060",
        partsPrice:311.59,
        laborPrice:25.50,
        name:"Fuel Filter MAIN", 
    },
    {
        id:"airFilterLandCruiserFJA300",
        img:"../images/product pic/airelement.jpg",
        partNumber:"TS 17801 52020",
        partsPrice:420.64,
        laborPrice:25.50,
        name:"Air Element Filter", 
    },
    {
        id:"airConditionFilterLandCruiserFJA300",
        img:"../images/product pic/air condition filter.jpg",
        partNumber:"TS 87139 60030",
        partsPrice:432.85,
        laborPrice:15.50,
        name:"AC Air Filter", 
    },
    {
        id:"brakePadFrontLandCruiserFJA300",
        img:"../images/product pic/brakepads.jpg",
        partNumber:"TS 04465 60380",
        partsPrice:810.39,
        laborPrice:50.50,
        name:"Front Brake Pad", 
    },
    {
        id:"rearBrakePadLandCruiserFJA300",
        img:"../images/product pic/rearbrakepad.jpg",
        partNumber:"TS 04466 60190",
        partsPrice:722.30,
        laborPrice:70.50,
        name:"Rear Brake Pad", 
    },
    {
        id:"driveBeltLandCruiserFJA300",
        img:"../images/product pic/drivebelt.jpg",
        partNumber:"TS 90916 02774",
        partsPrice:156.03,
        laborPrice:35.50,
        name:"Drive Belt", 
    },
    {
        id:"frontWiper1LandCruiserFJA300",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85212 60250",
        partsPrice:115.54,
        laborPrice:15.50,
        name:"Front Wiper Long", 
    },
    {
        id:"frontWiper2LandCruiserFJA300",
        img:"../images/product pic/wiperblade.jpg",
        partNumber:"TS 85222 35150",
        partsPrice:145.04,
        laborPrice:15.50,
        name:"Front Wiper Short", 
    },
    {
        id:"rearWiperLandCruiserFJA300",
        img:"../images/product pic/rearWiperBlade.jpg",
        partNumber:"TS 85242 60140",
        partsPrice:145.04,
        laborPrice:15.50,
        name:"Rear Wiper", 
    },
    {
        id:"engineCoolant1LLandCruiserFJA300",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80089",
        partsPrice:105.68,
        laborPrice:0,
        name:"Engine Coolant(1L)", 
    },
    {
        id:"engineCoolant5LLandCruiserFJA300",
        img:"../images/product pic/coolant.jpg",
        partNumber:"TS 08889 80096",
        partsPrice:468.89,
        laborPrice:50.50,
        name:"Engine Coolant(5L)", 
    },
    {
        id:"gearOilLandCruiserFJA300",
        img:"../images/product pic/gearoil.jpg",
        partNumber:"TS 90915 40002",
        partsPrice:350,
        laborPrice:25,
        name:"Gear Oil", 
    },
]


shopItemsLandCruiserFJA300.map((obj)=>{

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

// console.log(shopItemsLandCruiserFJA300);