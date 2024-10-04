class Scooter {

 static nextSerial = 1;

 constructor(station){
  this.station = station;
  this.user = null;
  this.serial = Scooter.nextSerial++;
  this.isBroken = false;
  this.charge = 100;

 }

 rent(user) {
  if (this.charge < 20){
    throw new Error ("Scooter needs to charge")
  } else if (this.isBroken){
    throw new Error ("Scooter needs repair")
  } else {
    this.user = user;
    this.station = null;
    return this.serial;

  }
  
  }
dock(station) {
  this.station = station;
  this.user = null;
}

 }





module.exports = Scooter
