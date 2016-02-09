COUNTER=0
while [  $COUNTER -lt 1000000 ]; do
  curl http://127.0.0.1:1337/
  let COUNTER=COUNTER+1
done
