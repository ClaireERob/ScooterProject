class User {
 constructor(username, age, password){
  this.username = username;
  this.age = age;
  this.password = password; 
  this.loggedIn = false;
 }

login(password) {
  if (this.password === password){
    this.loggedIn = true
  } else { 
    throw new Error ("Incorrect password")
}
}

logout() {
  this.loggedIn = false;
}

}

module.exports = User
