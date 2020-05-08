# Overview
The goal of this task is to create a pricing page with 3 cards:
* Agency
* Business
* Solo

Each card will show a price depending on selectors chosen.

The finished page should match the design in the images provided as closely as possible, and be fully responsive down to 320px. When the page reaches 939px, it should show one card per row, with 3 rows total.

------------------------------------------------

# Dynamic selectors
There will be two different types of selectors that changes the price, handled with Javascript.

When any selector is changed, the prices on each card updates accordingly (see "Cards & Prices" below)

### Monthly/Annual
* When Annual is selected, the text underneath the price says `per month, paid annually*`
* When Monthly is selected, the text underneath the price says `per month*`

### USD/GBP/EUR
* When USD is selected, the money symbol changes to $
* When GBP is selected, the money symbol change to £
* When EUR is selected, the money symbol changes to €

------------------------------------------------

# Cards & Prices
Each card should should contain 6 data price attributes for each possible combination, which is then used to display the price depending on the selectors chosen.

The pricing is as follows:
* Agency
   * Annual USD - $67.99
   * Annual GBP - £53.99
   * Annual EUR - €63.99
   * Monthly USD - $79.99
   * Monthly GBP - £63.99
   * Monthly EUR - €74.99

* Business
   * Annual USD - $33.99
   * Annual GBP - £26.99
   * Annual EUR - €31.99
   * Monthly USD - $39.99
   * Monthly GBP - £31.99
   * Monthly EUR - €37.99

* Solo
   * Annual USD - $16.99
   * Annual GBP - £13.99
   * Annual EUR - €15.99
   * Monthly USD - $19.99
   * Monthly GBP - £15.99
   * Monthly EUR - €18.99

------------------------------------------------

# Notes
* No libraries other than jQuery can be used (e.g. no bootstrap)
* End result should only contain an HTML file, a CSS file, and a JS file
* If you need clarification on something, ask!
