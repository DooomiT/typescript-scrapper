const fs = require('fs/promises');

/**
 * Creates the build status reference
 * @param {string} buildStatus
 * @return {string}
 */
const createBuildStatus = (buildStatus) => {
  if (buildStatus === 'success') {
    return '![build](https://img.shields.io/badge/build-passed-green)';
  } else if (buildStatus === 'failure') {
    return '![build](https://img.shields.io/badge/build-failed-red)';
  } else {
    return '![build](https://img.shields.io/badge/build-unknown-yellow)';
  }
};

const run = async () => {
  const buildStatus = process.env.BUILD_STATUS;
  console.log({ buildStatus });

  const readme = await fs.readFile('README.md', 'utf8');
  const readmeLines = readme.split('\n');
  readmeLines[3] = createBuildStatus(buildStatus);

  await fs.writeFile('README.md', readmeLines.join('\n'), 'utf8');
};

run();
