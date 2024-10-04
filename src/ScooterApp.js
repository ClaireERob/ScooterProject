// require the User and Scooter classes - see where they can be used in ScooterApp.js
const User = require("./User.js");
const Scooter = require("./Scooter.js");

class ScooterApp {
  constructor(){
    this.registeredUsers = [];
    this.stations = {};
  }
  registerUser(username, password, age) {
    for (let i = 0; i < this.registeredUsers.length; i++ ) {
      if (this.registeredUsers[i].username === username){
        throw new Error ("Already registered");
      } }
      
      
      if (age < 18) {
        throw new Error ("Too young to register");
      } else {
        const user = new User(username, password, age)
        this.registeredUsers.push(user);
        console.log("User has been registered");
        return user;
      }
    }
    
  
  loginUser(username, password) {
    for (let i = 0; i < this.registeredUsers.length; i++ ) {
      if (this.registeredUsers[i].username === username){
      this.registeredUsers[i].login(password);
      return this.registeredUsers[i];
      } 
    }
      
      throw new Error ("Username or password is incorrect")
    }
  


  logoutUser(username) {
    for (let i = 0; i < this.registeredUsers.length; i++ ) {
      if (this.registeredUsers[i].username === username){
      this.registeredUsers[i].logout();
      return this.registeredUsers[i];
      } 
    }
      
      throw new Error ("No such user is logged in")
    }



  createScooter(station) {
      if (!this.stations[station]) {
        throw new Error ("No such station")
      }
        const newScooter = new Scooter(station);
        this.stations[station].push(newScooter)
        console.log(newScooter);
        return newScooter;
      }
  
  

  dockScooter(scooter, station) {
    if(!this.stations[station]) {
      throw new Error ("No such station")
    } else if (this.stations[station].includes(scooter)){
      throw new Error ("Scooter already at station")
    } else {
      scooter.dock(station);
      this.stations[station].push(scooter);
      console.log("Scooter is docked");
    }
    }
    


    
  

  rentScooter(scooter, user) {

  }

  print() {
    console.log()
  }

}

module.exports = ScooterApp
