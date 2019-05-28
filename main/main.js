module.exports = function main(inputs) {
    // write your code here...
    var price;
    var time_price;
    time_price=0.25*inputs.parkTime;
    if(inputs.distance<=2) price=6+time_price;
    else if(inputs.distance>2&&inputs.distance<=8) price=0.8*inputs.distance+4.4+time_price;
    else if(inputs.distance>8) price =1.2*inputs.distance+1.2+time_price;
    else price = 0;
    price=Math.round(price);
    return price;
};
