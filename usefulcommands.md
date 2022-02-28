---
slug: usefulcommands
title: Useful Commands
authors: jmt
tags: [Useful, Commands, CloudDocs, Path, Docusaurus, Markdown]
---


## CloudDocs Path

```
~/Library/Mobile\ Documents/com~apple~CloudDocs
```

## Docusaurus

[Docusaurus](https://docusaurus.io/)

### Markdown Headers

```
---
slug:
title:
authors: jmt
tags: []
---
```

### Command Line Tools

[Command Line Tools](https://docusaurus.io/docs/docusaurus-core)

yarn
- start — Builds and serves a preview site locally
- build — Compiles site for production

- serve — Serve built website locally

## mdBook

[mdBook](https://rust-lang.github.io/mdBook/)

mdBook's parser adheres to the [CommonMark](https://commonmark.org/) specification

[Markdown](https://rust-lang.github.io/mdBook/format/markdown.html)

### Command Line Tools

[ Command Line Tools](https://rust-lang.github.io/mdBook/cli/index.html)
 
 mdbook
- build — Renders the book.
- watch — Rebuilds the book any time a source file changes.
- serve — Runs a web server to view the book, and rebuilds on changes.
- test — Tests Rust code samples.
- clean — Deletes the rendered output.
- completions — Support for shell auto-completion

### Summary.md

[Summary.md](https://rust-lang.github.io/mdBook/format/summary.html)

The summary file is used by mdBook to know what chapters to include, in what order they should appear, what their hierarchy is and where the source files are. Without this file, there is no book.

## Mac

### List Open Ports

```shell
sudo lsof -i :port`
```

## Bash

### Translate .tsv to .csvprint

```shell
tr ‘\t’ ‘,’ < file.tsv > file.csv
```

###  Show Hidden Files

```shell
cmd+shift+.
```

### print directory and unique sort names files except .git and .DS_Store

```shell
find . -name .git -prune -name ‘.DS_Store’ -prune -o -print | sed -e “s/[^-][^\/]*\// |/g” -e “s/|\([^ ]\)/|-\1/“ | gawk -F”-“ ‘{ print $2}’ | sort -u
```

---

---

## Rust Utils

### [Rust Utils](https://lib.rs) - link

### [crates.io](https://crates.io) - link

### [bandwhich](https://crates.io/crates/bandwhich)
Display current network utilization by process, connection and remote IP/hostname

### [broot](https://crates.io/crates/broot)
A better way to navigate directories

### [exa](https://crates.io/crates/exa)
A modern replacement for ls.

### [fd](https://crates.io/crates/fd-find)
A simple, fast and user-friendly alternative to find

### [gitui](https://crates.io/crates/gitui)
Blazing fast terminal client for git written in Rust

### [lms](https://crates.io/crates/lms)
A fast and reliable alternative to rsync for synchronizing local files

### [mdbook](https://crates.io/crates/mdbook)
A utility to create modern online books from Markdown files

### [mdbook-admonish](https://crates.io/crates/mdbook-admonish)

### [procs](https://crates.io/crates/procs)
A modern replacement for ps

### [ripgrep](https://crates.io/search?page=1&per_page=10&q=ripgrep)
ripgrep is a line-oriented search tool that recursively searches the current directory for a regex pattern.

### [scrubcsv](https://crates.io/search?q=scrubcsv)
Remove bad lines from large CSV files and normalize the rest

 
### [stdrename](https://github.com/Gadiguibou/stdrename)
Remake all files in a folder according to a specified naming convention (camelCase,
snake_case, kebab-case, etc)

### [obliviate](https://crates.io/search?page=1&per_page=10&q=obliviate)
Utility that removes file older than a certain amount of days

### [xsv](https://crates.io/search?page=1&per_page=10&q=xsv) 	 A high performance CSV command line toolkit

### Rualdi

[rualdi](https://lib.rs/crates/rualdi)

`rada workdir`		 Add current directory with workdir as alias

`rada www /var/www`	 Add /var/www directory with www as alias

`rada stuff ~/stuff	`	Works with home tild alias

`radax workdir	`	Add current directory with workdir as alias and add environment variable named `RAD_WORKDIR` in current environment and in configuration file

`radax workdir . wd`	 Add current directory with workdir as alias
and add environment variable named `RAD_WD` in current environment and to the configuration file

`radx workdir wd`	Add environment variable named RAD_WD which points on alias `workdir` in current environment and to the configuration file

`radx workdir` Add environment variable named `RAD_WORKDIR` which points on alias `workdir` in current environment and to the configuration file

`radxn workdir wd`	Add environment variable named RAD_WD which points on alias `workdir` in current environment without adding it to the configuration file

`rad www/some-site`	 Perform cd in /var/www/some-site

`rad -` Go back to previous directory as cd do it

`radr workdir`	 Remove workdir alias and environment variable associated if exists

`radr www stuff	`		 Works with multiple aliases at same time

`radxr workdir`		 Remove environment variable which points on alias `workdir`

`radl`	List aliases and environment variables

---

### rg - Recursive Grep 
#rg
`-c —count`Only show the count of matching lines for each file.
`-f —file <PATTERNFILE>`	Search for patterns from the given file
`-I, —no-filename` Never print the file path with the matched lines
`-N —no-line-number` Suppress line numbers.
`-S —smart-case`			Smart case search.
`-v —invert-match`				Invert matching
`-w —word-regexp`				Only show matches surrounded by word boundaries.
`-z —search-zip`					Search in compressed files

---

