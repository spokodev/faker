---
applyTo: "src/locales/nb_NO/**"
---

When reviewing nb_NO (Norwegian Bokmål) locale files:

- **Phone numbers**: Norway uses 8-digit numbers. Mobile numbers start with 4 or 9. Landline numbers follow geographic codes (2x, 3x, 5x, 6x, 7x). Emergency/special services use shorter codes. Verify patterns match the NKOM (Nasjonal kommunikasjonsmyndighet) numbering plan.
- **Words**: Must be valid Norwegian Bokmål. Use common vocabulary; avoid Nynorsk-only forms unless in an nn_NO locale.
- **Names**: Norwegian given and family names should reflect actual Norwegian naming conventions.
