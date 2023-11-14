//? Enums in TS are comonnly used when you want to represent a set of related values and choose one value from multiple option. Enums provide a convinient way to define a set of named value ans associate them with specifuc meaning.

//* In TypeScript, when enum constants are not explicitly assigned numeric values, they are automaticlly assigned incremental numeric values starting from 0 and it will increment by 1;

enum Roles{
    user = "user",
    admin = "admin"
}

type logInDetail= {
    name?: string;
    email: string;
    password: string;
    role:Roles;
}

const user1:logInDetail={
    name: "Faraaz",
    email: "farazashraf1523@gmail.com",
    password: "qwre",
    role:Roles.admin
}

const user2:logInDetail={
    name: "Aysha",
    email: "farazashraf1523@gmail.com",
    password: "qwre",
    role: Roles.user
}

const isAdmin : (user:logInDetail)=> string =(user:logInDetail): string =>
{
    const {name, role} = user1;
    return  role === "admin" ? `${name} is allowed to edit the Website` : `${name} is not allowed to edit the Website`
}

const isUSer: (user:logInDetail) => string=(user:logInDetail):string =>{
    const {name, role} = user;
    return role === "user" ? `${name} is allowed to log in` : `${name} is not allowed to log in the website`
}

console.log(isAdmin(user1));
console.log(isAdmin(user2));
console.log(isUSer(user1));
console.log(isUSer(user2));


