let listCount = 0;


// Create a new perfume collection
function createList() {
    listCount++;
    const container = document.getElementById("ListsContainer");
    const listId = `collection-${listCount}`;


    // Create a dropdown-style section
    const section = document.createElement("div");
    section.classList.add("collection");


    section.innerHTML = `
        <button class="dropdown-btn" onclick="toggleDropdown('${listId}')">
            Perfume Collection ${listCount} ▼
        </button>
        <button class="delete-btn" onclick="deleteCollection(this)">🗑 Delete Collection</button>


        <div id="${listId}" class="dropdown-content">
            <ul>
                <li>Sample Perfume 1</li>
                <li>Sample Perfume 2</li>
            </ul>


            <input type="text" id="item-${listCount}" placeholder="Enter Perfume Name">


            <button onclick="insertBeforeItem('${listId}', '${listCount}')">Insert (Before)</button>
            <button onclick="appendItem('${listId}', '${listCount}')">Append</button>
            <button onclick="replaceItem('${listId}', '${listCount}')">Replace</button>
            <button onclick="removeItem('${listId}')">Remove Last</button>
        </div>
    `;


    container.appendChild(section);
}


// Toggle dropdown visibility
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("show");
}


// Insert item at the beginning
function insertBeforeItem(listId, inputId) {
    const list = document.querySelector(`#${listId} ul`);
    const value = document.getElementById(`item-${inputId}`).value.trim();
    if (!value) return alert("Enter a perfume name first!");


    const li = document.createElement("li");
    li.textContent = value;
    list.insertBefore(li, list.firstElementChild);
}


// Append item at the end
function appendItem(listId, inputId) {
    const list = document.querySelector(`#${listId} ul`);
    const value = document.getElementById(`item-${inputId}`).value.trim();
    if (!value) return alert("Enter a perfume name first!");


    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
}


// Replace first item in list
function replaceItem(listId, inputId) {
    const list = document.querySelector(`#${listId} ul`);
    const value = document.getElementById(`item-${inputId}`).value.trim();
    if (!value) return alert("Enter a new perfume name first!");
    if (!list.firstElementChild) return alert("List is empty!");


    const li = document.createElement("li");
    li.textContent = value;
    list.replaceChild(li, list.firstElementChild);
}


// Remove last item in the list
function removeItem(listId) {
    const list = document.querySelector(`#${listId} ul`);
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    } else {
        alert("Nothing to remove!");
    }
}


//  Delete a single perfume collection
function deleteCollection(button) {
    const section = button.parentElement;
    section.remove();
}


// Start over — clear all collections
function startOver() {
    const confirmReset = confirm("Are you sure you want to remove all perfume collections?");
    if (confirmReset) {
        document.getElementById("ListsContainer").innerHTML = "";
        listCount = 0;
    }
}
