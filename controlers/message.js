const fs=require('fs');
exports.getAddMessage=(req,res, next)=>{
    fs.readFile('username.txt', (err,data)=>{
        if(err){
            data='No chat found'
        }
         res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" >
    <input type="text" name="message" id="message" placeHolder="Message">
    <input type="hidden" name="username" id="username">
     <button type="submit">submit</button>
     </form>`)
    })
   exports.sendMessage= (req,res,next)=>{
        console.log(req.body.username)
        console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username} -${req.body.message}`,{flag:'a'},(err)=>{
        if(err){
            console.log(err);
        }
        res.redirect('/')
    })
    }
   
}