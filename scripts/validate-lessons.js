#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'lessons', 'data');
const files = fs.readdirSync(dataDir)
  .filter(name => /^b\d+-lesson\d+\.js$/.test(name))
  .sort((a, b) => {
    const [, ab, al] = a.match(/^b(\d+)-lesson(\d+)\.js$/).map(Number);
    const [, bb, bl] = b.match(/^b(\d+)-lesson(\d+)\.js$/).map(Number);
    return ab - bb || al - bl;
  });

const errors = [];
const warnings = [];

function loadLesson(file) {
  const source = fs.readFileSync(path.join(dataDir, file), 'utf8');
  const context = vm.createContext({});
  try {
    return new vm.Script(`${source}\nLESSON_DATA;`, { filename: file }).runInContext(context);
  } catch (error) {
    errors.push(`${file}: could not evaluate LESSON_DATA (${error.message})`);
    return null;
  }
}

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

for (const file of files) {
  const data = loadLesson(file);
  if (!data) continue;

  const match = file.match(/^b(\d+)-lesson(\d+)\.js$/);
  const fileBook = Number(match[1]);
  const fileLesson = Number(match[2]);
  const label = `${file}:`;

  assert(data.book === `book${fileBook}`, `${label} book should be "book${fileBook}"`);
  assert(data.lessonNum === fileLesson, `${label} lessonNum should be ${fileLesson}`);

  ['titleArabic', 'titleEnglish', 'summary'].forEach(field => {
    assert(isNonEmptyString(data[field]), `${label} ${field} is required`);
  });

  assert(Array.isArray(data.vocab) && data.vocab.length > 0, `${label} vocab must be a non-empty array`);
  (data.vocab || []).forEach((item, index) => {
    ['ar', 'trans', 'meaning', 'type'].forEach(field => {
      assert(isNonEmptyString(item[field]), `${label} vocab[${index}].${field} is required`);
    });
  });

  assert(Array.isArray(data.grammarBlocks) && data.grammarBlocks.length > 0, `${label} grammarBlocks must be a non-empty array`);
  (data.grammarBlocks || []).forEach((block, index) => {
    ['title', 'content', 'rule'].forEach(field => {
      assert(isNonEmptyString(block[field]), `${label} grammarBlocks[${index}].${field} is required`);
    });
  });

  assert(Array.isArray(data.practiceQuestions), `${label} practiceQuestions must be an array`);
  (data.practiceQuestions || []).forEach((question, index) => {
    assert(Array.isArray(question.options) && question.options.length >= 2, `${label} practiceQuestions[${index}] needs at least two options`);
    assert(question.options && question.options.includes(question.correct), `${label} practiceQuestions[${index}].correct must match one option string`);
    assert(isNonEmptyString(question.text) || isNonEmptyString(question.arabic), `${label} practiceQuestions[${index}] needs text or arabic`);
  });

  assert(data.quizQuestions && Array.isArray(data.quizQuestions.multipleChoice), `${label} quizQuestions.multipleChoice must be an array`);
  assert(data.quizQuestions && Array.isArray(data.quizQuestions.typing), `${label} quizQuestions.typing must be an array`);

  const multipleChoice = data.quizQuestions?.multipleChoice || [];
  const typing = data.quizQuestions?.typing || [];
  const computedTotal = multipleChoice.length + typing.length;

  assert(data.totalQuestions === computedTotal, `${label} totalQuestions (${data.totalQuestions}) should equal MC + typing (${computedTotal})`);
  assert(Number.isInteger(data.passMark) && data.passMark > 0 && data.passMark <= computedTotal, `${label} passMark should be between 1 and totalQuestions`);

  multipleChoice.forEach((question, index) => {
    assert(isNonEmptyString(question.prompt), `${label} multipleChoice[${index}].prompt is required`);
    assert(Array.isArray(question.options) && question.options.length >= 2, `${label} multipleChoice[${index}] needs at least two options`);
    assert(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < question.options.length, `${label} multipleChoice[${index}].correct is out of range`);
  });

  typing.forEach((question, index) => {
    assert(isNonEmptyString(question.prompt), `${label} typing[${index}].prompt is required`);
    assert(isNonEmptyString(question.ideal), `${label} typing[${index}].ideal is required`);
    assert(Array.isArray(question.accepts) && question.accepts.length > 0, `${label} typing[${index}].accepts must be non-empty`);
  });

  if (data.comprehension) {
    assert(isNonEmptyString(data.comprehension.title), `${label} comprehension.title is required`);
    assert(isNonEmptyString(data.comprehension.arabic), `${label} comprehension.arabic is required`);
    assert(isNonEmptyString(data.comprehension.english), `${label} comprehension.english is required`);
    assert(Array.isArray(data.comprehension.questions), `${label} comprehension.questions must be an array`);
    (data.comprehension.questions || []).forEach((question, index) => {
      assert(Array.isArray(question.options) && question.options.length >= 2, `${label} comprehension.questions[${index}] needs at least two options`);
      assert(question.options && question.options.includes(question.correct), `${label} comprehension.questions[${index}].correct must match one option string`);
    });
  }

  if (data.nextLesson) {
    const nextMatch = data.nextLesson.match(/^b(\d+)-lesson(\d+)\.html$/);
    assert(nextMatch, `${label} nextLesson should look like bX-lessonY.html`);
    if (nextMatch) {
      const nextDataFile = `b${nextMatch[1]}-lesson${nextMatch[2]}.js`;
      warn(fs.existsSync(path.join(dataDir, nextDataFile)), `${label} nextLesson points to future/missing data file ${nextDataFile}`);
    }
  }
}

warnings.forEach(message => console.warn(`Warning: ${message}`));

if (errors.length) {
  errors.forEach(message => console.error(`Error: ${message}`));
  console.error(`\n${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Validated ${files.length} lesson data file(s) with ${warnings.length} warning(s).`);
