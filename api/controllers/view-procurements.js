module.exports = {


    friendlyName: 'View procurement page',
  
  
    description: 'Display the dashboard "procurement" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/vendor',
        description: 'Display the procurement page for authenticated users.'
      },
  
    },
  
  
    fn: async function () {
      
      Procurement.find({}).exec(function (err, procurement) {
    
        if(err){
          res.send(500, {error: 'Database Error'});
        }
        res.view('pages/dashboard/procurement', {procurement:procurement});
        
      });
      return ;
  
    }
  
  
  };
  