const { danger, warn, markdown, message } = require('danger');
const fs = require('fs');

// Congrats, version bump up!
const isVersionBump = danger.git.modified_files.includes('package.json');
const packageDiff = danger.git.diffForFile('package.json');

if (isVersionBump && packageDiff && packageDiff.includes('version')) {
  message(':tada: Version BUMP UP!');
}

// Warns if there are changes to package.json without changes to yarn.lock.
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('yarn.lock');
if (packageChanged && !lockfileChanged) {
  const msg = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${msg} - <i>${idea}</i>`);
}

// Warn when PR size is large
const bigPRThreshold = 300;
if (danger.github.pr.additions + danger.github.pr.deletions > bigPRThreshold) {
  warn(':exclamation: Big PR');
  markdown(
    '> Pull Request size seems relatively large. If Pull Request contains multiple changes, split each into separate PR will helps faster, easier review.',
  );
}

// new js files should have `@flow` at the top
const jsFiles = danger.git.created_files.filter(path => path.endsWith('js'));
const unFlowedFiles = jsFiles.filter(filepath => {
  const content = fs.readFileSync(filepath);
  return !content.includes('@flow');
});

if (unFlowedFiles.length > 0) {
  warn(
    `These new JS files do not have Flow enabled: ${unFlowedFiles.join(', ')}`,
  );
}
