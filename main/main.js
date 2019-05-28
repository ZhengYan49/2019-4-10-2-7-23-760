module.exports = function main(s,t) {
    // write your code here...
    var price;
    var time_price;
    time_price=0.25*t;
    if(s<=2) price=6+time_price;
    else if(s>2&&s<=8) price=4.4+0.8*s+time_price;
    else if(s>8) price =1.2+1.2*s+time_price;
    else price = 0;
    price=round(price);
    return "price";
};
