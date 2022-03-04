

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
const img = document.getElementById('profilePic')
const name = document.getElementsByClassName('name')

const createPost = function () {
    const text = input.value
    const img = document.createElement('img')
    const post = document.createElement('h1')
    const hr = document.createElement('hr')
    const name = document.createElement('h2')
    post.innerText = text
    name.innerText = "Ibrahim Sharif"
    name.style.marginLeft = "10%"
    name.style.marginTop = "-5%"
    img.style.width = "70px"
    img.style.borderRadius = "50%"
    img.src = 'images/nft2.jpg'
    body.append(img,name,post,hr)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }
})