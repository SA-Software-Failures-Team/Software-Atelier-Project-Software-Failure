# Software Atelier Project Software Failure - 2025: Git Workflow & Project Guide

This document is a manual for how we use Git and manage our project.

Following these rules is mandatory to keep our project organised and efficient.
---

## 1. Core Rules

These rules are non-negotiable.

* All `git commit` and `git push` commands **MUST** be performed from the Terminal. **DO NOT** use the GitHub website interface to upload or edit files.
* You can **ONLY** commit and push your own work. Doing this on behalf of another person is **PROHIBITED** .
* **Author Meta Tag (CRITICAL):** Every HTML page you create **MUST** include this tag in the `<head>` section, with your name:
    `<meta name="author" content="YOUR_NAME">`
* **W3C Validation:** All HTML pages **MUST** pass validation with the W3C Validator.
---

## 2. First-Time Setup: How to Clone the Repository (You only need to do this **ONCE**)

Before you can work on the project, you need to copy it (clone it) to your computer.

1.  **Install Git: (ONLY IF YOU DID NOT FOLLOW GIT HANDSON)** Go to GIT Lecture and Hands On pdfs on iCorsi and install Git accordingly.
2.  **Configure Git:(ONLY IF YOU DID NOT FOLLOW GIT HANDSON)** Open your terminal and set your name and email. This is required for the project grading.
    ```bash
    git config --global user.name "YOUR_NAME"
    git config --global user.email "YOUR_EMAIL@example.com"
    git config --global pull.rebase false
    ```
3.  **Copy the URL:** (https://github.com/SA-Software-Failures-Team/Software-Atelier-Project-Software-Failure.git).
4.  **Clone the Repo:** In your terminal, navigate to the folder where you want to store the project (e.g., your `Desktop`). Then, run:
    ```bash
    git clone https://github.com/SA-Software-Failures-Team/Software-Atelier-Project-Software-Failure.git
    ```
5.  **Enter the Folder:** You now have a new folder with the project name. Enter it:
    ```bash
    cd Software-Atelier-Project-Software-Failure
    ```

---

## 3. Our Folder Structure (Read Carefully!)

Our project structure is complex. You **MUST** only work in the folder assigned to you.

Before you create a single file, you **MUST** know your assigned path. Adding files to the wrong folder will cause your Pull Request to be rejected.

**A complete list of all team/topic/subtopic assignments and their exact folder paths can be found here:**

(https://docs.google.com/spreadsheets/d/1ehtSelrlqFtAnusZd8mLAWbOZvuQKinWAU2HNHQAsmA)

#### General Structure Overview:

* **`docs/`**: For LaTeX documents and this guide.
* **`src/`**: For the 1st level pages and deeper levels directories.
  * **`src/topics/`**: This is where all topics content lives.
    * **`src/topics/topic_1/`**: Managed by the Topic 1 Team Leader.
       * **`src/topics/topic_1/topic_1_subtopic_1/`**: Work area for the Team Member assigned to Subtopic 1.1.
    * ...and so on for all topics.

---

## 4. The Workflow: How to Add and Update Your Pages

We are using a **Pull Request (PR)** workflow. **No one can push directly to the `main` branch.**

### Step 1: Get the Latest Code

Before you start any new work, get the most up-to-date version of the project.

#### Switch to the main branch
   ```bash
git checkout main    
   ```

#### Pull the latest changes from GitHub
   ```bash
git pull origin main
   ```

### Step 2: Create Your New Branch

#### Create a new branch for the specific page(s) you are working on.
   ```bash
git checkout -b [feature/your_surname]
   ```
example: `git checkout -b boeing737article/wilinski`

### Step 3: Start working :)

#### Navigate with Terminal from local repo directory ONLY TO YOUR assigned folder:
   ```bash
cd src/topics/[your_team_topic]/[your subtopic]/
   ```
example: `cd src/topics/topic_1/topic_1_subtopic_2/`

#### Create your HTML page inside YOUR folder with Terminal.
   ```bash
touch [name_of_your_page]
   ```
example: `touch boeing737_article.html`
optionally you can create and copy files with GUI but make sure you are working in your directory!

#### Add any images to the img/ folder inside YOUR subtopic directory
copy files with GUI but make sure you are working in `img/` folder inside YOUR subtopic directory

#### Remember to add your Author Meta Tag to your HTML!

#### Link to the correct CSS files as directed by your Topic Leader and The CSS team. 
All layouts for subtopic pages you can choose from are in `src/topics/subtopic-styles/`

**DO NOT CHANGE**  anything **YOURSELF**  in those `.css` files, **DO NOT CREATE**  another `.css` files **YOURSELF** (**REGARDLESS** of the directory). Keep in mind that all design must be consistent across all subpages.

If you really think you need to add new feature to .css which can be useful to the others as well, contact with Your Topic Leader and CSS leaders to agree what is possible and reasonable regarding our project scope, time and effort constriants.

### Step 4: Commit Your Changes

#### Add new/changed files from YOUR subtopic directory. 
Before using `git add` type `git status` to make sure that you **ONLY** modified files in **YOUR** folder. If everything looks correct, add the changes.
   ```bash
git status
git add . 
   ```

#### Commit the changes with a clear message 
   ```bash
git commit -m  “[comment about what you have changed]”
   ```
example: `git commit -m "Add page for boeing737article"`

### Step 5: Push Your Branch to GitHub

#### Push your new branch. **NEVER and UNDER ANY CIRCUMSTANCES DO NOT PUSH DIRECTLY TO `main`**!
   ```bash
git push origin [the_same_name_you_created_for_new_branch_in_step_2]
   ```
example: `git push origin boeing737article/wilinski`

### Step 6: Open a Pull Request (PR)

#### Go to our GitHub repository page in your browser.
You will see a prompt to **`"Compare & pull request"`**. Click it.
Set the base branch to main and the compare branch to your feature branch.
#### Write a clear title (e.g. Add page for boeing737article)
In the description, tag your reviewers:
- **Tag your Topic Leader**
- **Tag the Git Leader**

### Step 7: Review & Merge

#### DO NOT MERGE YOUR OWN PULL REQUEST
Your Topic Leader and the Git Leader will review your code. They will check:
- Is the work in the correct folder?
- Does it have author tag?
- Does it pass W3C validation?
- Does it follow the projects CSS style?

#### If the request changes, go back to Step 3 (on the same branch), make the changes, and commit/push again. The PR will update automatically. 
Once approved, a GIT Leader will merge your branch into main. Your work is now part of the project!




