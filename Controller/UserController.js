module.exports={
    renderHome: async (req, res) => {
        try {
         
                res.render('User/Home');
             
           
        } catch (err) {
            console.log(err);
        }
    },
    renderCourseIntro: async(req,res)=>{
        try {
            
            res.render("User/Course-intro");
        } catch (error) {
            console.log(error);
        }
    },
    renderCourseDetail: async(req,res)=>{
        try {
            
            res.render("User/Course-detail");
        } catch (error) {
            console.log(error);
        }
    },
}