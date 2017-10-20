{"filter":false,"title":"numbers.js","tooltip":"/MoreExpress/LogansChallenge/View/numbers.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":116,"column":3},"action":"insert","lines":["//selects inputs and elements","","var input = document.querySelector(\"input\");","var spell = document.querySelector(\"#spell\");","var backward = document.querySelector(\"#backward\");","var digits = document.querySelector(\"#digits\");","var enhance = document.querySelector(\"#enhance\");","var resultTron = document.querySelector(\"#resultTron\");","var resultList = document.querySelector(\"#resultList\");","","","//listens for spell out numbers functionallity","","spell.addEventListener(\"click\", function(){","","\t//grabs the value from the input and splits it into an array of individual values","","\tvar num = input.value;","\tvar splitString = num.split(\"\");","\tconsole.log(splitString);","\t","\t//creates empty variable that we can later increment","","\tvar spelledOut = \"\";","","\t//translates the string into letters","","\tfor (var i = 0; i < splitString.length; i++) {","\t\tif(splitString[i] == 0){","\t\t\tvar spelledOut = spelledOut + \"Zero \";","\t\t}","\t\telse if(splitString[i] == 1){","\t\t\tvar spelledOut = spelledOut + \"One \"","\t\t}","\t\telse if(splitString[i] == 2){","\t\t\tvar spelledOut = spelledOut + \"Two \"","\t\t}","\t\telse if(splitString[i] == 3){","\t\t\tvar spelledOut = spelledOut + \"Three \"","\t\t}","\t\telse if(splitString[i] == 4){","\t\t\tvar spelledOut = spelledOut + \"Four \"","\t\t}","\t\telse if(splitString[i] == 5){","\t\t\tvar spelledOut = spelledOut + \"Five \"","\t\t}","\t\telse if(splitString[i] == 6){","\t\t\tvar spelledOut = spelledOut + \"Six \"","\t\t}","\t\telse if(splitString[i] == 7){","\t\t\tvar spelledOut = spelledOut + \"Seven \"","\t\t}","\t\telse if(splitString[i] == 8){","\t\t\tvar spelledOut = spelledOut + \"Eight \"","\t\t}","\t\telse if(splitString[i] == 9){","\t\t\tvar spelledOut = spelledOut + \"Nine \"","\t\t}","\t};","","\t\t//Changes opacity of results tron prints out the spelledOut result into the results div","\t\tresultTron.style.opacity = 1;","","\t\tvar entry = document.createElement(\"li\");","\t\tentry.appendChild(document.createTextNode((\"the numbers in  \" + num + \" spelt out individually is \" + spelledOut)));","\t\tresultList.appendChild(entry);","","});","","//Spells out the input backward","","backward.addEventListener(\"click\", function(){","","\t//grabs the value from the input and splits it into an array of individual values","","\tvar num = input.value;","\tvar splitString = num.split(\"\");","\tconsole.log(splitString);","\t","\t//creates empty variable that we can later increment","","\tvar reversed = \"\";","","\t//prints out the number in reverse","","\tfor (var i = num.length; i >= 0; i--) {","\t\tvar reversed = reversed + String(num[i]);","\t}","","\tresultTron.style.opacity = 1;","\tvar entry = document.createElement(\"li\");","\tentry.appendChild(document.createTextNode((\"Reverseing the order of digits in \" + num + \" results in \" + reversed)));","\tresultList.appendChild(entry);","","});","","//Evaluates how many digits are in the number","","digits.addEventListener(\"click\", function(){","","\tvar num = input.value;","\tvar splitString = num.split(\"\");","\tconsole.log(splitString);","","\tnumOfDigits = 0","","\tfor (var i = 0; i < num.length; i++) {","\t\tnumOfDigits = numOfDigits + 1;","\t}","","\tresultTron.style.opacity = 1;","\tvar entry = document.createElement(\"li\");","\tentry.appendChild(document.createTextNode((\"the number of digits in \" + num + \" is \" + numOfDigits)));","\tresultList.appendChild(entry);","","","});"],"id":1}]]},"ace":{"folds":[],"scrolltop":1665.0000743865967,"scrollleft":0,"selection":{"start":{"row":116,"column":3},"end":{"row":116,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":85,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1507076064655,"hash":"f53983b0718fc148960a05b2ff75b7ea0a3e115c"}