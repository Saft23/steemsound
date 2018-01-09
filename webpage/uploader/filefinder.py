import subprocess
import time
import os

added_file = "added"

def run_cmd(cmd):
	p = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
	(output, err) = p.communicate()
	return output	
	
while True:
	print "hello1"
	output = run_cmd("ls files/*/*").split("\n");
	del output[-1]
	for line in output: 
		split = line.split("/")
		dir_name = split[1]
		hash_path = "files/" + dir_name + ".hash";
		if not os.path.isfile(hash_path):
			hash_str = run_cmd("ipfs add -Q " + line)
			file_obj = open(hash_path, "w")
			file_obj.write(hash_str)
			#file_obj = open("files/" + dir_name +  "/hash", "w")
			#file_obj.write(hash_str)
			print line
			print hash_str
			file_obj.close()

	
	time.sleep(5)

print "asddddddddd"
