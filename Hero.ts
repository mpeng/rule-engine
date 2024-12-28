function takeMed( medNum: number ) {
    console.log( "Took " + medNum);
}

class Hero {
    name : String;
    
    say ( addr1:String, addr2:String) : Info {
        console.log( this.name + " lives in " + addr1 + " " + addr2);

        var info = new Info ();
        info.ssn = '123445';
        info.med = '333333';
        return info;
    }
};


class Person {
    take ( doctor : String ) : String {
        return null;
    }
}

class Info {
    ssn: String;
    med: String;
}


console.log(Hero);
console.log(Person);
var hero = new Hero();
hero.name = 'Michael';
console.log(hero.say('Johns Creek', 'Georgia').ssn);
