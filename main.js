
const input = document.querySelector('#inputContainer')
const btn = document.getElementById('btn')
const body = document.getElementsByTagName('body')[0]


const createPost = function () {
    const postContainer = document.createElement('div')
    const text = input.value
    const img = document.createElement('img')
    const post = document.createElement('h4')
    const hr = document.createElement('hr')
    const name = document.createElement('h3')
    const like = document.createElement("h1")
    const likee = document.createElement('button')

    //heart like
    const heart = document.createElement('div')

    heart.style.display = "none"


    heart.classList.add('heart')
    likee.classList.add('likee')
    postContainer.classList.add("postContainer")
    
    likee.innerText="like"

    like.innerText = "like"
    like.style.color = "gray"
    like.style.marginLeft = "80%"
    like.title = "like"
    
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
    


    likee.addEventListener('click', function(){
        if(likee.style.color = "white"){
            likee.style.color == "gray"
            likee.style.backgroundColor = "royalblue"
            likee.innerText = "Liked"
        }else if(likee.style.color === "white"){
            likee.style.color == "gray"
            likee.style.backgroundColor = "white"
            likee.innerText = "Like"
        }
    })


        like.addEventListener('click', function () {
            if (like.style.color == 'gray') {
                like.style.color = "pink"
            }else if(like.style.color == "pink"){
                like.style.color = "gray"
            }
        })
    
    body.append(postContainer)
    postContainer.append(img,name,post,like,heart,likee,hr)
    input.value = ''
}
btn.addEventListener('click', createPost)

input.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        createPost()
    }
})