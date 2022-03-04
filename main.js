

// const createPost = function (){
//     const text = input.value
//     const img = document.createElement('img')
//     const name = document.createElement('h3')
//     const post = document.createElement('h2')
//     img.innerHTML = img
//     name.textContent = name
//     post.innerText = text 
//     body.append(post)
//     input.value = ''
// }
// btn.addEventListener('click', createPost)

// input.addEventListener('keydown', function (event) {
//     if (event.key == 'Enter') {
//         createPost()
//     }
// })








const input = document.querySelector('#inputContainer')
const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]

const createPost = function () {
    const text = input.value
    const img = document.createElement('img')
    const post = document.createElement('h3')
    const hr = document.createElement('hr')
    const name = document.createElement('h3')
    const like = document.createElement("h1")

    like.innerText = "like"
    like.style.color = "gray"
    like.style.marginLeft = "30%"

    like.addEventListener('click', function () {
        if (like.style.color == 'gray') {
            like.style.color = "pink"
        }else if(like.style.color == "pink"){
            like.style.color = "gray"
        }
    })

    post.innerText = text
    post.style.marginTop = "40px"
    post.style.marginLeft = "8%"

    name.innerText = "Ibrahim Sharif"
    name.style.marginLeft = "8%"
    name.style.marginTop = "-3%"

    img.style.width = "70px"
    img.style.borderRadius = "50%"
    img.src = 'images/nft2.jpg'

    body.append(img,name,post,like,hr)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }
})