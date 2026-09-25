# JavaScript Notes

### 00_script_in_html.html
- inline script - direct nasa loob ng `<script>` tag yung code
- external script - nakalink sa ibang file gamit yung src

### 01_base_syntax.js
- JS is case sensitive, may rules sa pag name ng variable, di pwede magsimula sa number o gumamit ng reserved word like for example na lang is myName at myname, etc

### 02_variables.js
- `typeof` - para malaman anong klase ng data ito
- `==` - kino-convert muna yung type bago icompare (loose equal)
- `===` - kinukumpara parehong type at value, mas strict equal

Dito ko na gets ulit bakit iba results ng `"5"==5` at `"5"===5`.

### 03_functions.js
- function declaration - normal way
- arrow function - pinaikling way to call function (implicit and explicit function)

### 04_objects.js
- object - naglalaman ng related data
- method - function na naka-store bilang property
- `this` - tumutukoy mismo sa object

### 05_arrays.js
- `push()` - nagdadagdag sa dulo
- `shift()` - nag-aalis sa una
- `for...of` - umuulit sa bawat item
- `map()` - gumagawa ng new array, hindi ginagalaw yung orig

### 06_control_structures.js
- `if...else if...else` - kapag maraming condition
- `for` loop - kapag alam mo bilang ng uulitin
- `while` loop - kapag base sa condition

### 07_dom.html
- `document.getElementById` - kumukuha ng element sa page
- `addEventListener` - naghihintay ng click bago ito mag run

### 08_essential_features.js
- spread - uses `...`, kukunin yung isang array then nagdadagdag ng bago sa new variable

### 09_tricky_parts.js
- `undefined` - wala pang laman
- `null` - talagang walang laman

### 10_let_const.js
- `let` - mutable
- `const` - immutable
- `var` - old way

### 11_arrow_functions.js
- arrow function - mas maikli
- implicit return - walang `{}` at `return` keyword, one line only

### 12_destructuring.js
- pwede mag destructure sa object, sa array sa loob mismo ng parameter

### 13_spread_rest.js
- spread (`[...arr]`) - kukunin yung laman papunta sa new array or object
- rest (`...args`) - does the opposite job

### 14_classes_inheritance.js
- PascalCase - convention sa pag name ng class starts with a capital letter and has no spaces or separators like for example "sayHello"

### 15_modules_export.js
- default export - isang beses lang pwede
- named export - pwede maraming sa pag use

### 16_modules_import.js
- default export - kahit ano ipangalan sa pag iimport
- named export - need exact match yung name

### 17_logical_operators.js
- `&&` gamit - kapag true yung value sa right, yung irreturn. Then kapag false, yung false yung return.
- `||` gamit - kapag false yung value na nasa right, ang irreturn. Then kapag true yung nasa left o value, TRUE ang irreturn.

This one ay tumatak sakin - logical operator, since sir got confused din, pero habang finifigure out niya kung bakit ganun ang output, na-gets ko na rin along his solving.

### 18_ternary_nullish.js
- ternary - `condition ? true : false`, mas short way sa paggawa ng if else

### 19_strings_numbers.js
- `trim`, `split`, `includes` - common string methods
- `parseInt`, `toFixed` - for number formatting
- `NaN` - kapag not a number

### 20_array_methods.js
Natutunan ko rin yung splice method, halimbawa `(0, 4)`, zero yung start at yung 4 yung index kung saan siya titigil na excluded na ito, kaya kung ang word mo ay LIGHTER, ang output ay LIGH.

### 21_errors_json.js
- `try/catch` - para hindi mag-crash program kapag may error
- `JSON.stringify` - object papunta text
- `JSON.parse` - text pabalik papunta object

### 23_closures_scope.js
- `let`/`const` - they only exist inside the `{}` they were declared in
- `var` - this one is function-scoped
- closure - happen kapag natatandaan pa rin ng function yung variable even after that outer function has finished running.
