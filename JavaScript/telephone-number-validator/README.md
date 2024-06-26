﻿# freeCodeCamp Telephone Number Validator (certification project)

## Description
This is the third project required for completing the JavaScript Algorithms and Data Structures module (see below for a complete list of User Stories).

## Strategy

I decided to take a more organized approach and keep track of the amount of time spent on the project in order to identify where I need to improve.

### Stage 1: PLANNING

- Details for the user interface + some personal additions (like a background image or symbole for buttons along the standard "Check" and "Clear" labels)
- I analyzed the requirements, identified the inputs and outputs + the constraints for validity.
- First approach: a series of IF statements to check if the input begins with a special character, space, or number other than one, if the input contains more than 3 non-consecutive spaces, letters, etc.
- Second approach: I used a regular expression

TOTAL TIME (including regex testing on regexr): 10 hours

### Stage 2: MAKING THE USER INTERFACE 

- I used plain HTML and CSS, experimenting with variables for colors.
- I opted for a fixed width layout given the fact that the validator should resemble a cellphone and doesn't take much space in the page.

![User Interface](https://github.com/JA-307020/freeCodeCamp/blob/main/JavaScript/telephone-number-validator/validator-user-interface.jpg) 

TOTAL TIME: 5 hours

### Stage 3: CODING THE VALIDATION SCRIPT 
### Stage 4: MANUAL TESTS

The last two stages + making minor tweaks needed to pass the tests on freeCodeCamp took around 2 hours. 
Apparently the test suite does not accept a line break element inside the results-div innerHTML. 

The manual tests were not really necessary given the fact that I already tested the regex before, it was a personal choice to build a habit for making sure all works according to plan.

## Personal conclusion

Beginning with a detailed plan made the coding phase less confusing and less time-consuming. Also it provided the information I needed to create this readme file.

## User Stories

1. You should have an input element with an id of "user-input"
2. You should have a button element with an id of "check-btn
3. You should have a button element with an id of "clear-btn"
4. You should have a div, span or p element with an id of "results-div"
5. When you click on the #check-btn element without entering a value into the #user-input element, an alert should appear with the text "Please provide a phone number"
6. When you click on the #clear-btn element, the content within the #results-div element should be removed
7. When the #user-input element contains 1 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 555-555-5555"
8. When the #user-input element contains 1 (555) 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 (555) 555-5555"
9. When the #user-input element contains 5555555555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 5555555555"
10. When the #user-input element contains 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text `"Valid US number: 555-555-5555"
11. When the #user-input element contains (555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: (555)555-5555"
12. When the #user-input element contains 1(555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1(555)555-5555"
13. When the #user-input element contains 555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 555-5555"
14. When the #user-input element contains 5555555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 5555555"
15. When the #user-input element contains 1 555)555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 1 555)555-5555"
16. When the #user-input element contains 1 555 555 5555 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 555 555 5555"
17. When the #user-input element contains 1 456 789 4444 and the #check-btn element is clicked, the #results-div element should contain the text "Valid US number: 1 456 789 4444"
18. When #user-input contains 123**&!!asdf# and #check-btn is clicked, #results-div should contain the text "Invalid US number: 123**&!!asdf#"
19. When the #user-input element contains 55555555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 55555555"
20. When the #user-input element contains (6054756961) and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (6054756961)"
21. When the #user-input element contains 2 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2 (757) 622-7382"
22. When the #user-input element contains 0 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 0 (757) 622-7382"
23. When the #user-input element contains -1 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: -1 (757) 622-7382"
24. When the #user-input element contains 2 757 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2 757 622-7382"
25. When the #user-input element contains 10 (757) 622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 10 (757) 622-7382"
26. When the #user-input element contains 27576227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 27576227382"
27. When the #user-input element contains (275)76227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (275)76227382"
28. When the #user-input element contains 2(757)6227382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2(757)6227382"
29. When the #user-input element contains 2(757)622-7382 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 2(757)622-7382"
30. When the #user-input element contains 555)-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 555)-555-5555"
31. When the #user-input element contains (555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: (555-555-5555"
32. When #user-input contains (555)5(55?)-5555 and #check-btn is clicked, #results-div should contain the text "Invalid US number: (555)5(55?)-5555"
33. When the #user-input element contains 55 55-55-555-5 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 55 55-55-555-5"
34. When the #user-input element contains 11 555-555-5555 and the #check-btn element is clicked, the #results-div element should contain the text "Invalid US number: 11 555-555-5555"

Fulfill the user stories and pass all the tests below to complete this project. Give it your own personal style. Happy Coding!
