(()=>{

    //No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    class Person{
        //Forma larga en TypeScript
        // public name:string;
        // public gender: Gender;
        // public birthdate: Date;

        // constructor(name:string,gender:Gender,birthdate:Date){
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;

        // }

        //Forma corta en TypeScript

        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ) {}
    }

    class User extends Person{
        public lastAccess:Date;
        constructor(
            public email: string,
            public role: string,
            name:string,
            gender:Gender,
            birthdate: Date
        ){
            super(name,gender,birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role:string,
            name:string,
            gender:Gender,
            birthdate:Date
        ) { 
            super(email,role,name,gender,birthdate);
        }
    }
    

    const userSettings = new UserSettings(
        '/usr/home/',
        '/home',
        'diego@gmail.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1990-10-10')
    )

    console.log(userSettings);

})();