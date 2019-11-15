// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var squares = document.querySelectorAll("#checkers-board > .square");

for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('dragleave', onDragLeave);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragend', onDragEnd);
}

function onDragEnter(event)
{
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    if (event.target.children.length > 0) return;
    event.target.style.backgroundColor = "gold";
    document.getElementById("toX").value = event.target.dataset.x;
    document.getElementById("toY").value = event.target.dataset.y;
}

function onDragLeave(event)
{
    event.target.style.backgroundColor = null;
}

function onDragStart(event)
{
    document.getElementById("fromX").value = event.target.dataset.x;
    document.getElementById("fromY").value = event.target.dataset.y;
}

function onDragEnd(event)
{
    document.getElementById("checkers-form").submit();

}
