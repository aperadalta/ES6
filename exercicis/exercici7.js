
var enunciat7 = `var tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
    ];`;

var resposta7 = `// forEach
var result = [];
tasks.forEach((e) => {
    result.push(e.name);
});

// map
var result2 = [];
tasks.map((e) => {
    result2.push(e.name)
});

console.log(result2);`;

export {enunciat7, resposta7};