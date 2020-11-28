function addTokens(input, tokens){
    if(typeof input !== 'string') throw Error('Invalid input');
     if(input.length < 6) throw Error('Input should have at least 6 characters');
     for(let item of tokens)
     {
        if(typeof item.tokenName === 'string' )
        {
        if(input.includes("..."))
            return input.replace('...','${'+item.tokenName+'}');
            else
            return input;
        }
        else
        throw Error('Invalid array format');
     }

}

const app = {
    addTokens: addTokens
}

module.exports = app;
