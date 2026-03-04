#!/usr/bin/env node
const { Command } = require("commander");
const app = new Command();
app.command("hello <name>")
    .action((name) => {
    console.log("hey " + name + "!");
});
app.command("sum <x> <y>")
    .action((x, y) => {
    let result = Number(x) + Number(y);
    console.log(result);
});
app.command("minus <x> <y>")
    .action((x, y) => {
    console.log(Number(x) - Number(y));
});
app.command("times <x> <y>").action((x, y) => {
    console.log(Number(x) * Number(y));
});
app.command("divide <x> <y>")
    .action((x, y) => {
    const num = Number(x);
    const den = Number(y);
    if (den == 0) {
        console.log("cant divide by zero bro");
        return;
    }
    console.log(num / den);
});
app.command("rem <x> <y>")
    .action((x, y) => {
    console.log(Number(x) % Number(y));
});
app.command("flr <n>").action((n) => {
    console.log(Math.floor(Number(n)));
});
app.command("cl <n>").action((n) => {
    console.log(Math.ceil(Number(n)));
});
app.command("squareroot <n>")
    .action((n) => {
    let val = Number(n);
    if (val < 0) {
        console.log("square root of negative? nope");
        return;
    }
    console.log(Math.sqrt(val));
});
app.command("pow <b> <e>")
    .action((b, e) => {
    console.log(Math.pow(Number(b), Number(e)));
});
app.command("abs <n>")
    .action((n) => {
    console.log(Math.abs(Number(n)));
});
app.command("rand <min> <max>")
    .action((min, max) => {
    const lo = Number(min);
    const hi = Number(max);
    const rand = Math.floor(Math.random() * (hi - lo + 1)) + lo;
    console.log(rand);
});
app.command("joke")
    .description("prints a random joke")
    .action(async () => {
    try {
        const resp = await fetch("https://official-joke-api.appspot.com/random_joke");
        const joke = await resp.json();
        console.log(joke.setup);
        console.log("...");
        console.log(joke.punchline);
    }
    catch (e) {
        console.log("couldnt get a joke rn, check your internet");
    }
});
app.command("fact")
    .description("get a random fact")
    .action(async () => {
    try {
        const r = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        const d = await r.json();
        console.log("fact:", d.text);
    }
    catch (e) {
        console.log("failed to get fact");
    }
});
app.command("advice")
    .description("get some random advice")
    .action(async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const json = await response.json();
        console.log(json.slip.advice);
    }
    catch (err) {
        console.log("couldnt fetch advice");
    }
});
app.command("quote")
    .description("random inspirational quote")
    .action(async () => {
    try {
        const res = await fetch("https://zenquotes.io/api/random");
        const data = await res.json();
        console.log(`"${data[0].q}" — ${data[0].a}`);
    }
    catch (e) {
        console.log("no quote for you today :(");
    }
});
app.command("time")
    .action(() => {
    const now = new Date();
    const hrs = now.getHours();
    const mins = now.getMinutes().toString().padStart(2, "0");
    const period = hrs >= 12 ? "PM" : "AM";
    const hr12 = hrs % 12 || 12;
    console.log(`current time: ${hr12}:${mins} ${period}`);
});
app.parse(process.argv);
