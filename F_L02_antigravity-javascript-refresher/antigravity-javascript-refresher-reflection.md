### 01_base_syntax.js
Project: JavaScript Refresher Lab 2
File: 01_base_syntax.js
Goal: practice basic console.log and variable naming using my own data
Limits: console.log and let only, no advanced syntax yet
Verification: I'll run it myself with node after you show me the plan

Using only 01_base_syntax.js as the target, write the code for this exercise:
- Log "Hello Lily" first.
- Declare two variables, myFullName and myfullname, with different values to show they don't collide since JS is case-sensitive.
- Log both variables.

Before writing anything, explain your plan first. Wait for my approval before editing the file.

Reflection: I've learned that Javascript is case sensitive and it treats them as a two different variable , and sa pag create ng ssariling prompt. And it is important to ai explain their plan first, and mag wait sa ating approval first, para hindi tayo ang nagpapa control sa AI.

### 02_Variables.js
Open 02_variables.js.

Do not modify anything yet.

Before we touch any code, explain these to me simply:
- the difference between string, number, and boolean
- what typeof actually tells us
- why "5" == 5 is true but "5" === 5 is false

After explaining, give me a short plan for how you'll implement this exercise using my own name and age as the data.

Reflection: Dati hinid ko pa alam ang difference == at ===, now alam ko na ang pinagkaiba nilang dalawa

### 03_functions.js
Implement 03_functions.js with three functions:
1. greet(name) — a normal function declaration
2. square(num) — written as an arrow function
3. calculator(a, b) — returns an object with both the sum and the product

Use my own values when testing them (my name, and any two numbers).

After editing, run node 03_functions.js for me.
If anything fails, explain the error to me first before fixing it.

Reflection: I learned here the difference of arrow function and the normal function


### 04_objects.js
Open 04_objects.js.

I want to create an aboutMe object with name, age, course, and an introduce() method.

Before writing the final code, explain to me why introduce() should be a regular function instead of an arrow function, since it needs to use this.name

Reflection: Kailangan ng regular function ang introduce() para gumana ang this.name,at wala naman sariling this ang arrow function

### 05_arrays.js
Implement 05_arrays.js using my own list of favorite snacks (at least 3 items).

After running the file, explain to me:
1. Which operation mutates the array.
2. Which operation returns a new array instead.
3. Why .map() matters before we get to React list rendering.

Reflection: I learned here naman na which array methods change the original array and which return a new one

### 06_control_structures.js
Open 06_control_structures.js. The grade checker I wrote has a bug, every score of 70 or higher is printing "C" instead of the correct letter.

First, reproduce the output so I can see it's wrong.
Second, explain the root cause.
Third, propose the smallest safe fix.

Do not edit until I approve the fix. Then run node 06_control_structures.js again to confirm.

Reflection: I just learned here how conditional statement works

### 07_dom.html
Open 07_dom.html.

Do not modify it yet.

Explain to me:
1. What element the button targets.
2. What event listener is used.
3. Why setTimeout waits before changing the paragraph.
4. What I should click and observe in the browser.
Create a browser verification checklist for 07_dom.html — how to open it, what to click, what input to type, what should change immediately, and what should change after 2 seconds.
Rewrite the button and setTimeout behavior as one React functional component, keeping the same behavior: button click asks for a color, background changes, paragraph updates after 2 seconds. Explain what changed from direct DOM mutation to state-driven UI.

Reflection: I just learned here how DOM works, and i understand it much better now when i tried it in browser 

### 08_essential_features.js
Open 08_essential_features.js.

Explain to me:
1. How .map() transforms values.
2. How destructuring reads object properties.
3. How spread copies before adding.
4. Why all three matter in React.
Explain this line like I'm new to JavaScript:

const newNumbers = [...numbers, 4, 5];

Include what the ... does, whether the original array changes, and how this idea is used in React state updates.

Reflection: I just learned here how to use and when to use spread method 
