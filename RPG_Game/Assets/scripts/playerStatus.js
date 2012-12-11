#pragma strict

static var charge:int = 4;
var deathSound:AudioClip;
var dead:boolean = false;
function Start () {

}

function Update () {

	Die();
}

function Die()
{
	if(charge == 0 && dead != true)
	{
		audio.PlayOneShot(deathSound);
		dead = true;
		//System.out.println("Your Dead");
	}
}