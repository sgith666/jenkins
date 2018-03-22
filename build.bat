#!/bin/bash

mkdir build_app
mkdir build_app/app
cp -r app/* build_app/app/.
cd build_app/app
npm install
cd ..
rm app.zip
zip -r app.zip app
cd ..

