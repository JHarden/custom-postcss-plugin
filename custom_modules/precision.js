var post = require('postcss');

module.exports = post.plugin('postcss-precision',function(){

    return function(style){

        var longEmTest = /(\d+)?\.\d{4,}em/gi;
        style.eachDecl(function(decl){

            if(! decl.value || longEmTest.test(decl.value)){

                //grab array of matches
                var matches = (decl.value + '').match(longEmTest);

                //we'll assume theres one
                var value = matches[0].substr(0,matches[0].length -2);

                //round three decimal places
                var rounded = Math.round(parseFloat(value) *1000)/1000;

                //change the value in the tree
                decl.value = decl.value.replace(value,rounded.toString());
            }
        });
    };
});

