# komputer-store
JavaScript project meant to show the interaction between JavaScript and HTML/CSS.

## Project Requirements
1. The page should be divided into 4 sections
    1. The bank
    2. Work
    3. Laptops
    4. Laptop info section

2. The laptops must each have
    1. A unique name
    2. A price
    3. A description
    4. A feature list
    5. An image

3. The bank section should show
    1. Current balance in the bank that the user can use to buy laptops
    2. A Get A Loan button so the user can get a loan of a value the choose
    3. An Outstanding Loan amount of the amoun the user owes to the bank (only visible after the user makes a loan)

4. The bank section has 3 contraints
    1. The user cannot get a loan double the bank balance
    2. The user cannot get a loan if they already have an outstanding loan

5. The work section should show
    1. A current workpay amount
    2. A Bank button so the user can transfer their current salary to their bank
    3. A Work button so the user can earn more money of 100 per click
    4. A Repay A Loan button so the user can use their workpay to pay back their loan (only visible after the user makes a loan)

6. The work section has the constraint that if the user have an outstanding loan then 10% of their salary goes directly to the loan

7. The laptop section should show
    1. A laptop select box containing 4 laptops
    2. A laptop feature list

8. The laptop info section should show for the currently selected laptop
    1. The image
    2. The name
    3. The description
    4. The price
    5. A Buy Now button

9. The Buy Now button have 2 contraints
    1. If the user have enough money in the bank, then it should subtract the price of the laptop from their balance and display a congratulatory message
    2. If the user doesn't have enough money in the bank, then it should show a message that the user is missing funds

