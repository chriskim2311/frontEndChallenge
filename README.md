# Front end take home challenge


## To Run Code

1. Run `git clone https://github.com/chriskim2311/frontEndChallenge`
2. cd into file directory
3. npm install
4. npm start

## Overview of design and thought process
In order to make the code more functional and reusable I looked to see what aspects in the profile render method I could make into its own component. I decided that the input fields and drop down menu could use their own component since they were being reused. I utilized state and an onChange function to make the inputs controlled. I also utilized state to store boolean values and an emptyField array to help with empty field validation and rendering of correct classNames. I decided to make input and drop down menu a functional component since I did not have to utilize state, only props passed down from profile. My main focus was making the code readable, reusable and functional.

## Improvements if given more time

1. Utilize redux form for validation and utilize regex for data validation.
2. Use redux or some kind of store for data storage instead of utilizing and storing in state.
3. Add additional CSS to error and success messages and overall form.
4. Add a validation message component to be resuable.

