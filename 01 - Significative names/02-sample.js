const isAdmin = true;

function getAccess(user) {
  if (isAdmin && user.isAdmin) {
    console.log("Acesso permitido ao administrador.");
  } else {
    console.log("Acesso negado.");
  }
}

const user = { nome: "João", isAdmin: true };
getAccess(user);
