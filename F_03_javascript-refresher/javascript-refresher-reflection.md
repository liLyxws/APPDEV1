# JavaScript Refresher Reflection

### 00_script_in_html.html
I learned that para mag run and JavaScript sa HTML, kinakailangan ito ng `<script>` tag, na pwede siyang inline or gamit ang `src` naman kapag sa separate ang file. And dapat nasa dulong part ng body ang `<script>` tag bacause maglload muna ang page bago tumakbo ang js

### 01_base_syntax.js
JavaScript is a Case sensitive. There is a difference between`myFullName` and `myfullname`. I also learned about variable name na `$` o `_` ang simula

### 02_variables.js
Here i learned naman about basic data types like string, number, at boolean, and yung `typeof` para malaman kung what type of a value or variable is this. also there's a difference of loose queal `==` and strict equal `===`

### 03_functions.js
I learned about regular function and arrow function like na pwedeng mag return ng object para makapag return ng dalawang values

### 04_objects.js
I learned na pwede magdagdag ng bagong property sa object kahit nagawa na

### 05_arrays.js
Here, I used the `push`method para magdagdag sa dulo and `shift` para magtanggal sa unahan naman. Yung `map` naman ay gumagawa ng new array nang hindi ginagalaw ang original

### 06_control_structures.js
Here i recall about using condition statements like `if/else`, `for`, and `while` loop

### 07_dom.html
Here naman i saw kung papaano nababago ng JavaScript and mismong page. I used `getElementById` to get the element, `addEventListener` for sa pag click, then `setTimeout` to mag-update the text after 2 seconds

### 08_essential_features.js
Dito naman nat ry ko ang destructuring at spread. And i also learned na ang `map` ay pwede din gamitin para mag loop

### 09_tricky_parts.js
I learned na kapag `const copy = original`, pareho lang sila ng array kaya nababago rin yung original. Kailangan ng spread para makagawa ng totoong copy

### 10_let_const.js
Ang `let` ay mutable meaning it can be modified, ang `const` naman ay hindi, this is immutable

### 11_arrow_functions.js
Arrow function is mas pinaikling function compare sa regular way of doing. Kapag isang line lang, wala nang `return` at curly braces, katulad nalang ng `n => n * 2`

### 12_destructuring.js
Here I learned naman na pwede palang kunin ang values mula sa object o array sa isang line lang. Sa object, dapat kapareho ng property name ang variable

### 13_spread_rest.js
Here i learned na may parehong `...` pero magkaiba ang gamit dito. Ang spread ay para ikalat yung laman ng array o object, ang rest ay para pagsamahin ang maraming arguments sa isang array

### 14_classes_inheritance.js
`class` is the blueprint para sa mga object. `extends`, namamana ng `Student` yung `sayHello` mula sa `Person`, hindi ko na kailangang ulitin

### 15_modules_export.js
Here i learned about sa dalawang klase ng export. Yung `export default` ay isa lang per file, at yung named export ay pwedeng marami

### 16_modules_import.js
The default export ay walang curly braces kapag iimport, but the named export naman ay meron. Also dapat tama ang path na may `./` at `.js`. Kapag mali ay mag eerror

### 17_logical_operators.js
I learned the `[]` at `{}` ay truthy, kahit walang laman. Yung `0`, `""`, `null`, at `undefined` naman ay falsy

### 18_ternary_nullish.js
For ternary it is a maikling version ng if/else, ang `?.` ay nakakatulong para hindi mag error

### 19_strings_numbers.js
I learned about `trim`, `split`, `slice`, `includes`, at `toUpperCase` sa string

### 20_array_methods.js
I learned that the `filter`, `find`, `some`, and `every` ay nakakatulong para hindi na kailangan ng isang mahabang loop

### 21_errors_json.js
I learned how to use ng `throw new Error` at `try/catch` for the program not to crash. The `JSON.stringify` ay ginagawang string ang object, at ang `JSON.parse` ay ibinabalik niya ito. I notice na string na ang type ng JSON, kaya hindi mo ito magagamit na parang object hanggat hindi pa napa parse ito

### 22_async_javascript.js
I learned about differenece ng callback, Promise, at `async/await`. Same same lang ang result pero mas madaling basahin ang `async/await`, like parang normal na code lang

### 23_closures_scope.js
Ang `let` sa loob ng block hindi na makikita sa labas, kaya nag error ito sa `try/catch`. Sa closure, natatandaan ng `increment` ang `count` kahit tapos na ang `createCounter`. Yung `counterA` at `counterB` ay may sarisariling `count`, kaya hindi nagkakaapekto
