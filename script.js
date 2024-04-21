document.querySelector(".generate").addEventListener("click",generate);
async function generate()
{
    let response = await fetch(`https://api.quotable.io/random`);
    let formatted=await response.json();
    document.querySelector(".p").textContent=formatted.content;
    document.querySelector(".quoter").textContent=formatted.author
}