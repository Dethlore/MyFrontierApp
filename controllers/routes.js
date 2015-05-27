module.exports = function(app) {
  
  // Optionally include this to use this alternative template when wanting to create your own header and footer
  /*app.set("view options", {
    layout: "myLayout"
  });*/


  app.get('/thing', function(req, res){
    var thing = false;
    if (req.feature('exPhotonExp')) {
      thing = true;
      res.render("thing", {'thing': thing});
    } else {
      res.render("thing", {'thing': thing});
    }
  });

  app.get('/sample', function(req, res){
    res.render("sample", {layout: 'layout/myLayout'});
  });

  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });
}
