/* 
 --- Introduction to JavaScript ES6 Classes

 - You can think of classes as template/blueprints for creating objects. 
 - They usually contain a bunch of Fields/Properties and Methods that are used to work with the data of our objects (Class intances)
 - You can think of our Class fields/properties as normal JavaScript variables but we don't use "let" or "const" to define them. 
 - You can think of Class methods as normal JS functions. 
 - In another words, you can say that a Property is a variable inside a class, and a Method is a function inside a class.
 - A class will usually have a special method called a Constructor Method. This method has the name "constructor", and it has to be unique in the class. Meaning a class cannot have more than one constructor method.
 - Class properties and methods can also be declared as static. When we have a static property or method, we can access them without creating an instance of the class. For instance, imagine the clas User, that has a static method called uniqueId(). We can access this unique id with a code like this: User.uniqueId(). There is another example in the actual Contact demo class.

 - Read more about classes here at MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

 - Below is a demo Contact class that has a few fields with a save method, and a few instance methods and one static method
 
*/

import fs from "fs"

class Contact {
  // Properties
  name
  phone
  email
  // Constructor
  constructor(name, phone, email) {
    this.name = name
    this.phone = phone
    this.email = email
  }
  // Methods
  save() {
    const db = "./db.json"
    fs.readFile(db, "utf8", (err, data) => {
      if (err) throw err
      const contacts = JSON.parse(data)
      contacts.push({ name: this.name, phone: this.phone, email: this.email })
      console.log(data)

      fs.writeFile(db, JSON.stringify(contacts), (err) => {})
    })
  }

  getInitials() {
    return this.name
      .split(" ")
      .map((name) => name[0].toUpperCase())
      .join("")
  }
  static getUniqueId() {
    return Math.round(Math.random() * 1000)
  }
}

console.log(Contact.getUniqueId())

const contactOne = new Contact("Ahmad Jabbie", 3100948, "ahmad@jcc.com")
const contactTwo = new Contact("Musa", 3100948, "musa@jcc.com")
const contactThree = new Contact("Trawally", 3100948, "tra@jcc.com")

// console.log(contactOne)
console.log(contactOne.getInitials())

/* contactOne.save()
setTimeout(() => {
  contactTwo.save()
}, 1000)

setTimeout(() => {
  new Contact("Eliyasu", 3100948, "eli@jcc.com").save()
}, 2000) */

class Car {}

class Benz extends Car {}

class Hyundai extends Car {}
