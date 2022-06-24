// tab icons (node list)
// list of html elements with class .tab-item
const tabItems= document.querySelectorAll(".tab-item");

// tab contents (node list)
// list of html elements with class .tab-content-item
const tabContentItems = document.querySelectorAll(".tab-content-item");

// ---------------------------------
// defines functions

// selects a tab content item
// param e is referenced using "this" keyword
function selectItem(e) {

    // removes all bottom red border below icon 
    // by removing "tab-border" class
    removeBorder();

    // removes content below icon 
    // by removing "show" class
    removeShow();

    // adds bottom red border below selected icon
    this.classList.add("tab-border");

    // gets content item from DOM
    // when user clicks on an item, we get that element's id
    // id tags from line 71, 86, 131
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // adds "show" class to selected id tag
    tabContentItem.classList.add("show");
}

// removes all bottom red border below icon
function removeBorder() {
    tabItems.forEach(item => item.classList.remove("tab-border"));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove("show"));
}

// ---------------------------------
// implements functions

// listens for tab click from user
tabItems.forEach(item => item.addEventListener("click", selectItem));