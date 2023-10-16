echo "---------------- update latest source code ------------------"
git reset --hard HEAD
git pull
echo "---------------- update latest libraries ------------------"
npm install
echo "---------------- start build ------------------"
npx next build
echo "---------------- start new process ------------------"
pm2 start npm --name "ngocdd" -- start
echo "---------------- deploy finished ------------------"