class Paises {
    constructor(id, country, gold, silver, bronze, continent) {
        this.id = id;
        this.country = country;
        this.gold = gold;
        this.silver = silver;
        this.bronze = bronze;
        this.continent = continent;
    }
}

const arr = [];
const p1 = new Paises(1, 'Brasil', 7, 6, 6, 'América do Sul');
const p2 = new Paises(2, 'USA', 46, 37, 17, 'América do Norte');
const p3 = new Paises(3, 'China', 26, 18, 26, 'Ásia');
const p4 = new Paises(4, 'Russia', 19, 18, 19, 'Europa');
const p5 = new Paises(5, 'Reino Unido', 27, 23, 17, 'Europa');
const p6 = new Paises(6, 'Alemanha', 17, 10, 15, 'Europa');
const p7 = new Paises(7, 'Japão', 12, 8, 21, 'Ásia');
const p8 = new Paises(8, 'Argentina', 3, 1, 0, 'América do Sul');
const p9 = new Paises(9, 'Itália', 8, 12, 8, 'Europa');
const p10 = new Paises(10, 'Quênia', 6, 6, 1, 'África');
arr.push(p1);
arr.push(p2);
arr.push(p3);
arr.push(p4);
arr.push(p5);
arr.push(p6);
arr.push(p7);
arr.push(p8);
arr.push(p9);
arr.push(p10);

console.log(arr);