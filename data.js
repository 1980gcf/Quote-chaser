// FAKE DATA – made-up quotes so we can see the dashboard working.
// Each { ... } is one quote. Dates are written year-month-day.
// Status must be exactly "waiting", "won" or "lost".
// In a later step this list will be replaced with real, saved quotes.

const quotes = [
  { customer: "Sarah Thompson", amount: 1850, dateSent: "2026-09-02", status: "waiting" },
  { customer: "Dave Patel", amount: 420, dateSent: "2026-09-05", status: "won" },
  { customer: "Emma Wilson", amount: 3200, dateSent: "2026-09-08", status: "lost" },
  { customer: "James O'Connor", amount: 675, dateSent: "2026-09-12", status: "waiting" },
  { customer: "Priya Shah", amount: 12500, dateSent: "2026-09-15", status: "won" },
  { customer: "Tom Roberts", amount: 950, dateSent: "2026-09-19", status: "waiting" },
  { customer: "Linda Evans", amount: 2300, dateSent: "2026-09-22", status: "lost" },
  { customer: "Mark Hughes", amount: 5400, dateSent: "2026-09-26", status: "waiting" },
];
