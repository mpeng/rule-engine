"use strict";
function takeMed(medNum) {
    console.log("Took " + medNum);
}
class Hero {
    say(addr1, addr2) {
        console.log(this.name + " lives in " + addr1 + " " + addr2);
        var info = new Info();
        info.ssn = '123445';
        info.med = '333333';
        return info;
    }
}
;
class Person {
    take(doctor) {
        return null;
    }
}
class Info {
}
console.log(Hero);
console.log(Person);
var hero = new Hero();
hero.name = 'Michael';
console.log(hero.say('Johns Creek', 'Georgia').ssn);
