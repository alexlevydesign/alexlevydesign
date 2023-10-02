console.log("hi");

function buildTextElement(element,className,content) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

const projectCard = document.createElement("div");
    projectCard.classList.add("projectCardItem");

    const sortedProjectCards = [...projectCard].sort(function(a,b) {
        if ( a.title < b.title) {
            return -1
        }
        if (a.title > b.title) {
            return 1
        }
        if (a.title === b.title) {
            return 0;
        }
    });
    
    sortedProjectCards.forEach(function(projectCard) {
        //1. deconstruct the coffee object
    const {title, tag, description, image} = projectCard;

    const projectCardTitle = buildTextElement("h3", "projectCardTitle", title);

    projectCard.appendChild(projectCardTitle);

    div.appendChild(projectCard);
});

