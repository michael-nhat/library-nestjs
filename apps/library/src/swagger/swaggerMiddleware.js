import  * as swaggerUiExpress from 'swagger-ui-express';
import *as  yaml from 'js-yaml';
import * as path from 'path';
import * as fs from 'fs';
const swagger_path = path.resolve(__dirname, './assets/apidocs/swagger.yaml');
const doc = yaml.load(fs.readFileSync(swagger_path, 'utf8'));

export function swaggerMiddleware(req, res, next) {
  swaggerUiExpress.serve(req, res, function (req, res) {
    swaggerUiExpress.setup(doc)(req, res, next);
  });
}

export function yamlwtf() {
  var swagger_path = path.resolve(__dirname, './assets/apidocs/swagger.yaml');
  const doc = yaml.load(fs.readFileSync(swagger_path, 'utf8'));
  //const yamlDoc = yamljs.load(swagger_path);

  console.log(
    swaggerMiddleware
  , 2222);
}
