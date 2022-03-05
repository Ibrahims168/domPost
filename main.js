
const input = document.querySelector('#inputContainer')
const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]


const createPost = function () {
    const text = input.value
    const img = document.createElement('img')
    const post = document.createElement('h4')
    const hr = document.createElement('hr')
    const name = document.createElement('h3')
    const like = document.createElement("h1")


    like.innerText = "like"
    like.style.color = "gray"
    like.style.marginLeft = "80%"
    like.title = "like"

    like.addEventListener('click', function () {
        if (like.style.color == 'gray') {
            like.style.color = "pink"
        }else if(like.style.color == "pink"){
            like.style.color = "gray"
        }
    })

    post.innerText = text
    post.style.marginTop = "30px"
    post.style.marginLeft = "9%"
    post.style.fontSize = "medium"
    post.style.fontWeight = "200"

    name.innerText = "Ibrahim Sharif"
    name.style.marginLeft = "90px"
    name.style.fontWeight = "300"


    img.style.width = "40px"
    img.style.height = "40px"
    img.style.marginBottom = "-45px"
    img.style.marginLeft = "30px"
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