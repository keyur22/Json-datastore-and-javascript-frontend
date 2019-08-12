var list = [{
		"id": 89723,
		"name": "Lenovo K8 Plus (Venom Black, 32 GB)",
		"price": 8999,
		"imageUrl": "https://rukminim1.flixcart.com/image/312/312/j7gi6q80/mobile/p/t/d/lenovo-k8-plus-pa8c0003in-original-imaexp2rupxj9w5f.jpeg?q=70",
		"ratingsCount": 5857,
		"reviewsCount": 1729,
		"rating": 4.1,
		"specs": {
			"memory": {
				"ram": "3 GB",
				"rom": "32 GB",
				"expandableStorage": "128 GB"
			},
			"camera": {
				"rear": "13 MP + 5 MP",
				"front": "8 MP"
			},
			"display": {
				"size": "5.2 inch",
				"type": "Full HD"
			},
			"batteryCapacity": "4000mAh",
			"processor": {
				"type": "MediaTek MTK Helio P25 Octa Core 2.5 GHz",
				"core": "Octa Core",
				"clockSpeed": "2.5 GHz"
			},
			"warranty": "1 Year on Handset, 6 Months on Accessories",
			"operatingSystem": "Android Nougat 7.1.1"
		}
	},
	{
		"id": 125178,
		"name": "Redmi Note 4 (Gold, 64 GB)",
		"price": 10999,
		"imageUrl": "https://rukminim1.flixcart.com/image/312/312/mobile/y/u/a/mi-redmi-note-4-na-original-imaeqdxgrdhxgkcx.jpeg?q=70",
		"ratingsCount": 470852,
		"reviewsCount": 99284,
		"rating": 4.4,
		"specs": {
			"memory": {
				"ram": "4 GB",
				"rom": "64 GB",
				"expandableStorage": "128 GB"
			},
			"camera": {
				"rear": "13 MP",
				"front": "5 MP"
			},
			"display": {
				"size": "5.5 inch",
				"type": "Full HD"
			},
			"batteryCapacity": "4100mAh",
			"processor": {
				"type": "Qualcomm Snapdragon 625 64-bit Octacore 2 GHz",
				"core": "Octa Core",
				"clockSpeed": "2 GHz"
			},
			"warranty": "1 Year on Handset, 6 Months on Accessories",
			"operatingSystem": "Android Marshmallow 6.0.1"
		}
	},
	{
		"id": 8236,
		"name": "Moto G5 Plus (Lunar Gary, 32 GB)",
		"price": 13999,
		"imageUrl": "https://rukminim1.flixcart.com/image/312/312/mobile/5/b/f/motorola-moto-g5-plus-xt-1686-original-imaes3bzhs4thksp.jpeg?q=70",
		"ratingsCount": 105107,
		"reviewsCount": 26241,
		"rating": 4.3,
		"specs": {

			"memory": {
				"ram": "4 GB",
				"rom": "32 GB",
				"expandableStorage": "128 GB"
			},
			"camera": {
				"rear": "12 MP",
				"front": "5 MP"
			},
			"display": {
				"size": "5.2 inch",
				"type": "Full HD"
			},
			"batteryCapacity": "3000mAh",
			"processor": {
				"type": "Qualcomm Snapdragon 625 Octacore 2 GHz",
				"core": "Octa Core",
				"clockSpeed": "2 GHz"
			},
			"warranty": "1 Year on Handset, 6 Months on Accessories",
			"operatingSystem": "Android Nougat 7"
		}
	}
]


var display = function (list) {
	console.log(list);
}

var searchById = function (list, id) {
	found = 0;
	list.map(function (x) {
		if (x.id == id) {
			console.log(x.name);
			found = 1;
		}
	})
	if (found == 0) {
		console.log("Item Not Found");
	}
}

var searchByIndex = function (list, index) {
	if (list[index] == undefined) {
		console.log("invalid Index!!!");
	} else {
		console.log(list[index].name);
	}
}

display(list);

var id = 8236;
searchById(list, id);

var index = 1;
searchByIndex(list, index);