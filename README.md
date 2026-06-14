export PATH="$PATH:/c/Users/LiamH/.config/herd/bin"

alias php="/c/Users/LiamH/.config/herd/bin/php.bat"
alias composer="/c/Users/LiamH/.config/herd/bin/composer.bat"

# ==========================================

# Git aliases

# ==========================================

alias gs="git status" # Visa git status
alias gd="git diff" # Visa ändringar
alias ga="git add ." # Lägg till alla filer
alias gcm="git commit -m" # Commit med message
alias gps="git push" # Push till remote
alias gpl="git pull" # Pull senaste ändringar
alias gf="git fetch" # Hämta remote branches

alias gsw="git switch" # Byt branch
alias gswc="git switch -c" # Skapa + byt branch
alias gb="git branch" # Lista branches
alias gco="git checkout" # Checkout branch/file
alias gm="git merge" # Merge branch
alias gbd # Delte branch

alias gmain="git switch main" # Byt till main
alias gdev="git switch dev" # Byt till dev

# ==========================================

# Laravel / Artisan

# ==========================================

alias art="php artisan" # Shortcut till artisan

alias serve="php artisan serve" # Starta Laravel server
alias clearapp="php artisan optimize:clear" # Rensa cache

alias routes="php artisan route:list" # Visa routes
alias migrate="php artisan migrate" # Kör migrations
alias fresh="php artisan migrate:fresh --seed" # Fresh DB + seed
alias seed="php artisan db:seed"
alias tinker="php artisan tinker" # Starta Laravel tinker

# ==========================================

# Laravel generators

# ==========================================

alias makeC="php artisan make:controller" # Skapa controller
alias makeMO="php artisan make:model" # Skapa model
alias makeMI="php artisan make:migration" # Skapa migration
alias makeR="php artisan make:request" # Skapa form request
alias makeMW="php artisan make:middleware" # Skapa middleware
alias makeSE="php artisan make:seeder" # Skapa seeder
alias makeP="php artisan make:policy" # Skapa seeder

# ==========================================

# Node / NPM / Vite

# ==========================================

alias dev="npm run dev" # Starta Vite dev server
alias nr="npm run" # Kör npm scripts

# ==========================================

# Terminal helpers

# ==========================================

alias ll="ls -la" # Visa alla filer inkl. dolda
alias c="clear" # Rensa terminal
alias open="code ." # Öppna projekt i VS Code

# ==========================================

# Productivity helpers

# ==========================================

alias start="npm run dev & php artisan serve" # Starta frontend + backend
alias proj="cd ~/Code" # Gå till Code-mappen

eval "$(zoxide init bash)"

eval "$(fzf --bash)"

# History

export HISTSIZE=10000
export HISTFILESIZE=20000
shopt -s histappend
PROMPT_COMMAND="history -a;$PROMPT_COMMAND"

<!-- main
GIT BRANCH
develop
feature/*
fix/*
hotfix/*
release/* -->
