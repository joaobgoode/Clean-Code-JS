class User {
  constructor(userProfile) {
    this.name = userProfile.name;
    this.age = userProfile.age;
    this.role = userProfile.role;
    this.creationDate = userProfile.created;
    this.lastLogin = userProfile.lastLogin;
    this.isActive = userProfile.active;
    this.loginAttempts = userProfile.loginAttempts;
    this.loginAttemptsNumber = userProfile.loginAttemptsNumber;
  }

  isActive() {
    if (this.isActive) {
      console.log("Ativo");
    } else {
      console.log("Inativo");
    }
  }

  isAdmin() {
    if (this.isAdmin === "admin") {
      console.log("Admin pode acessar todas as áreas.");
    } else {
      console.log("Convidado tem acesso limitado.");
    }
  }
}

// Deixe a função clara para que seja possível de compreender que ela verifica o número de usuários com a role de admin
function numberOfAdmins(users) {
  let c = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].c === "admin") {
      c++;
    }
  }
  return c;
}

// Deixe a função clara para que seja possível de compreender 
// que ela verifica se o número de tentativas de login é excessivo
function checkLoginAttemptNumber(user, maximumLoginAttempts) {
  if (user.loginAttempts > maximumLoginAttempts) {
    console.log("Tentativas de login excessivas.");
  } else {
    console.log("Tentativas de login sob controle.");
  }
}

function mostRecentlyLoggedIn(u1, u2) {
  if (u1.lastLogin > u2.lastLogin) {
    return `${u1.name} logou mais recentemente.`;
  } else {
    return `${u2.name} logou mais recentemente.`;
  }
}

// Deixe a função clara para que seja possível de compreender que ela verifica se o usuário foi criado recentemente
function recentlyCreated(user) {
  const now = new Date();
  const maxTime = 31536000000;
  if (now - user.creationDate < maxTime) {
    console.log("Usuário criado recentemente.");
  } else {
    console.log("Usuário antigo.");
  }
}

const yearCreated1 = 2023;
const monthCreated1 = 1;
const dayCreated1 = 15;
const yearLastLogin1 = 2024;
const monthLastLogin1 = 8;
const dayLastLogin1 = 1;

const userProfile1 = {
  name: "Carlos",
  age: 25,
  role: "admin",
  creationDate: new Date(yearCreated1, monthCreated1, dayCreated1),
  lastLogin: new Date(yearLastLogin1, monthLastLogin1, dayLastLogin1),
  active: true,
  loginAttempts: 100,
  loginAttemptsNumber: 2
};

const yearCreated2 = 2023;
const monthCreated2 = 1;
const dayCreated2 = 15;
const yearLastLogin2 = 2024;
const monthLastLogin2 = 8;
const dayLastLogin2 = 1;

const userProfile2 = {
  name: "Ana",
  age: 30,
  role: "guest",
  creationDate: new Date(yearCreated2, monthCreated2, dayCreated2),
  lastLogin: new Date(yearLastLogin2, monthLastLogin2, dayLastLogin2),
  active: true,
  loginAttempts: 50,
  loginAttemptsNumber: 3
};

const yearCreated3 = 2023;
const monthCreated3 = 1;
const dayCreated3 = 15;
const yearLastLogin3 = 2024;
const monthLastLogin3 = 8;
const dayLastLogin3 = 1;

const userProfile3 = {
  name: "José",
  age: 29,
  role: "admin",
  creationDate: new Date(yearCreated3, monthCreated3, dayCreated3),
  lastLogin: new Date(yearLastLogin3, monthLastLogin3, dayLastLogin3),
  active: false,
  loginAttempts: 200,
  loginAttemptsNumber: 5
};

const yearCreated4 = 2023;
const monthCreated4 = 1;
const dayCreated4 = 15;
const yearLastLogin4 = 2024;
const monthLastLogin4 = 8;
const dayLastLogin4 = 1;

const userProfile4 = {
  name: "Maria",
  age: 35,
  role: "guest",
  creationDate: new Date(yearCreated4, monthCreated4, dayCreated4),
  lastLogin: new Date(yearLastLogin4, monthLastLogin4, dayLastLogin4),
  active: false,
  loginAttempts: 80,
  loginAttemptsNumber: 7
};

const users = [new User(userProfile1), new User(userProfile2), new User(userProfile3), new User(userProfile4)];

console.log(`Usuários admin: ${numberOfAdmins(users)}`);
const userNumber2 = 2;
const maximumLoginAttempts = 4;
checkLoginAttemptNumber(users[userNumber2], maximumLoginAttempts);
const userNumber0 = 0;
const userNumber3 = 3;
console.log(mostRecentlyLoggedIn(users[userNumber0], users[userNumber3]));

recentlyCreated(users[userNumber3]);
