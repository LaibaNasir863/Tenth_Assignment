
function getTicket(ticketId) {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            if (ticketId === 101) {
                resolve({
                    ticketId: 101,
                    customerName: "Ali",
                    status: "Open"
                });
            } 
            else if (ticketId === 102) {
                resolve({
                    ticketId: 102,
                    customerName: "Ahmed",
                    status: "In Progress"
                });
            } 
            else if (ticketId === 103) {
                resolve({
                    ticketId: 103,
                    customerName: "Sara",
                    status: "Resolved"
                });
            } 
            else {
                reject("Ticket not found! Please enter a valid ID.");
            }

        }, 2000);
    });
}
async function checkTicket() {
    const ticketId = Number(
        document.getElementById("ticketId").value
    );

    if (!ticketId || ticketId <= 0) {
        console.log("Please enter a valid Ticket ID.");
        return;
    }

    console.log("Loading ticket details...");

    await getTicket(ticketId)
        .then(function(ticket) {
            console.log("     SUPPORT TICKET DETAILS");
            console.log("Ticket ID     : " + ticket.ticketId);
            console.log("Customer Name : " + ticket.customerName);
            console.log("Ticket Status : " + ticket.status);
        })
        .catch(function(error) {
            console.log("ERROR: " + error);
        });
}
