### Component JSX
```

// ==========================================
// 1. IMPORTS & SETUP
// ==========================================
// Import React and the useState hook
// Import the external CSS stylesheet


// ==========================================
// 2. STATE CONFIGURATION
// ==========================================
// Define the main 'todos' state array (Defaults to an empty array [])
// Structure will look like: [{ heading: "Title", lists: ["item1", "item2"] }]

// Define 'headingInput' state string to track the main category text box (Defaults to "")

// Define 'listInputs' state object to track item boxes for each card (Defaults to {})
// Structure will look like: { "0": "text for card 0", "1": "text for card 1" }


// ==========================================
// 3. HANDLER FUNCTIONS (LOGIC)
// ==========================================

// Function: Add a brand new Heading Card
// - Check if headingInput is not empty (ignoring white spaces)
// - If valid, duplicate 'todos' state and append a new object: { heading: headingInput, lists: [] }
// - Clear out the main headingInput text box back to ""


// Function: Track typing inside an individual card's text box
// - Receives two parameters: the 'index' of the card, and the current 'value' typed
// - Update the 'listInputs' object: preserve old keys, then map the current [index] to the new value


// Function: Add a new sub-list item into a specific card
// - Receives one parameter: the 'index' of the targeted card
// - Check if text exists in 'listInputs' for this specific index
// - If valid, create a copy of the 'todos' array
// - Target the specific card using the index, and push the text string into its '.lists' array
// - Save the updated array back to the 'todos' state
// - Clear out only this card's specific input inside the 'listInputs' object by setting [index]: ""


// Function: Delete an entire heading card
// - Receives one parameter: the 'index' of the card to remove
// - Create a copy of the 'todos' array
// - Use the .splice() method to remove exactly 1 item at that target index
// - Save the shortened array back to the 'todos' state


// ==========================================
// 4. UI RENDERING (JSX)
// ==========================================
// Return the JSX layout (Wrap everything in a React Fragment <> </>)

  // Create a main container div for the top section
    // Add the main title heading ("My Todo List")
    
    // Create an input group for adding headings:
      // - Bind its 'value' attribute to the 'headingInput' state
      // - Add an 'onChange' event that captures 'e.target.value' and updates 'headingInput' state
      // - Create a button that fires the 'handleAddTodo' function when clicked

  // Create a main container div for the cards section
    // Loop through the 'todos' array using .map((todo, index) => ...)
    // Return a Card wrapper div for each loop cycle (Don't forget to pass key={index}!)

      // Inside the Card Header:
        // - Display the current card's heading text ({todo.heading})
        // - Create a delete button that triggers an arrow function: () => handleDeleteTodo(index)

      // Inside the Card Body:
        // - Create an unordered list <ul>
        // - Inside the <ul>, loop through the current card's sub-items using {todo.lists.map((list, listIndex) => ...)}
        // - For each sub-item, return an <li> displaying the text string ({list}) with key={listIndex}

      // Inside the Card Footer (Adding items):
        // - Create a text input for sub-items
        // - Bind its 'value' attribute to the specific key in state: listInputs[index] || ""
        // - Add an 'onChange' event that triggers: handleListInputChange(index, e.target.value)
        // - Create an "Add List" button that triggers an arrow function: () => handleAddList(index)


// Export the component as the default export
```

