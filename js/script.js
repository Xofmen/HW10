let arr = [{// Создал масив
        name: "Raul",
        age: 14,
        isMarried: false,
        family: ['Mother', 'Father', 'Sister']
    },
    {
        name: "Roma",
        age: 21,
        isMarried: false,
        family: ['Mother', 'Father', 'Brother']
    },
    {
        name: "Amin",
        age: 16,
        isMarried: true,
        family: ['Mother', 'Father', 'Sister']
    },
    {
        name: "Maksud",
        age: 20,
        isMarried: true,
        family: ['Mother', 'Father', 'Sister']
    },
    {
        name: "Donik",
        age: 16,
        isMarried: true,
        family: ['Mother', 'Father', 'Sister']
    },
    {
        name: "Sherik",
        age: 25,
        isMarried: true,
        family: ['Mother', 'Father', 'Sister']
    }
]
console.log(arr);
arr[5].age = 22// паменя возраст 
for(let i = 0 ; i < arr.length ; i++){// открыл цикл
    if(arr[i].age > 19){// отфильтровал по возрасту
        console.log(arr[i]);
    }
    if(arr[i].name == 'Raul') {// удалил Рауля
        delete arr[i];
        console.log(arr[i]); 
    }
}





 
