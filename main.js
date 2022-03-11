
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
    const like = document.createElement('button')
    const comment = document.createElement('button')
    const share = document.createElement('button')
    const commentInput = document.createElement('input')
    const commentSubmit = document.createElement('button')


    like.classList.add('btns')
    comment.classList.add('btns')
    share.classList.add('btns')





    postContainer.classList.add("postContainer")
    


   
    
    post.innerText = text
    post.style.marginTop = "30px"
    post.style.marginLeft = "9%"
    post.style.fontSize = "medium"
    post.style.fontWeight = "200"
    
    name.innerText = "Ibrahim Sharif"
    name.style.marginLeft = "90px"
    name.style.fontWeight = "300"
    
    img.style.width = "50px"
    img.style.height = "50px"
    img.style.marginBottom = "-45px"
    img.style.marginLeft = "30px"
    img.style.borderRadius = "50%"
    img.src = 'images/nft2.jpg'
    


    like.innerText = "Like"
    comment.innerText = "Commet"
    share.innerText = "Share"
    
    commentInput.style.display = "none"
    commentSubmit.style.display = "none"

    const likeBtn = function () {
        if (like.style.color == "gray") {
            like.style.color = "white"
            like.style.backgroundColor = "royalblue"
            like.innerText = "Liked"
        }else{
            like.style.color = "gray"
            like.style.backgroundColor = "white"
            like.innerText = "Like"
        }
    }

    like.style.color
    like.addEventListener('click', likeBtn)

    const commentBtn = function () {
        if (comment.style.color == "gray") {
            commentInput.style.display = "block"
            commentSubmit.style.display = "block"
            comment.style.backgroundColor = "royalblue"
            comment.style.color = "white"
        }else{
            commentInput.style.display = "none"
            commentSubmit.style.display = "none"
            comment.style.backgroundColor = "white"
            comment.style.color = "gray"
        }
    }
    comment.addEventListener('click', commentBtn)

    
    body.append(postContainer)
    postContainer.append(img,name,post,like,comment,share,hr)
    input.value = ''
}
function enterValue(event) {
    if (event.key == 'Enter') {
        postValue()
    }
}

function postValue() {
    if (input.value == "") {
        alert('ERROR 404 : empty post can not be posted!!!!')
    }else{
        createPost()
    }
    
}

btn.addEventListener('click', postValue)

input.addEventListener('keydown' , enterValue)


