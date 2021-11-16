
enum Role { ADMIN = 1, READ_ONLY, AUTHOR  };

const person = {
    name: "Edouard",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR
};

// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
};

if(person.role === 3) {
    console.log("yes")
}


