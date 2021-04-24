
let replies = []
let incNum = 1
let replyNumb = 0;
let replyMoveDiv = 1


let userName = document.querySelector(".profileUsername");
let profileUserName = localStorage.getItem("profileUsername")
userName.innerText = profileUserName

function sendComment() {
    // gets comment info
    let comments1 = document.getElementById("sendBlab").value;
    // stores comment to local storage
    localStorage.setItem("comment" + incNum, comments1)
    let comment = localStorage.getItem("comment" + incNum)

    // clears text box
    document.getElementById("sendBlab").value = ""
    let comments = {
        "name": profileUserName,
        "comment": comment,
        "reply": []
    }

    if (comment == "") {
        alert("There is nothing in the text box.")
    } else {

    let newFeed = document.querySelectorAll(".feed");
    for (let f of newFeed) {
        // make new div
        let feedDiv = document.createElement("div")
        feedDiv.className = "feed" + incNum
        feedDiv.id = "feed" + incNum
        f.appendChild(feedDiv)

        let newNewFeed = document.querySelectorAll(".feed" + incNum);

        for (let n of newNewFeed) {
            // text from message
            let messageSent = document.createElement("p")
            messageSent.className = "textMessage"
            messageSent.innerText = profileUserName + ": " + comment
            n.appendChild(messageSent)
            // profile pic
            let messageProfilePic = document.createElement("img")
            messageProfilePic.className = "messageProfilePic"
            messageProfilePic.src = "../images/profile_pic.jpg"
            n.appendChild(messageProfilePic)
            // time for comment
            let newDate = new Date();
            let year = newDate.getFullYear();
            let month = newDate.getMonth();
            let day = newDate.getDate();
            let hour = newDate.getHours();
            // changes from military time to standard
            if (hour > 12) {
                hour -= 12;
            } else if (hour === 0 ) {
                hour = 12;
            }
            let minute = newDate.getMinutes();
            let commentDate = document.createElement("p")
            commentDate.className = "commentDate"
            commentDate.id = "commentDate"
            commentDate.innerHTML = year + "/" + month + "/" + day + " " + hour + ":" + minute
            n.appendChild(commentDate)

            let replyDiv = document.createElement("div")
            replyDiv.className = "replyDiv" + incNum
            replyDiv.id = "replyDiv" + incNum
            n.appendChild(replyDiv)
            let replyDivs = document.querySelectorAll(".replyDiv" + incNum)
            for (let r of replyDivs) {
                let commentDropDown = document.createElement("details")
                commentDropDown.className = "commentDrop" + incNum
                commentDropDown.open = true
                r.appendChild(commentDropDown)
                let createSummary = document.querySelectorAll(".commentDrop" + incNum)
                for (let o of createSummary) {
                    let commentSummary = document.createElement("summary")
                    commentSummary.innerText = "Comments"
                    o.appendChild(commentSummary)
                }

                let messageComment = document.createElement("textarea")
                messageComment.className = "messageCommentArea" + incNum
                messageComment.id = "messageCommentArea" + incNum
                messageComment.maxLength = "196"
                messageComment.placeholder = "Send a Comment!"
                r.appendChild(messageComment)
                let replyButton = document.createElement("input")
                replyButton.className = "replyButton" + incNum
                replyButton.id = "replyButton" + incNum
                replyButton.type = "image"
                replyButton.src = "../images/Blab button.png"
                replyButton.addEventListener("click", function() {
                    for (j = 1; j < 100; j++) {

                        let getReply = document.querySelector(".messageCommentArea" + j).value
                        document.querySelector(".messageCommentArea" + j).value = ""
                        if (getReply == "") {
                             getReply = document.querySelector(".messageCommentArea" + j).value
                             document.querySelector(".messageCommentArea" + j).value = ""
                        } else {
                            comments["reply"].push(getReply)
                            localStorage.setItem("reply" + j, JSON.stringify(comments["reply"]))
                            postReply = JSON.parse(localStorage.getItem("reply" + j))


                            if (postReply === null) {
                                // do nothing since theres no more replies.
                            } else {
                            getReply.value = ""
                            for (t of createSummary) {
                                let replyProfilePic = document.createElement("img")
                                replyProfilePic.src = "../images/profile_pic.jpg"
                                replyProfilePic.className = "replyProfilePic"
                                t.appendChild(replyProfilePic)
                                let postComment = document.createElement("p")
                                postComment.className = "replyBlab" + incNum
                                postComment.innerText = profileUserName + ": " + getReply
                                t.appendChild(postComment)
                               
                            }
                    }
                } 
             }} )

                r.appendChild(replyButton)
                
                incNum++;


            }
           

        }
        
    }

    // waits for click to run sendComment function
    //window.addEventListener('load', sendComment);
    }
}

function signOut() {
    if (confirm("Are you sure you want to sign out?")) {
        window.location.href = "../Sign In/index.html";
    } else {
        // if user selects no it does nothing
    }
}

function main() {
    for (i = 1; i < 100; i++) {
        try {
            let checkComments = localStorage.getItem("comment" + i)
            let checkReplies = localStorage.getItem("reply" + i)
            
        } catch(err) {

        } 

           
        }
    }
window.addEventListener('load', main)


