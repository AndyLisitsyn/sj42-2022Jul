// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary)
    throw new ReferenceError("Salary is null!");
  return candidate.minSalary * 0.9 <= job.maxSalary;
}

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8

function match(job, candidates) {
  return candidates.filter(
    (x) =>
      !(x.desiresEquity && job.equityMax === 0) &&
      (job.locations.includes(x.currentLocation) ||
        x.desiredLocations.some((r) => job.locations.includes(r)))
  );
}
