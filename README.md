# Instrukcja przygotowania środowiska na warsztat: Hosting REST API on AWS Serverless

Aby przygotować się do udziału w warsztacie, proszę postępować zgodnie z poniższymi krokami:

---

## 1. Konto AWS

- Załóż aktywne konto AWS (jeśli jeszcze go nie posiadasz):
  1. Wejdź na [stronę rejestracji AWS](https://aws.amazon.com/free/).
  2. Postępuj zgodnie z instrukcjami – wymagane są dane karty płatniczej, ale będziemy korzystać wyłącznie z darmowego poziomu (Free Tier).
  3. Zaloguj się do **AWS Management Console**.

---

## 2. Dostęp do repozytorium kodu

- **GitHub**:
  1. Załóż konto na [GitHubie](https://github.com/), jeśli go nie masz.
  2. Sprawdź, czy masz zainstalowany **Git**:
     ```bash
     git --version
     ```
     Jeśli nie, pobierz Git z [oficjalnej strony](https://git-scm.com/) i zainstaluj.

---

## 3. Edytor kodu

- Zalecany edytor: **Visual Studio Code**:
  1. Pobierz z [code.visualstudio.com](https://code.visualstudio.com/).
  2. Opcjonalnie zainstaluj rozszerzenia do YAML, JSON, AWS Toolkit.

---

## 4. Narzędzia AWS CLI

- Zainstaluj **AWS CLI**:
  1. Pobierz zgodnie z systemem operacyjnym: [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
  2. Po instalacji uruchom konfigurację:
     ```bash
     aws configure
     ```
     Wprowadź:
     - `AWS Access Key ID`
     - `AWS Secret Access Key`
     - region (np. `us-east-1`)
     - domyślny format (np. `json`)

---

## 5. Środowisko lokalne
- Na potrzeby szkolenia używać będziemy środowiska Node.js. [Instrukcja instalacji środowiska](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)

Po przygotowaniu środowiska prosimy o sprawdzenie dostępu do kont AWS i GitHub oraz upewnienie się, że wszystkie narzędzia są poprawnie zainstalowane.
