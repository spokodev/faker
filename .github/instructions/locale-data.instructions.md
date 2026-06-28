---
applyTo: "src/locales/**"
---

When reviewing changes to locale data files, perform the following checks in addition to code quality:

**Phone number patterns** (`phone_number/format/*.ts`):
- Verify the regex/format patterns against the actual national numbering plan for this locale's country.
- Check that prefixes, lengths, and digit ranges match the real-world numbering authority (e.g., NKOM for Norway, Ofcom for UK).
- Flag patterns that would generate numbers that could not exist in that country (wrong number of digits, invalid area codes, reserved prefixes).

**Word/name lists** (`word/`, `person/`, `company/`, `location/`):
- Verify that added terms are genuine vocabulary in the locale's language.
- Flag any word or name that carries an offensive, slur, derogatory, or unprofessional meaning in that language, including words that appear innocent in other languages but are offensive in this one.
- Do not flag words that are merely negative in connotation (e.g. "sad", "ugly", "bad behavior") — only flag genuinely offensive, vulgar, or discriminatory terms.
- For person names, flag names that would be widely recognized as fictional/joke names or celebrity names that could be embarrassing.

**Translations and labels** (any file):
- Verify that translated strings actually mean what is claimed (e.g. if a PR says "this is the Norwegian word for X", check that it is).
- Flag factual errors such as incorrect translations or misattributed locale data.
