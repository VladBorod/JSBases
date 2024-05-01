# NPM practice project. 
## Hard password generator.

----------------------------------------------------------------

This project contains only function for hard password generation.
User can choose password length.
For password generation used such symbols as:
- All numbers.
- All latin letters in bouth cases.
- The most common characters.

----------------------------------------------------------------

This is the list of symbols presented in function:
<ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=~-.,>

----------------------------------------------------------------

Usage example:

const pg = require('./node_modules/trash_hard_password_generator/passGen');
const password = pg.genPassword(12);
console.log(password);

----------------------------------------------------------------

Thank you for using this package.

----------------------------------------------------------------

--- Created by VladBorod. 
--- No contact information available, coz we all know that much better npm projects are allowed.

----------------------------------------------------------------


