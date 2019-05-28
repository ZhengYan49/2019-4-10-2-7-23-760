module.exports = function main(s,t) {
    // write your code here...
    var price;
    var time_price;
    time_price=0.25*t;
    if(s<=2) price=7;
    else if(s>2&&s<=8) price=13;
    else if(s>8&&t==0) price =18;
    else if(s>8&&t>0) price=19
    else price = 0;
    return "price";
};
