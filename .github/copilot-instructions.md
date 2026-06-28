When performing a code review, in addition to reviewing code quality:

- For any PR that modifies or adds locale data (files under src/locales/), verify that the claims implicit in the data are factually correct. For example, if phone number patterns are added for a locale, verify that the patterns actually match real phone numbers used in that country according to ITU-T E.164 / national numbering plans, not merely that the code looks syntactically correct.
- For any locale word lists, check that the words are genuine, natural vocabulary in that language and appropriate for use in generated test data. Flag any word that has an offensive, slur, or unprofessional meaning in that language. Words that are merely negative in meaning but professionally acceptable (e.g. "bad", "ugly", "slow") do not need to be flagged.
- Do not flag legitimate technical terms, abbreviations, or loanwords that are acceptable in that locale context.
