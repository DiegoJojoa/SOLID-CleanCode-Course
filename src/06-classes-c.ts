(()=>{

    //Aplicando el principio de responsabilidad única
    //Priorizar la composición frente a la herencia
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
    }

    class User {
        public email: string;
        public role: string;
        public lastAccess: Date;
        constructor({
            email,
            role
        }: UserProps) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;


        constructor({
            workingDirectory,
            lastOpenFolder
        }: SettingsProps
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings{
        public person:Person;
        public user: User;
        public settings : Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory
        }:UserSettingsProps){
            this.person = new Person({name, gender,birthdate});
            this.user = new User({email,role});
            this.settings = new Settings({lastOpenFolder,workingDirectory});
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