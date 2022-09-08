export default function progressCounter(template) {
  const totalQuestions = 12;
  let trueCount = 0;
  const keys = Object.keys(template);
  keys.forEach((el) => {
    if (el.startsWith('q') && template[el] === true) { trueCount += 1; }
  });
  return Math.round((trueCount / totalQuestions) * 100);
}
