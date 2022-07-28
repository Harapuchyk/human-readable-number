module.exports = function toReadable (number) {
    let oneNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'];
    let twentyNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred';
    let strNumber = String(number);
    let result = '';
    if (number < 20) {
       return result = oneNineteen[number];
    };
    if (number >= 20 && number < 100) {
        if(strNumber[1] === '0') {
            return result = twentyNinety[Number(strNumber[0])]// + ' ' + oneNineteen[Number(strNumber[1]]
        }
        else {
            return result = twentyNinety[Number(strNumber[0])] + ' ' + oneNineteen[Number(strNumber[1])];
        }  
    }
    if ( number >= 100) {
        if (strNumber[1] === '0' && strNumber[2] === '0') {
            return result = oneNineteen[Number(strNumber[0])] + ' ' + hundred;
        }
        else if (Number(strNumber[1] + strNumber[2]) >= 0 && Number(strNumber[1] + strNumber[2]) < 20) {
        
            return result = oneNineteen[Number(strNumber[0])] + ' ' + hundred + ' ' + oneNineteen[Number(strNumber[1] + strNumber[2])];
        }
        else if (strNumber[2] === '0') {
            return result = oneNineteen[Number(strNumber[0])] + ' ' + hundred + ' ' + twentyNinety[Number(strNumber[1])];
        }
        else {
            return result = oneNineteen[Number(strNumber[0])] + ' ' + hundred + ' ' + twentyNinety[Number(strNumber[1])] + ' ' + oneNineteen[Number(strNumber[2])];
        }
    }
}
