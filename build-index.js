const fs = require('fs');
const path = require('path');

function findFiles ({
  directory = 'app',
  extension = '.js',
  exclude = (pathname) => !pathname.startsWith(path.join(__dirname, 'app/lib'))
}) {
  const pathname = path.join(__dirname, directory);
  const children = fs.readdirSync(pathname, { withFileTypes: true })
    .filter(child => exclude(path.join(pathname, child.name)));
  let files = children.filter(child => child.isFile() && child.name.endsWith(extension))
    .map(file => path.join(directory, file.name));
  const folders = children.filter(child => child.isDirectory())
    .map(folder => path.join(directory, folder.name));

  for (const folder of folders) {
    files = files.concat(...findFiles({ directory: folder, extension }));
  }

  return files;
}

function buildIndex ({
  indexFile = 'app/index.html',
  indexTemplateFile = 'app/index.template.html',
}) {
  const jsFiles = [
    'lib/angular/angular.min.js',
    'lib/angular-route/angular-route.min.js',
    // 'lib/angular-loader/angular-loader.min.js',
    ...findFiles({}).map(i => i.substr('app/'.length)),
  ];
  const scriptTags = jsFiles
    .map(file => `\n  <script src="${file}"></script>`)
    .join('');

  const indexTemplate = fs.readFileSync(indexTemplateFile, 'utf-8')
    .split('<!-- ANGULARJS_IMPORTS -->')
    .join(scriptTags);

  // Delete file if it exists
  try {
    fs.unlinkSync(indexFile);
  } catch (e) {
    console.log('no index file');
  }
  // Create file
  fs.writeFileSync(indexFile, indexTemplate, { encoding: 'utf-8' });
}

module.exports.buildIndex = buildIndex;
