// This file takes the quotes from data.js and puts them on the page.

// Turns a number like 1850 into "£1,850.00"
function formatMoney(amount) {
  return amount.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
}

// Turns "2026-09-02" into "2 Sept 2026"
function formatDate(dateText) {
  const date = new Date(dateText);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// Turns "waiting" into "Waiting"
function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Fill in the table: one row per quote
function showQuotes() {
  const tableBody = document.getElementById("quote-rows");

  for (const quote of quotes) {
    const row = document.createElement("tr");

    const customerCell = document.createElement("td");
    customerCell.textContent = quote.customer;

    const amountCell = document.createElement("td");
    amountCell.className = "amount";
    amountCell.textContent = formatMoney(quote.amount);

    const dateCell = document.createElement("td");
    dateCell.textContent = formatDate(quote.dateSent);

    const statusCell = document.createElement("td");
    const statusLabel = document.createElement("span");
    statusLabel.className = "status status-" + quote.status;
    statusLabel.textContent = capitalise(quote.status);
    statusCell.appendChild(statusLabel);

    row.append(customerCell, amountCell, dateCell, statusCell);
    tableBody.appendChild(row);
  }
}

// Fill in the three summary boxes: how many quotes, and how much they're worth
function showSummary() {
  for (const status of ["waiting", "won", "lost"]) {
    const matching = quotes.filter((quote) => quote.status === status);
    const total = matching.reduce((sum, quote) => sum + quote.amount, 0);

    document.getElementById(status + "-count").textContent = matching.length;
    document.getElementById(status + "-total").textContent = formatMoney(total);
  }
}

showSummary();
showQuotes();
