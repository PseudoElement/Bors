#!/bin/bash

# any future command that fails will exit the script
set -e

echo "UPDATING AND RESTARTING"

echo "DELETING /home/ubuntu/frontend"

# Delete the old repo
rm -rf /home/ubuntu/frontend

echo "OLD SOURCE IS DELETED"

# echo (which npm)
# echo (pwd)
# echo $PATH

echo "CLONING FROM git@git.softndit.com:stock-competition/frontend.git TO /home/ubuntu/frontend"

# clone the repo again
git clone git@git.softndit.com:stock-competition/frontend.git /home/ubuntu/frontend

echo "NEW SOURCE IS AVAILABLE AT /home/ubuntu/frontend"

cd /home/ubuntu/frontend

# echo "COPYING ENV"

# cp /home/ubuntu/env_temp /home/ubuntu/frontend/.env
# rm /home/ubuntu/env_temp

echo "ENSURING THE DEPENDENCIES ARE AVAILABLE"
# sudo ./deploy/ensureDeps.sh
export NVM_DIR=$HOME/.nvm;
source $NVM_DIR/nvm.sh;
echo "DEPENDENCIES ARE OK"

docker system prune --all --force
npm run docker:stop

# #install npm packages
# echo "Running npm install"
# npm install

#Restart the node server
npm run docker:start
