#pragma strict

//static var charge:int=4;
var collectSound:AudioClip;
var hudCharge:Texture2D[];
var chargeHudGUI:GUITexture;
function Start () {


}

function kitPickup()
{
//chargeHudGUI.texture=hudCharge[charge];
playerStatus.charge++;
//AudioSource.PlayClipAtPoint(collectSound,transform.position);
}
function Update () {

}