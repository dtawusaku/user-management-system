
exports.homeRoutes = (req,res)=>{
    res.render('index');
}
exports.add_user = (rq,res)=>{
    res.render('add-user');
}
exports.edit_user = (rq,res)=>{
    res.render('edit-user');
}
exports.update_user = (rq,res)=>{
    // res.render('add-user');
}
exports.delete_user = (rq,res)=>{
    res.render('delete-user');
}