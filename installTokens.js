//Script d'installation des CSS dans Storybook.
const destinationModule = "assets";

//Copie les fichiers du composant dans le répertoire stories de Storybook
function copyModuleFile() {
  var copyfiles = require("copyfiles");

  var options = { up: 4 };
  copyfiles(
    [
      "node_modules/@baraka/tokens/build/css/*",
      destinationModule,
    ],
    options,
    function () {
      console.log("Copie des styles réussie");
      console.log(destinationModule);
      console.log("Current directory: " + process.cwd());
    }
  );
}

//Détection du module où la composante est installé
function getModuleName() {
  var data;

  try {
    data = require("./package.json");
    return data.name;
  } catch (ex) {
    return "";
  }
}

//Installation de la composante
var moduleName = getModuleName();
var sitename;
if (moduleName != "") {
  console.log("Copie des styles dans Storybook.");
  console.log("Module Name", moduleName);
  copyModuleFile();
} else {
  console.log("Aucun script à rouler dans le module même.");
  console.log("Module Name", moduleName);
}
