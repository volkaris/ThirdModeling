function TM_graph(htmlElement, yArrayLen, minY, maxY, stepY){
    this.htmlElement = htmlElement;
    this.yArrayLen = yArrayLen;
    this.minY = minY;
    this.maxY = maxY;
    this.stepY = stepY;
    this.vArray = [];
}
TM_graph.prototype.graphIter = function(x, y){
    this.vArray.push([x, y]);
    if (this.vArray.length > this.yArrayLen) this.vArray.shift();
    var htmlElement1 = this.htmlElement;
    var vArray1 = this.vArray;
    var minY1 = this.minY;
    var maxY1 = this.maxY;
    var stepY1 = this.stepY;
    $(function() {
        var options = {
            yaxis: {
                min: minY1,
                max: maxY1,
                tickSize: stepY1
            }
        };
        $.plot(htmlElement1, [vArray1], options);
    });
};

TM_graph.prototype.graph = function(data){
    this.vArray = data;
    var htmlElement1 = this.htmlElement;
    var vArray1 = this.vArray;
    var minY1 = this.minY;
    var maxY1 = this.maxY;
    var stepY1 = this.stepY;
    $(function() {
        var options = {
            yaxis: {
                min: minY1,
                max: maxY1,
                tickSize: stepY1
            }
        };
        $.plot(htmlElement1, [vArray1], options);
    });
};



function TM(){}
TM.prototype.addSlider = function(htmlSliderElement, htmlValueElement, minVal, maxVal, stepVal, startVal, setFunc){
    $(function() {
        $( htmlSliderElement ).slider({
            value:startVal, min: minVal, max: maxVal, step: stepVal,
            slide: function( event, ui ) {
                $( htmlValueElement ).text( ui.value.toFixed(2) );
                setFunc(ui.value);
            }
        });
    });
};
TM.prototype.addInputSlider = function(htmlSliderElement, htmlValueElement, minVal, maxVal, stepVal, startVal, setFunc, pressFunc){
    window[pressFunc] = function(event){
        var regExpPattern = /[0-9]+[.]?[0-9]+/;
        var inputVal = document.getElementById(htmlValueElement.substr(1)).value;
        if (regExpPattern.test(inputVal.toString()) && inputVal != 0){setFunc(inputVal);}
    };

    $(function() {
        $( htmlSliderElement ).slider({
            value:startVal, min: minVal, max: maxVal, step: stepVal,
            slide: function( event, ui ) {
                $( htmlValueElement ).val( ui.value.toFixed(2) );
                setFunc(ui.value);
            }
        });
        $( htmlValueElement ).val($( htmlSliderElement ).slider( "value" ).toFixed(2) );
    });
};