function onLoad() {
    for (incNum = 1; incNum < 100; incNum++) {
        
    if (localStorage.getItem("comment" + incNum) == null) {
        break
        } else {
            let comments = {
                "name": profileUserName,
                "comment": localStorage.getItem("comment" + incNum),
                "reply": []
            }

        let newFeed = document.querySelectorAll(".feed");
        for (let f of newFeed) {
            // make new div
            let feedDiv = document.createElement("div")
            feedDiv.className = "feed" + incNum
            feedDiv.id = "feed" + incNum
            f.appendChild(feedDiv)
    
            let newNewFeed = document.querySelectorAll(".feed" + incNum);
    
            for (let n of newNewFeed) {
                // text from message

                let messageSent = document.createElement("p")
                messageSent.className = "textMessage"
                messageSent.innerText = profileUserName + ": " + localStorage.getItem("comment" + incNum)
                n.appendChild(messageSent)
                // profile pic
                let messageProfilePic = document.createElement("img")
                messageProfilePic.className = "messageProfilePic"
                messageProfilePic.src = "../images/profile_pic.jpg"
                n.appendChild(messageProfilePic)
                // time for comment
                let newDate = new Date();
                let year = newDate.getFullYear();
                let month = newDate.getMonth();
                let day = newDate.getDate();
                let hour = newDate.getHours();
                // changes from military time to standard
                if (hour > 12) {
                    hour -= 12;
                } else if (hour === 0 ) {
                    hour = 12;
                }
                let minute = newDate.getMinutes();
                let commentDate = document.createElement("p")
                commentDate.className = "commentDate"
                commentDate.id = "commentDate"
                commentDate.innerHTML = year + "/" + month + "/" + day + " " + hour + ":" + minute
                n.appendChild(commentDate)
    
                let replyDiv = document.createElement("div")
                replyDiv.className = "replyDiv" + incNum
                replyDiv.id = "replyDiv" + incNum
                n.appendChild(replyDiv)

                let replyDivs = document.querySelectorAll(".replyDiv" + incNum)
                for (let r of replyDivs) {
                    let commentDropDown = document.createElement("details")
                    commentDropDown.className = "commentDrop" + incNum
                    commentDropDown.open = true
                    r.appendChild(commentDropDown)
                    let createSummary = document.querySelectorAll(".commentDrop" + incNum)
                    for (let o of createSummary) {
                        let commentSummary = document.createElement("summary")
                        commentSummary.innerText = "Comments"
                        o.appendChild(commentSummary)
                    }
    
                    let messageComment = document.createElement("textarea")
                    messageComment.className = "messageCommentArea" + incNum
                    messageComment.id = "messageCommentArea" + incNum
                    messageComment.maxLength = "196"
                    messageComment.placeholder = "Send a Comment!"
                    r.appendChild(messageComment)
                    let replyButton = document.createElement("input")
                    replyButton.className = "replyButton" + incNum
                    replyButton.id = "replyButton" + incNum
                    replyButton.type = "image"
                    replyButton.src = "../images/Blab button.png"
                    r.appendChild(replyButton)
                    let postoldReply = JSON.parse(localStorage.getItem("reply" + incNum))
                    
                    if (postoldReply === null) {
                        // do nothing
                    } else {
                    for (q = 0; q < JSON.parse(localStorage.getItem("reply" + incNum)).length; q++) {
                    for (t of createSummary) {
                        let replyProfilePic = document.createElement("img")
                        replyProfilePic.src = "../images/profile_pic.jpg"
                        replyProfilePic.className = "replyProfilePic"
                        t.appendChild(replyProfilePic)
                        let postComment = document.createElement("p")
                        postComment.innerText = profileUserName + ": " + postoldReply[q]
                        t.appendChild(postComment) }}}
                    
                    let incNumber = 1
                    replyButton.addEventListener("click", function() {
                        for (j = 1; j < 100; j++) {
                            let getReply = document.querySelector(".messageCommentArea" + j).value
                            document.querySelector(".messageCommentArea" + j).value = ""
                            if (getReply == "") {
                                 getReply = document.querySelector(".messageCommentArea" + j).value
                                 document.querySelector(".messageCommentArea" + j).value = ""
                            } else {
                                comments["reply"].push(getReply)
                                localStorage.setItem("reply" + j, JSON.stringify(comments["reply"]))
                                postReply = JSON.parse(localStorage.getItem("reply" + j))
    
                                //incNumber++
                                postReply = JSON.parse(localStorage.getItem("reply" + j))  
                                if (postReply === null) {
                                    // do nothing since theres no more replies.
                                } else {
                                getReply.value = ""
                            for (t of createSummary) {
                                
                                let replyProfilePic = document.createElement("img")
                                replyProfilePic.src = "../images/profile_pic.jpg"
                                replyProfilePic.className = "replyProfilePic"
                                t.appendChild(replyProfilePic)
                                let postComment = document.createElement("p")
                                postComment.className = "replyBlab" + incNumber
                                postComment.innerText = profileUserName + ": " + getReply
                                
                               t.appendChild(postComment)
                               
                            }
                            }
                        }
                         
                             
                        
                     } })


    
                }
               
    
            }
            
        }
    
        // waits for click to run sendComment function
        window.addEventListener('load', sendComment);
    }
    }
}

window.addEventListener('load', onLoad)

