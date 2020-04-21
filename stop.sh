#!/bin/sh

fuser -k 3000/tcp &
fuser -k 3330/tcp &
fuser -k 3331/tcp &
fuser -k 3332/tcp &
fuser -k 3333/tcp 