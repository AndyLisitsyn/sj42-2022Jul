function match(candidate, job) {
  return job.skills.every(
    (jobSkill) =>
      !candidate.skills.some(
        (skill) => jobSkill.name === skill.name && skill.preference === "avoid"
      ) &&
      candidate.skills.some(
        (skill) =>
          (skill.name === jobSkill.name ||
            jobSkill.substitutions.some((sub) => sub.name === skill.name)) &&
          jobSkill.idealYears <=
            (skill.preference === "desired"
              ? skill.experience * 1.5
              : skill.experience)
      )
  );
}
