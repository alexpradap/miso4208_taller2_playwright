while true; do ps -o %cpu,%mem -ef | grep 'node src/example.ts' >> cpu.log;date ; sleep 1; done