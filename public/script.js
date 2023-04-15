const submitBtn = document.querySelector('.submit__btn')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')

const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments__container')
const fbcont = document.querySelector('.wrap')
const rating = document.querySelector('.rating')
const fbarea = document.querySelector('.fbarea')
submitBtn.addEventListener('click', submitFeedback)

function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

function showAll(){
    var showbtn = document.getElementById("show_comm_btn")
    var allcomm = document.getElementById("allcomms");
    allcomm.classList.remove("hide")
    showbtn.classList.add('hide')
}
function hideAll(){
    var showbtn = document.getElementById("show_comm_btn")
    var allcomm = document.getElementById("allcomms");
    allcomm.classList.add("hide")
    showbtn.classList.remove('hide')
}

function hideComment(){
    var commentArea = document.getElementById("comment-area");
    const list = commentArea.classList;
    list.add("hide");
}
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

feedbackArr = []
function submitFeedback(e){

    //console.log("add func 1")
    
    const userForm = userName.value 
    const commentForm = comment.value 

    if(userForm && commentForm !== ''){
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm,
    
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // clear inputs 
        resetForm()
        // add feedback to list
        addFeedback(newFeedback)
    }


    e.preventDefault()

}

function resetForm(){
    userName.value = ''
    comment.value = ''
}

function addFeedback(item){
    //console.log("add func 2")
    var allcomm = document.getElementById("allcomms");
    allcomm.classList.remove("hide")
    var showbtn = document.getElementById("show_comm_btn")
    showbtn.classList.add('hide')
    const div = document.createElement('div')
    
    div.classList = 'comment__card comments'
    div.id = item.id 
    div.innerHTML = `
 
                <div class="comment__info">
                    <small class="nickname">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)

}

//feedback functions***************
