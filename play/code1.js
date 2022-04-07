gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDPlayerSkin1Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin1Objects2= [];
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin2Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin2Objects2= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin8Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin8Objects2= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin7Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin7Objects2= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin6Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin6Objects2= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin5Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin5Objects2= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin4Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin4Objects2= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin3Objects1= [];
gdjs.Untitled_32sceneCode.GDPlayerSkin3Objects2= [];
gdjs.Untitled_32sceneCode.GDpistol1Objects1= [];
gdjs.Untitled_32sceneCode.GDpistol1Objects2= [];
gdjs.Untitled_32sceneCode.GDpistol2Objects1= [];
gdjs.Untitled_32sceneCode.GDpistol2Objects2= [];
gdjs.Untitled_32sceneCode.GDrifle1Objects1= [];
gdjs.Untitled_32sceneCode.GDrifle1Objects2= [];
gdjs.Untitled_32sceneCode.GDrifle2Objects1= [];
gdjs.Untitled_32sceneCode.GDrifle2Objects2= [];
gdjs.Untitled_32sceneCode.GDrifle3Objects1= [];
gdjs.Untitled_32sceneCode.GDrifle3Objects2= [];
gdjs.Untitled_32sceneCode.GDrifle4Objects1= [];
gdjs.Untitled_32sceneCode.GDrifle4Objects2= [];
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDYellowBackgroundObjects1= [];
gdjs.Untitled_32sceneCode.GDYellowBackgroundObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDStartButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDStartButtonObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Untitled_32sceneCode.GDStartButtonObjects1});gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Untitled_32sceneCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText3Objects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Untitled_32sceneCode.GDStartButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level 1");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Untitled_32sceneCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDStartButtonObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerSkin1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerSkin3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDpistol1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDpistol1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDpistol2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDpistol2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrifle1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDrifle1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrifle2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDrifle2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrifle3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDrifle3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDrifle4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDrifle4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDIconBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrassAndTreeBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDYellowBackgroundObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDYellowBackgroundObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
