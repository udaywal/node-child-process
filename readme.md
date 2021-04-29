child_process : to harness the power of the resources.

exec : to run some commands
execFile : to run commands through the file
spawn : 
fork : 
  <!-- Both below calls simply uses around 31secs to finish - because the node started with single process on main thread -->
  loadtest -n 10 -c 10 http://localhost:2000/one
  loadtest -n 10 -c 10 http://localhost:2000/two
  <!-- In this one we are creating a seperate thread to handle the CPU intensive work through the child processes which communicates to master process to handle the data -->
  loadtest -n 10 -c 10 http://localhost:2000/three