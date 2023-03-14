const moduleName = 'HeaderValidationMiddleware';
const method = '';


function HeaderValidationMiddleware(req, res, next) {

    if(req) 
    {
        // agregar alguna validacion 
        return next();
        
    }
  }
  
  module.exports.HeaderValidationMiddleware = HeaderValidationMiddleware;
  