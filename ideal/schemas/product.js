export default {
    name: "product",
    title: "Product",
    type: "document",

    fields: [
        {
            name:"image",
            title:"Slika",
            type: "array",
            of:[{type:"image"}],
            options: {
                hotspot: true
            },
        },
        {
            name: 'productKind',
            title: 'Vrsta',
            type: 'string',
            options: {
              list: [
                { "title": "Kuhinja", "value": "kuhinja"},
                { "title": "Ormar", "value": "ormar"},
                { "title": "Predsoblje", "value": "predsoblje"},
                { "title": "Komode", "value": "komode"},
                { "title": "Ugaone garniture", "value": "ugaonegarniture"},
                { "title": "Kreveti", "value": "kreveti"},
                { "title": "Stol", "value": "stol"},
                { "title": "Kupatilski namještaj", "value": "kupatilskinamještaj"},
              ],
              layout: 'dropdown'
            }
        },
        {
            name:"name",
            title:"Naziv proizvoda",
            type:"string",
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name",
                maxLength: 90,
            }
        },
        {
            name:"details",
            title:"Detalji proizvoda",
            type:"string"
        },
        {
            name:"price",
            title:"Cijena proizvoda",
            type:"number",
        },
    ]
}