module.exports = function(app) {

  app.get('/thing', function(req, res){
    var thing = false;
    if (req.feature('exPhotonExp')) {
      thing = true;
      res.render("thing", {'thing': thing});
    } else {
      res.render("thing", {'thing': thing});
    }
  });

  app.get('/cpu', function(req, res){
    res.render("cpu", {}); // {layout: 'layout/myLayout'});
  });

  app.get('/sample', function(req, res){
    res.render("sample", {layout: 'layout/myLayout'});
  });

  app.get('/:page', function(req, res){
    res.render(req.params.page, {});
  });
}
