
# Cypress UI Automation

A demo website is used for automation using the Page Object Model (POM) pattern. POM helps in various things, such as easy management, less repetition, quick fixes, time savings, and improved maintenance. 

This project contains examples of:
### Test Data from JSON - cypress fixture
We have utilized 'cy.fixture()' in both 'failed-login.cy.js' and 'commands.js' files to fetch data from 'automationData.json'.

### Resulting in HTML
mochawesome is used to generate HTML result.

### Example of Loop and browser back
Example of using the browser back functionality with 'cy.go(-1)', and utilizing the '.each()' loop in 'inventory.cy.js'.