'use strcit';
var mongoose = require('mongoose');
var Task = mongoose.model('Task');
exports.list_all_tasks = (req,res) => {
    Task.find({},(err,task) => {
        if (err) {
            res.send(err);
        }
        res.jason(task);
    });
};
exports.create_a_task = (req,res) =>{
    var new_task = new Task(req.body);
    new_task.save((err,task) => {
        if (err) {
            res.send(err);
        }
        res.jason(task);
    });
};
exports.read_a_task = (req,res) => {
    Task.findById(req.params.taskId,(err,task) => {
        if (err) {
            res.send(err);
        }
        res.jason(task);
    });
};
exports.update_a_task = (req,res) => {
    Task.findOneAndUpdate({_id:req.params.taskId},req.body,{new:true},(err,task) => {
        if (err) {
            res.send(err);
        }
        res.jason(task);
    });
};
exports.delete_a_task = (req,res) =>{
    Task.remove({_id:req.params.taskId},(err,task) => {
        if (err) {
            res.send(err);
        }
        res.jason({message:"Task Successfully Deleted"});
    });
}