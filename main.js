function preload()
{

}
function setup()
{
    canvas = CreateCanvas(400,400);
    canvas = postion(150,150);
    video = CreateCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw()
{
    image(video,0,0,400,400);
    tint(tint_color);
}

function fiter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot()
{
    save("user_name.png");
}