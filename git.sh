git init

git add .

git commit -m "first commit"

git branch -M master

git remote add origin git@github.com:Sync-Codes/CodeWars-Solutions.git

git push -u origin master

osasript -e "display notification 'pushed to remote' with title Git Push"