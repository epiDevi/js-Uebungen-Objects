const person= {
    name: "Sepideh",
    alter: 35,
    sagNameAlter : function () {
        alert(`Hallo! ich bin ${this.name} und bin ${this.alter} jahre alt`);
    }
}
person.sagNameAlter();
console.log(person.name);
console.log(person.alter);