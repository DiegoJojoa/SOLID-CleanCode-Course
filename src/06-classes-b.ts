(()=>{

    //No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    interface PersonProps{
        birthdate: Date;
        gender: Gender; 
        name: string;
    }

    class Person{
        public name:string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name,gender,birthdate}:PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps{
        email: string;
        role: string;
        name:string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person{
        public email: string;
        public role: string;
        public lastAccess:Date;
        constructor({
            birthdate,
            email,
            gender,
            name,
            role
        }:UserProps){
            super({name,gender,birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        role: string;
        name: string;
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class UserSettings extends User{
        public workingDirectory : string; 
        public lastOpenFolder : string;


        constructor({
            workingDirectory, 
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate
        }:UserSettingsProps
        ) { 
            super({email,role,name,gender,birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }
    

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home/',
        lastOpenFolder: '/home',
        email: 'diego@gmail.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1990-10-10')
    }
    )

    console.log(userSettings);

})();