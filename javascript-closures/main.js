function graduate(credential) {
  return function fullName(fullName) {
    return `${fullName} ${credential}`;
  };
}
const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(`medicalSchool('Dylan De Vei'): ${medicalSchool('Dylan De Vei')}`);
console.log(`lawSchool('Dylan De Vei'): ${lawSchool('Dylan De Vei')}`);
