{%
    Dim widthMap = On(CurrentADC.PropValue("mapid").ToNumber(),"598","500","922","592","803","610","842")
    Dim heightMap = On(CurrentADC.PropValue("mapid").ToNumber(),"671","742","582","801","656","760","596")
    Dim adjustX = On(CurrentADC.PropValue("mapid").ToNumber(),"-5,5,0,0,0,0,0,0,0,-10,0,8,0","0,20,0,-5,-15,-5,0,0,20,10,10,0","0,0,50,0,0,0,0,30,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-5,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0","-10,10,0,0,0,10,-5,0,0,0,0,0,20,0,0,5","10,0,0,0,0,0,-10,0,20,0,0","10,0,-10,0,0,15,10,-10,0,0,10,10,0,0,-5,0,0,0,0,0","0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0")
    Dim adjustY = On(CurrentADC.PropValue("mapid").ToNumber(),"10,0,-5,10,10,0,-30,10,0,0,0,20,0","25,10,0,-40,5,0,-10,0,10,0,30,0","0,0,0,0,0,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,10,0,0,-20,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,30","0,0,10,-10,0,5,0,-10,15,0,0,0,20,0,0,0","-30,0,0,0,0,-30,0,-10,-20,0,0","0,20,0,-15,0,0,0,0,0,0,0,-10,-15,10,10,0,0,0,0,0","0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0")
	Dim pathFileName = On(CurrentADC.PropValue("mapid").ToNumber(),"fr","uk","usa","de","be","it","ch")
%}
(function () {
    var map = new Map({
        instanceId: {%= CurrentADC.InstanceId %},
        mapId: {%:= CurrentADC.PropValue("mapid").ToNumber() %},
        width: {%:= widthMap.ToNumber() %},
        height: {%:= heightMap.ToNumber() %},
        fontSize: {%:= CurrentADC.PropValue("fontSize")%},
        animatePath: '{%:= CurrentADC.PropValue("animatePath")%}',
        fill : '{%= CurrentADC.PropValue("fill").ToHexa() %}',
        fillText: '{%= CurrentADC.PropValue("fillText").ToHexa() %}',
        opacityText: {%:= CurrentADC.PropValue("opacityText")%},
        strokeColor : '{%= CurrentADC.PropValue("strokeColor").ToHexa() %}',
        strokeWidth : {%:= CurrentADC.PropValue("strokeWidth")%},
        opacity : 1.0,
        fillHover : '{%= CurrentADC.PropValue("fillHover").ToHexa() %}',
        fillTextHover: '{%= CurrentADC.PropValue("fillTextHover").ToHexa() %}',
        opacityTextHover: {%:= CurrentADC.PropValue("opacityTextHover")%},
        strokeColorHover : '{%= CurrentADC.PropValue("strokeColorHover").ToHexa() %}',
        strokeWidthHover : {%:= CurrentADC.PropValue("strokeWidthHover")%},
        opacityHover : 1.0,
        fillSelected : '{%= CurrentADC.PropValue("fillSelected").ToHexa() %}',
        fillTextSelected: '{%= CurrentADC.PropValue("fillTextSelected").ToHexa() %}',
        opacityTextSelected: {%:= CurrentADC.PropValue("opacityTextSelected")%},
        strokeColorSelected : '{%= CurrentADC.PropValue("strokeColorSelected").ToHexa() %}',
        strokeWidthSelected : {%:= CurrentADC.PropValue("strokeWidthSelected")%},
        opacitySelected : 1.0,
        adjustXtextObj : [{%:= adjustX %}],
        adjustYtextObj : [{%:= adjustY %}],
        currentQuestion: '{%:= CurrentQuestion.Shortcut %}',
        mapCaptions : [{% Dim i
        For i = 1 To CurrentQuestion.Responses.Count
    	%}"{%:= CurrentQuestion.Responses[i].Caption.Replace("\n","\" + " + crlf + "\"") %}"{%:= On((i <> CurrentQuestion.Responses.Count),",","") %}{% Next i %}],
        mapNames : [{% Dim j
        For j = 1 To CurrentQuestion.Responses.Count
		%}'zone{%:= CurrentQuestion.Responses[j].InputValue() %}'{%:= On((i <> CurrentQuestion.Responses.Count),",","") %}{% Next j %}],
        mapPaths : [{%:= CurrentADC.GetContent("dynamic/" + pathFileName + ".txt").ToText() %}]
    });
} ());
