const fs = require('fs/promises');
const getOverallLineCoverage = (coverageReport) => {
  const lines = coverageReport.split('\n');
  const coverageStartLine = lines.findIndex(
      (line) => line.includes('----------'));
  const coverageLines = lines.slice(coverageStartLine + 1);
  const overallCoverageLine = coverageLines[2];
  const overallCoverages = overallCoverageLine.replace(/\s/g, '').split('|');
  const overallCoverage = (Number.parseInt(overallCoverages[1]) +
  Number.parseInt(overallCoverages[2]) +
  Number.parseInt(overallCoverages[3]) +
  Number.parseInt(overallCoverages[4]))/4;
  return overallCoverage;
};

const run = async () => {
  const coverageReport = await fs.readFile('coverage.txt', 'utf8');
  const coverage = getOverallLineCoverage(coverageReport);
  console.log(`echo "COVERAGE=${coverage}"`);
};

run();
