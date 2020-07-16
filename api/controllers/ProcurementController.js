 /**
 * ProcurementController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

delete: function(req,res){ 
  var id = req.param('id');
  Procurement.destroy({id: id}).exec(function(err){
    if(err){
      res.send(500, {error: 'Database Error'});
    }
    res.redirect('/procurement')
  });
  return false;
},

show: function (req, res) {
  Procurement.find({}).exec(function (err, procurement) {
    
    if(err){
      res.send(500, {error: 'Database Error'});
    }
    res.view('pages/dashboard/procurement', {procurement:procurement});
    
  });

  
},

add: function (req,res) {
  res.view('add');
 },

 create: function(req,res){
  var title = req.body.title;
  var body = req.body.body;
  var num = req.body.num;
  Procurement.create({title:title, body:body, num:num}).exec(function(err){
    if(err)
    {
      res.send(500, {error: 'Database Error'});
    }
    res.redirect('/procurement')
  });
 },

 edit: function(req,res)
 {
   var titled= req.param('id');
   Procurement.findOne({id: titled}).exec(function(err, procurement){
    if(err){
     // res.send(500, {error: 'Database Error'});
    }
    res.view('pages/dashboard/edit', {procurement:procurement});
   
   });
 }


};
