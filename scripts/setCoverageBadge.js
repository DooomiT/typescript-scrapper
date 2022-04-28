const fs = require('fs/promises');

/**
 * Create the coverage reference
 * @param {int} coverage 
 * @return {string}
 */
const createCoverage = (coverage) => {
  if (coverage > 90) {
    return `![coverage](https://img.shields.io/badge/coverage-${coverage}%25-brightgreen)`;
  } else if (coverage > 80) {
    return `![coverage](https://img.shields.io/badge/coverage-${coverage}%25-green)`;
  } else if (coverage > 70) {
    return `![coverage](https://img.shields.io/badge/coverage-${coverage}%25-yellow)`;
  } else if (coverage > 60) {
    return `![coverage](https://img.shields.io/badge/coverage-${coverage}%25-orange)`;
  } else {
    return `![coverage](https://img.shields.io/badge/coverage-${coverage}%25-red)`;
  }
};

const run = async () => {
  const coverage = process.env.COVERAGE;
  console.log({ coverage });

  const readme = await fs.readFile('README.md', 'utf8');
  const readmeLines = readme.split('\n');
  readmeLines[4] = createCoverage(Number.parseInt(coverage));

  await fs.writeFile('README.md', readmeLines.join('\n'), 'utf8');
};

run();
