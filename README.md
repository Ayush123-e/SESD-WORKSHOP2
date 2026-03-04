# SESD-WORKSHOP2

This is a helpful command-line interface tool with various utilities.

---

## Available Commands

### Greeting

**Command:**
```
node dist/cli.js hello <name>
```
**Example:**
```
node dist/cli.js hello John
```
**Output:**
```
hey John!
```

---

## Calculator Commands

### Add
```
node dist/cli.js sum 5 3
```
**Output:**
```
8
```

### Subtract
```
node dist/cli.js minus 10 4
```
**Output:**
```
6
```

### Multiply
```
node dist/cli.js times 6 7
```
**Output:**
```
42
```

### Divide
```
node dist/cli.js divide 10 2
```
**Output:**
```
5
```
If dividing by 0:
```
cant divide by zero bro
```

### Modulus
```
node dist/cli.js rem 10 3
```
**Output:**
```
1
```

### Floor
```
node dist/cli.js flr 5.8
```
**Output:**
```
5
```

### Ceil
```
node dist/cli.js cl 5.2
```
**Output:**
```
6
```

### Square Root
```
node dist/cli.js squareroot 16
```
**Output:**
```
4
```

### Power
```
node dist/cli.js pow 2 3
```
**Output:**
```
8
```

### Absolute Value
```
node dist/cli.js abs -9
```
**Output:**
```
9
```

### Random Number
```
node dist/cli.js rand 1 100
```
**Output:**
```
52
```

### Current Time
```
node dist/cli.js time
```
**Output:**
```
current time: 10:30 AM
```

---

## API Commands

### Random Joke
```
node dist/cli.js joke
```
**Example Output:**
```
Why did the scarecrow win an award?
...
Because he was outstanding in his field!
```
**API Used:** https://official-joke-api.appspot.com/random_joke

---

### Random Fact
```
node dist/cli.js fact
```
**Example Output:**
```
fact: Honey never spoils.
```
**API Used:** https://uselessfacts.jsph.pl/api/v2/facts/random

---

### Random Advice
```
node dist/cli.js advice
```
**Example Output:**
```
Don't sweat the small stuff.
```
**API Used:** https://api.adviceslip.com/advice

---

### Random Quote
```
node dist/cli.js quote
```
**Example Output:**
```
"The only way to do great work is to love what you do." — Steve Jobs
```
**API Used:** https://zenquotes.io/api/random
