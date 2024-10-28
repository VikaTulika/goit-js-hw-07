const items = document.querySelectorAll("li.item")
console.log(`Number of categories: ${items.length}`)
items.forEach(item => {
    const title = item.querySelector("h2").textContent
    console.log(`Category: ${title}`)
    const elements = item.querySelectorAll("li")
    console.log(`Elements: ${elements.length}`)
})