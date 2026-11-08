import type { Publication } from '../content'

const paper: Publication = {
  title:
    'MBABench-2.0: Evaluating AI Agents on Constructing Financial Spreadsheets Beyond Simple Verifiability',
  authors: [
    'Julian Poeltl',
    'Thomson Yen',
    'Patrick Shea',
    'Shubham Anil Varma',
    'Dhruv Rastogi',
    'Zihao Chen',
    'Mengshi Zhang',
    'Hongseok Namkoong',
  ],
  equalContribution: 3,
  venue: 'Preprint',
  year: 2026,
  selected: true,
  arxiv: 'https://arxiv.org/abs/2610.31711',
  website: 'https://mbabench.org/#/',
  summary: `
    Can agents build a financial spreadsheet from scratch?
    MBABench-2.0 introduced 101 entirely new spreadsheet tasks, with a focus on more difficult tasks and more diverse coverage of spreadsheet workflows.
    The benchmark is therefore unique in its sheer number of tasks, difficulty, and task type coverage in financial spreadsheets.
    Our results show that frontier models still fail to produce client-ready financial models most of the time (<16% pass rate for the top model).
    They can be prone to misjudgment, and also tend to build workbooks that are hard to audit or maintain.
  `,
  bibtex: `@article{poeltl2026mbabench2,
  title={{MBABench-2.0}: Evaluating {AI} Agents on Constructing Financial Spreadsheets Beyond Simple Verifiability},
  author={Poeltl, Julian and Yen, Thomson and Shea, Patrick and Varma, Shubham Anil and Rastogi, Dhruv and Chen, Zihao and Zhang, Mengshi and Namkoong, Hongseok},
  journal={arXiv preprint arXiv:2610.31711},
  year={2026}
}`,
}

export default paper
