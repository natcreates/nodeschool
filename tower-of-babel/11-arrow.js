var inputs = process.argv.slice(2);
    var result = inputs.map((string) => string.slice(0, 1))
                       .reduce((output, str) => output + str);
    console.log(result);
