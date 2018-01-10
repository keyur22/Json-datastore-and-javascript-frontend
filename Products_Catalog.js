var catalog =
{
    "electronics":
    {
         "mobiles":
         [
              "Samsung",
              "Lenovo",
              "Mi",
              "Motorola",
              "OPPO",
              "Apple"
         ],
         "mobileAccessories":
         [
               "Mobile Cases",
               "Headphones and Headsets",
               "Power Banks",
               "Screenguards",
               "Memory Cards"
         ],
         "computerAccessories":
         [
               "External Hard Disks",
               "Pendrives",
               "Mouse",
               "Keyboard"
           ],
           "laptops":"Gaming Laptops",
           "desktopPC's" : null,
           "tablets" : null
      },

      "appliances " :
      {
           "televisions" :
           {
                     "byScreenSize" :
                     [
                          "24 and below",
                          "32",
                          "39 and above"
                     ],
                     "byBrand":
                     [
                          "samsung",
                          "sony",
                          "LG"
                     ]
           },
                "airConditioners":
                [
                     "Split AC's",
                     "WIndow AC's"
                ],
                "washingMachine":
                [
                     "Fully Automatic",
                     "Semi Automatic"
                ]
      },

      "men":
      {
           "footWear":
           [
                "Sport Shoes",
                "Casual Shoes",
                "Formal Shoes",
                "Flip Flops",
                "Loafers",
                "Sneakers",
                "Sandals and Floaters"
           ],
           "topWear":
         [
               "T-Shirts",
               "Shirts",
               "Kurtas",
               "Jackets",
               "Suits and Blazers"
         ],
         "bottomWear":
         [
               "Jeans",
               "Trousers",
               "Cargos",
               "Shorts"
         ]
     },

      "women" :
      {
           "jewellery":
           [
                "Precious Jewellery",
                "Artificial Jewellery",
                "Silver Jewellery"
           ],
           "beautyAndGrooming":
         [
               "Make Up",
               "Skin Care",
               "Hair Care"
         ],
         "ethnicWear":
         [
               "Sarees",
               "Kurtas and Kurtis",
               "Dress Materials"
         ]
     }
}

var display = function (catalog){
     console.log(catalog);
}

var searchMobilesByName = function (name){
     var check = 1;
     var mobiles = catalog.electronics["mobiles"];
     for ( x in  mobiles ){
          if ( mobiles[x] == name )
          {
               console.log("Available");
               check = 0;
          }
     }
     if ( check == 1 )
     {
          console.log("Not Available");
     }
}

var searchFootwearByIndex = function (index){
     if ( catalog.men.footWear[index] == undefined ){
          console.log("Invalid Index!!");
     }
     else {
          console.log(catalog.men.footWear[index]);
     }
}

display(catalog);

var find = "Lenovo";
searchMobilesByName(find);

var index = 4;
searchFootwearByIndex(index);
