/**
 * VendorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    add: function (req,res) {
        res.view('vend');
       },

       show: function (req, res) {
        Vendor.find({}).exec(function (err, vendor) {
          
          if(err){
            res.send(500, {error: 'Database Error'});
          }
          res.view('pages/dashboard/messages', {vendor:vendor});
          
        });
    },
        create: function(req,res){
            var name = req.body.name;
            var email = req.body.email;
            var topic = req.body.topic;
            var message = req.body.message; 
            Vendor.create({name:name, email:email, topic:topic, message:message}).exec(function(err){
              if(err)
              {
                res.send(500, {error: 'Database Error'});
              }
              res.redirect('/mes')
            });
           },

           delete: function(req,res){ 
            var id = req.param('id');
            Vendor.destroy({id: id}).exec(function(err){
              if(err){
                res.send(500, {error: 'Database Error'});
              }
              res.redirect('/mes')
            });
            return false;
          },
          msg: function(req,res){

           var id = req.param('id');
           Vendor.findOne({id : id}).exec(function (err, vendor) {
          
            if(err){
              res.send(500, {error: 'Database Error'});
            }
            res.view('pages/dashboard/details', {vendor:vendor});
            
          });
          },
          
                
  

};

