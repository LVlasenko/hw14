//Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj
//которого имеет свойства X, Y, znak. Метод должен подтвердить у пользователя хочет
//ли он произвести действие znak c Х и У. Если - да, сделать математическое действие
//znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод
//input() класса прототипа SuperMath. Пример обекта: obj = { X:12, Y:3, znak: “/”},
//возможные варианты znak=> + - / * %. При вводе znak нужно сделать проверку корректности
//ввода на возможные математические действия

function SuperMath() {
  this.check = function check(obj) {
    var result = confirm("Do math action?");
    console.log(result);
    if (result === true) {
      alert(p.doMath(obj));
    } else {
      p.input(obj);
    }
  };
}

var obj = { x: 12, y: 3, znak: "/" };

// obj.x = 12;
// obj.y = 3;
// obj.znak = "/";
// console.log(obj);

SuperMath.prototype.doMath = function doMath() {
  switch (obj.znak) {
    case "+":
      return parseInt(obj.x) + parseInt(obj.y);
    case "*":
      return obj.x * obj.y;
    case "/":
      return obj.x / obj.y;
    case "-":
      return obj.x - obj.y;
    case "%":
      return obj.x % obj.y;
    case "^":
      return obj.x ^ obj.y;
  }
};

SuperMath.prototype.input = function input() {
  resultX = prompt("pls enter new X");
  obj.x = resultX;
  resultY = prompt("pls enter new Y");
  obj.y = resultY;
  symbols = ["+", "-", "*", "/", "^", "%"];
  resultZnak = prompt("pls enter new Znak");
  if (symbols.indexOf(resultZnak) === -1) {
    alert("Invalid symbol");
    obj.input();
  }
  obj.znak = resultZnak;
  return p.check(obj);
};
p = new SuperMath();
p.check(obj);
