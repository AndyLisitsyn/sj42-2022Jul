function match(candidate, job) {
  for (const jobSkill of job.skills) {
    if (
      candidate.skills.some(
        (skill) => jobSkill.name === skill.name && skill.preference === "avoid"
      ) ||
      !candidate.skills.some(
        (skill) =>
          (skill.name === jobSkill.name ||
            jobSkill.substitutions.some((sub) => sub.name === skill.name)) &&
          (jobSkill.idealYears <= skill.experience ||
            (skill.preference === "desired" &&
              jobSkill.idealYears <= skill.experience * 1.5))
      )
    ) {
      return false;
    }
  }
  return true;
}
