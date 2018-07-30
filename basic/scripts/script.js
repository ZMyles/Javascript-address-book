"use strict"

class MyContacts {
    // constructor() {

    // }
      display(userInfo) {
        // Get contacts container
        const container = document.querySelector(".contactsContainer");
        // Create li element
        const li = document.createElement("li");
        // Add class to .info-block section
        // infoBlock.className = "info-block";
       li.classList.add("contact");

        // Insert HTML into infoBlock
        li.innerHTML = `
        <div class="infoContainer">
                    <p>Name: ${userInfo.name}</p>
                    <p>Email: ${userInfo.email}</p>
                    <p>Phone: ${userInfo.phone}</p>
                    <p>Relation: ${userInfo.relation}</p>
                </div>
        `;

        // Create a tag
        const deleteBtn = document.createElement("a");
        // Add class to a tag
        deleteBtn.classList.add("deleteBtn");
        // Insert a tag HTML
        deleteBtn.innerHTML = `
        <i class="material-icons">delete</i>
        `;

        // Append infoBlock to .sec-container & deleteBtn to infoBlock
        li.appendChild(deleteBtn);
        container.appendChild(li);


    }
      deleteAt() {

    }
      add() {

      }
}



class UserInfo {
    constructor(name, email, phone, family) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.family = family;
    }
}
// Add contact Event listener
document.querySelector(".contactForm").addEventListener("sumbit", function(e){
    // Get input values
    const name = document.querySelector("#name").value,
          email = document.querySelector("#email").value,
          phone = document.querySelector("#phone").value,
          relation = document.querySelector("#relation").value;

     const contacts = new MyContacts();
     
     const userInfo = new UserInfo(name, email, phone, relation);

     contacts.display(userInfo);
     console.log("submited");

     e.preventDefault();

}); 






















































