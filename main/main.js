module.exports = function main(inputs) {
    // write your code here...
    var price;
    time_price=0.25*parkTime;
    if(distance<=2) price=7;
    else if(distance>2&&distance<=8) price=13;
    else if(distance>8&&parkTime==0) price =18;
    else if(distance>8&&parkTime>0) price=19
    else price = 0;
    return "price";
};
