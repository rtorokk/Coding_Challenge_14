// Task 2: Adding Support Tickets Dynamically

// Add event listener to the add ticket button
document.getElementById('addTicketButton').addEventListener('click', addSupportTicket); // Add event listener to the add ticket button

// Function to add a support ticket
function addSupportTicket() {
    const ticketContainer = document.getElementById('ticketContainer'); // Get the ticket container

    // Create a new ticket in the form of a div
    const ticket = document.createElement('div'); // Create a new ticket in the form of a div
    ticket.classList.add('ticket'); // Add the ticket class to the ticket div

    // Create a new h3 element for the name
    const name = document.createElement('h3'); // Create a new h3 element for the name
    name.textContent = "Customer: Alice Johnson"; // Set the text content of the name element
    
    // Create a new p element for the issue
    const issue = document.createElement('p'); // Create a new p element for the issue
    issue.textContent = "Issue: My phone will not turn on."; // Set the text content of the issue element

    // Create a new span element for the priority
    const priority = document.createElement('span'); // Create a new span element for the priority
    priority.classList.add('priority', 'VeryHigh'); // Add the priority and VeryHigh classes to the priority element
    priority.textContent = "Priority: VeryHigh"; // Set the text content of the priority element


    // Create a new button element for the resolve button
    const resolveButton = document.createElement('button'); // Create a new button element for the resolve button
    resolveButton.textContent = "Resolve"; // Set the text content of the resolve button
    resolveButton.classList.add('resolveButton'); // Add the resolveButton class to the resolve button

    // Append the elements to the ticket
    ticket.appendChild(name); // Append the name element to the ticket
    ticket.appendChild(issue); // Append the issue element to the ticket
    ticket.appendChild(priority); // Append the priority element to the ticket
    ticket.appendChild(resolveButton); //  Append the resolve button to the ticket
    ticketContainer.appendChild(ticket); // Append the ticket to the ticket container
}

// Task 3: Converting NodeLists to Arrays for Bulk Updates

// Function to highlight high priority tickets
function highlightHighPriority() {
    const highPriorityTickets = document.querySelectorAll(".VeryHigh"); // Get all tickets with the VeryHigh class
    const ticketsArray = Array.from(highPriorityTickets); // Convert the NodeList to an array

    ticketsArray.forEach(ticket => {
        ticket.parentElement.style.border = "2px groove red"; // Change the border of the ticket to a red groove
        ticket.parentElement.style.backgroundColor = "HotPink"; // Change the background color of the ticket to HotPink
    });
}

// Call function when a ticket is added
document.getElementById("addTicketButton").addEventListener("click", highlightHighPriority);
