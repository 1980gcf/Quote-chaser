# Quote Chaser – Plan

## What the app does

Tradespeople (plumbers, electricians, builders, decorators and so on) send lots of
quotes to customers. Many customers never reply, and it's easy to forget to follow
them up. Money gets left on the table.

**Quote Chaser** keeps track of every quote you've sent and reminds you to chase the
ones that have gone quiet.

For each quote it records:

- **Customer name** – who the quote is for
- **Amount** – how much the job is worth, in pounds (£)
- **Date sent** – when you sent the quote
- **Status** – one of:
  - **Waiting** – no answer yet
  - **Won** – the customer said yes
  - **Lost** – the customer said no (or went with someone else)

The finished app will let you:

1. See all your quotes on one page (the **dashboard**)
2. Add new quotes and change their status
3. Spot which quotes need chasing (e.g. waiting for more than 7 days)
4. Keep your quotes saved so they're still there tomorrow
5. Send a polite reminder email to the customer with one click

## How we'll build it

We're keeping things as simple as possible. The app will be made of plain web files
that any web browser (Chrome, Safari, Edge) can open directly. No special software
needed to start.

### Words you'll see

| Word | What it means |
|------|---------------|
| **HTML** | The language that describes *what's on* a web page – headings, tables, buttons. Think of it as the bricks. |
| **CSS** | The language that describes *how things look* – colours, spacing, fonts. Think of it as the paint and plaster. |
| **JavaScript (JS)** | The language that makes a page *do things* – react to clicks, do sums, fill in tables. Think of it as the wiring. |
| **Dashboard** | The main page that gives you an overview at a glance. |
| **Fake data** (or "dummy data") | Made-up example quotes so we can see the page working before we build the real thing. |
| **Array** | A list of things in JavaScript, written inside square brackets `[ ]`. |
| **Object** | A bundle of named details in JavaScript, written inside curly brackets `{ }` – e.g. one quote with its name, amount, date and status. |
| **Database** | A place to store information permanently so it isn't lost when you close the page. |
| **Browser storage** (localStorage) | A small storage area built into every web browser. A simple first step before a proper database. |
| **Server** | A computer on the internet that runs your app for other people and can do things like send emails. |
| **Git / commit** | A way of saving snapshots of your code so you can go back if something breaks. |

## Files we'll need

| File | What it's for | When it arrives |
|------|---------------|-----------------|
| `PLAN.md` | This plan. | Step 1 |
| `index.html` | The dashboard page itself – the structure. | Step 1 |
| `style.css` | How the page looks. | Step 1 |
| `data.js` | The list of fake quotes. Kept separate so we can swap it for real data later without touching anything else. | Step 1 |
| `app.js` | The code that reads the quotes and puts them on the page. | Step 1 |
| (later) server files | Only needed when we get to sending emails. | Step 7+ |

## Build order (small steps)

Each step should be small enough to finish, test in the browser, and understand
before moving on.

1. **Dashboard with fake data** ✅ *(this step)*
   A page showing a table of made-up quotes (customer, amount, date sent, status),
   plus simple totals at the top. Nothing is saved; nothing can be edited yet.

2. **"Days waiting" and chase flag**
   Work out how many days each quote has been waiting, and highlight any that have
   been waiting more than 7 days so you know who to chase.

3. **Filter and sort**
   Buttons to show only Waiting / Won / Lost quotes, and to sort by date or amount.

4. **Change a quote's status**
   A button or dropdown on each row to mark a quote as Won or Lost.

5. **Add a new quote**
   A simple form (customer name, amount, date) that adds a quote to the table.

6. **Save quotes in the browser**
   Use browser storage so your quotes are still there after you close the page.
   Remove the fake data at this point.

7. **Put it online and add a proper database**
   Move the app onto a server so you can use it from your phone and your laptop,
   with quotes stored in a real database.

8. **Reminder emails**
   Add customer email addresses and a "Chase" button that sends a friendly
   follow-up email.

We'll decide the exact tools for steps 7 and 8 when we get there – no need to
worry about them yet.

## How to open the app (step 1)

1. Find the `Quote-chaser` folder on your computer.
2. Double-click `index.html`. It will open in your web browser.
3. That's it – no installing anything.

To see a change you've made to the code, save the file and refresh the browser page.
